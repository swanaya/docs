import { useParams, useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';

// Mock data (should be shared with main page in real app)
const MOCK_POSTS = [
  {
    id: '1',
    title: 'How do I integrate Ketivee AI with my app?',
    body: 'I want to use Ketivee AI in my Node.js project. What is the best way to get started?',
    author: { name: 'Alice', avatar: '/assets/icons/KDEV.svg' },
    date: '2024-06-01',
    replies: [
      { id: 'r1', body: 'Check the Quick Start guide in the docs!', author: { name: 'Bob' }, date: '2024-06-01' },
      { id: 'r2', body: 'You can use the REST API or the SDK.', author: { name: 'Charlie' }, date: '2024-06-02' },
    ],
    tags: ['integration', 'nodejs'],
  },
  {
    id: '2',
    title: 'Best practices for prompt engineering?',
    body: 'What are some tips for writing effective prompts for Ketivee AI?',
    author: { name: 'Dana', avatar: '/assets/icons/KDEV.svg' },
    date: '2024-06-02',
    replies: [],
    tags: ['prompts', 'best-practices'],
  },
];

export default function CommunityPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [newReply, setNewReply] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // In real app, fetch post by ID from backend
    const found = MOCK_POSTS.find(p => p.id === postId);
    setPost(found);
    // Check for user (same as main page)
    const token = localStorage.getItem('ketivee_token');
    if (token) {
      // In real app, fetch user info from backend
      setUser({ name: 'You', avatar: '/assets/icons/KDEV.svg' });
    }
  }, [postId]);

  const handleNewReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReply.trim() || !post) return;
    const reply = {
      id: 'r' + (post.replies.length + 1),
      body: newReply,
      author: { name: user?.name || 'You' },
      date: new Date().toISOString().slice(0, 10),
    };
    setPost({ ...post, replies: [...post.replies, reply] });
    setNewReply('');
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="text-2xl font-bold mb-4">Post not found</div>
        <button onClick={() => navigate('/community')} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold shadow transition-all duration-200">Back to Community</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-2xl bg-white/10 rounded-xl shadow-lg p-8">
        <button onClick={() => navigate('/community')} className="mb-4 text-purple-200 hover:underline">&larr; Back to Community</button>
        <h1 className="text-3xl font-bold mb-2 text-white">{post.title}</h1>
        <div className="mb-2 text-blue-200 text-sm">By {post.author.name} • {post.date}</div>
        <div className="mb-4 text-lg text-blue-100">{post.body}</div>
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <span key={tag} className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">#{tag}</span>
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-2 text-purple-200">Replies</h2>
        <div className="flex flex-col gap-3 mb-4">
          {post.replies.length === 0 && <div className="text-gray-400">No replies yet.</div>}
          {post.replies.map((reply: any) => (
            <div key={reply.id} className="bg-white/20 rounded-lg p-3">
              <div className="font-semibold text-purple-700 dark:text-purple-200">{reply.author.name}</div>
              <div className="text-gray-900 dark:text-white mb-1">{reply.body}</div>
              <div className="text-xs text-gray-400">{reply.date}</div>
            </div>
          ))}
        </div>
        {user && (
          <form onSubmit={handleNewReply} className="flex flex-col gap-2">
            <textarea
              placeholder="Write a reply..."
              value={newReply}
              onChange={e => setNewReply(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white min-h-[60px]"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold shadow transition-all duration-200 self-end"
            >
              Reply
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 