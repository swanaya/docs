import { useEffect, useState, useRef } from 'react';
import gsap from '../components/gsap';
import { useSearchParams, useNavigate, Link } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

const AUTH_URL = 'https://auth.ketivee.com/login?redirect_uri=https://docs.ketivee.com/community';
const USERINFO_URL = 'https://auth.ketivee.com/api/userinfo'; // Example endpoint

// Loader function to check authentication for community access
export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get('cookie') || '';
  const isLoggedIn = cookie.includes('auth_token=');
  
  if (!isLoggedIn) {
    const url = new URL(request.url);
    return redirect(`https://auth.ketivee.com/login?redirect=${encodeURIComponent(url.href)}`);
  }
  
  return null;
};

export default function Community() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Community state
  interface Post {
    id: string;
    title: string;
    body: string;
    author: { name: string; avatar?: string };
    date: string;
    replies: Array<{
      id: string;
      body: string;
      author: { name: string };
      date: string;
    }>;
    tags: string[];
  }

  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts from backend API on mount
  useEffect(() => {
    fetch('/api.community')
      .then(res => res.json())
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);
  const [showNewPost, setShowNewPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [newPost, setNewPost] = useState({ title: '', body: '', tags: '' });
  const [newReply, setNewReply] = useState('');
  // Search/filter/sort state
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchDropdownRef = useRef<HTMLDivElement>(null);

  // Live search API integration
  useEffect(() => {
    if (search.trim().length === 0) {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }
    const controller = new AbortController();
    fetch(`/api.search?query=${encodeURIComponent(search)}`, { signal: controller.signal })
      .then(res => res.json())
      .then((results: Post[]) => {
        setSearchResults(results);
        setShowSearchDropdown(true);
      })
      .catch(() => setSearchResults([]));
    return () => controller.abort();
  }, [search]);

  // GSAP animation for search dropdown
  useEffect(() => {
    if (showSearchDropdown && searchDropdownRef.current) {
      gsap.fromTo(
        searchDropdownRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
    if (!showSearchDropdown && searchDropdownRef.current) {
      gsap.to(searchDropdownRef.current, { opacity: 0, y: 16, duration: 0.25, ease: 'power2.in' });
    }
  }, [showSearchDropdown, searchResults]);
  const [tagFilter, setTagFilter] = useState('');
  const [sort, setSort] = useState('latest');

  // SSO modal state
  const [showSSOModal, setShowSSOModal] = useState(false);
  const [pendingUser, setPendingUser] = useState<any>(null);
  // CAPTCHA modal state (placeholder)
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaReason, setCaptchaReason] = useState('');

  // On mount, check for token in URL or localStorage
  useEffect(() => {
    const urlToken = searchParams.get('token');
    const localToken = localStorage.getItem('ketivee_token');
    const token = urlToken || localToken;

    if (urlToken) {
      localStorage.setItem('ketivee_token', urlToken);
      // Remove token from URL
      navigate('/community', { replace: true });
    }

    if (!token) {
      setLoading(false);
      return;
    }

    // Validate token with auth server
    fetch(USERINFO_URL, {
      headers: { Authorization: `Bearer ${token}` },
      credentials: 'include',
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Invalid token');
        const data = await res.json();
        // Instead of auto-login, show SSO modal for confirmation
        setPendingUser(data);
        setShowSSOModal(true);
        setLoading(false);
      })
      .catch(() => {
        setError('Session expired or invalid. Please log in again.');
        setLoading(false);
        localStorage.removeItem('ketivee_token');
      });
  }, [searchParams, navigate]);

  const handleLogin = () => {
    window.location.href = AUTH_URL;
  };

  // Confirm SSO login
  const handleConfirmSSO = () => {
    setUser(pendingUser);
    setShowSSOModal(false);
    setPendingUser(null);
  };
  const handleCancelSSO = () => {
    setShowSSOModal(false);
    setPendingUser(null);
    localStorage.removeItem('ketivee_token');
  };

  // New post logic
  const handleNewPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.body.trim()) return;
    const postData = {
      title: newPost.title,
      body: newPost.body,
      author: { name: user?.name || user?.email || 'You', avatar: user?.avatar || '/assets/icons/KDEV.svg' },
      tags: newPost.tags.split(',').map(t => t.trim()).filter(Boolean),
    };
    const res = await fetch('/api.community', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    const newCreatedPost = await res.json();
    setPosts([newCreatedPost, ...posts]);
    setShowNewPost(false);
    setNewPost({ title: '', body: '', tags: '' });
  };

  // New reply logic
  const handleNewReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReply.trim() || !selectedPost) return;
    const replyData = {
      postId: selectedPost.id,
      reply: {
        body: newReply,
        author: { name: user?.name || user?.email || 'You' },
      },
    };
    const res = await fetch('/api.community', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(replyData),
    });
    const updatedPost = await res.json();
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
    setSelectedPost(updatedPost);
    setNewReply('');
  };


  // Filtered and sorted posts
  const filteredPosts = posts
    .filter(post =>
      (!search || post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase())) &&
      (!tagFilter || post.tags.includes(tagFilter))
    )
    .sort((a, b) => {
      if (sort === 'latest') return b.date.localeCompare(a.date);
      if (sort === 'most-replied') return b.replies.length - a.replies.length;
      return 0;
    });

  // All tags for filter dropdown
  const allTags = Array.from(new Set(posts.flatMap(p => p.tags)));

  const postListRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Animate post list
  useEffect(() => {
    if (postListRef.current) {
      gsap.fromTo(
        postListRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [posts]);

  // Animate modal
  useEffect(() => {
    if (showNewPost && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [showNewPost]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex flex-col items-center justify-start py-16 px-4">
      {/* SSO Modal */}
      {showSSOModal && pendingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-md relative text-center">
            <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">Welcome back!</h2>
            <img src={pendingUser.avatar || '/assets/icons/KDEV.svg'} alt="User" className="w-16 h-16 rounded-full mx-auto mb-2 bg-white" />
            <div className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">{pendingUser.name || pendingUser.email}</div>
            <div className="text-blue-400 mb-4">We found your Ketivee account. Do you want to log in as this user?</div>
            <div className="flex gap-4 justify-center">
              <button onClick={handleConfirmSSO} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold shadow transition-all duration-200">Yes, log me in</button>
              <button onClick={handleCancelSSO} className="px-6 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-800 dark:text-gray-200 font-semibold shadow transition-all duration-200">No, use another account</button>
            </div>
          </div>
        </div>
      )}
      {/* CAPTCHA Modal (placeholder) */}
      {showCaptcha && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-md relative text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">Security Check</h2>
            <div className="mb-4 text-gray-900 dark:text-white">{captchaReason || 'Please complete the CAPTCHA to continue.'}</div>
            <div className="mb-4">[CAPTCHA widget here]</div>
            <button onClick={() => setShowCaptcha(false)} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold shadow transition-all duration-200">Continue</button>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <div className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Ketivee Community</h1>
        <p className="text-lg text-blue-100 mb-6">Share ideas, ask questions, and connect with other Ketivee users. One account, all apps.</p>
        <img src="/assets/docslogo.svg" alt="Community" className="mx-auto w-32 h-32 mb-6" />
      </div>

      {/* Auth State */}
      {loading ? (
        <div className="text-lg text-blue-200">Loading...</div>
      ) : user ? (
        <div className="w-full max-w-2xl bg-white/10 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <img src={user.avatar || '/assets/icons/KDEV.svg'} alt="User" className="w-12 h-12 rounded-full bg-white" />
            <div>
              <div className="font-semibold text-lg">{user.name || user.email}</div>
              <div className="text-blue-200 text-sm">{user.email}</div>
            </div>
          </div>
          <div className="text-blue-100 mb-2">Welcome to the community! Start a discussion or join one below.</div>
          <button
            onClick={() => setShowNewPost(true)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold shadow transition-all duration-200 mt-2"
          >
            + New Post
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center mb-8">
          {error && <div className="text-red-300 mb-2">{error}</div>}
          <button
            onClick={handleLogin}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold text-lg shadow-lg transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M20 8v6M23 11h-6" /></svg>
            Login with Ketivee Account
          </button>
        </div>
      )}

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div ref={modalRef} className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-lg relative">
            <button
              onClick={() => setShowNewPost(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">New Discussion</h2>
            <form onSubmit={handleNewPost} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                required
              />
              <textarea
                placeholder="What's on your mind?"
                value={newPost.body}
                onChange={e => setNewPost({ ...newPost, body: e.target.value })}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white min-h-[100px]"
                required
              />
              <input
                type="text"
                placeholder="Tags (comma separated)"
                value={newPost.tags}
                onChange={e => setNewPost({ ...newPost, tags: e.target.value })}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold shadow transition-all duration-200"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Search, Filter, Sort Bar */}
      <div className="w-full max-w-2xl flex flex-wrap gap-2 mb-4 items-center relative">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => searchResults.length > 0 && setShowSearchDropdown(true)}
          onBlur={() => setTimeout(() => setShowSearchDropdown(false), 200)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          autoComplete="off"
        />
        {/* Search dropdown */}
        {showSearchDropdown && searchResults.length > 0 && (
          <div ref={searchDropdownRef} className="absolute left-0 top-full mt-2 w-full bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-purple-200 dark:border-purple-800 z-40 max-h-96 overflow-auto">
            <div className="p-2 text-xs text-gray-500 dark:text-gray-300">Search results</div>
            {searchResults.map(result => (
              <Link
                key={result.id}
                to={`/community/${result.id}`}
                className="block px-4 py-3 border-b border-gray-100 dark:border-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900 transition"
                onClick={() => setShowSearchDropdown(false)}
              >
                <div className="font-semibold text-purple-700 dark:text-purple-200">{result.title}</div>
                <div className="text-gray-600 dark:text-gray-300 text-xs line-clamp-1">{result.body}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {result.tags.map((tag: string) => (
                    <span key={tag} className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-0.5 rounded text-xs">#{tag}</span>
                  ))}
                </div>
                <div className="text-xs text-gray-400 mt-1">By {result.author.name} • {result.date} • {result.replies.length} replies</div>
              </Link>
            ))}
          </div>
        )}

        <select
          value={tagFilter}
          onChange={e => setTagFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <option value="">All Tags</option>
          {allTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <option value="latest">Latest</option>
          <option value="most-replied">Most Replied</option>
        </select>
      </div>

      {/* Community Posts List */}
      <div className="w-full max-w-2xl bg-white/10 rounded-xl shadow-lg p-6 mt-2">
        <h2 className="text-2xl font-bold mb-4 text-white">Community Discussions</h2>
        {filteredPosts.length === 0 ? (
          <div className="bg-white/20 rounded-lg p-4 text-blue-200">No posts found. Try a different search or tag.</div>
        ) : (
          <div ref={postListRef} className="flex flex-col gap-4">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                to={`/community/${post.id}`}
                className="bg-white/20 rounded-lg p-4 cursor-pointer hover:bg-white/30 transition block"
              >
                <div className="flex items-center gap-3 mb-1">
                  <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full bg-white" />
                  <div className="font-semibold text-lg text-purple-200">{post.title}</div>
                </div>
                <div className="text-blue-100 text-sm mb-1 line-clamp-2">{post.body}</div>
                <div className="flex flex-wrap gap-2 mb-1">
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">#{tag}</span>
                  ))}
                </div>
                <div className="text-xs text-blue-200">By {post.author.name} • {post.date} • {post.replies.length} replies</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Animate post list
  useEffect(() => {
    if (postListRef.current) {
      gsap.fromTo(
        postListRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [filteredPosts]);

  // Animate modal
  useEffect(() => {
    if (showNewPost && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [showNewPost])};