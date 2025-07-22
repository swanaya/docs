import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { parse } from 'url';

// Dummy in-memory search for posts and chat (replace with real DB)
import { posts, CommunityPost } from './api.community'; // Will need to refactor for real DB

export const loader: LoaderFunction = async ({ request }) => {
  const { query } = parse(request.url, true).query;
  if (!query || typeof query !== 'string') return json([]);
  const q = query.toLowerCase();
  // Search posts
  const results: CommunityPost[] = posts.filter((post: CommunityPost) =>
    post.title.toLowerCase().includes(q) ||
    post.body.toLowerCase().includes(q) ||
    post.tags.some((t: string) => t.toLowerCase().includes(q)) ||
    (post.replies || []).some((r: any) => r.body.toLowerCase().includes(q))
  );
  // TODO: Add chat search
  return json(results);
};
