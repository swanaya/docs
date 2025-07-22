import type { LoaderFunction, ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

// In-memory store for demonstration; replace with real DB integration
export interface CommunityReply {
  id: string;
  body: string;
  author: { name: string };
  date: string;
}

export interface CommunityPost {
  id: string;
  title: string;
  body: string;
  author: { name: string; avatar?: string };
  date: string;
  replies: CommunityReply[];
  tags: string[];
}

export let posts: CommunityPost[] = [];

export const loader: LoaderFunction = async ({ request }) => {
  // Return all posts
  return json(posts);
};

export const action: ActionFunction = async ({ request }) => {
  const data = await request.json();
  if (request.method === 'POST') {
    const newPost = {
      id: (posts.length + 1).toString(),
      ...data,
      date: new Date().toISOString().slice(0, 10),
      replies: [],
    };
    posts.unshift(newPost);
    return json(newPost);
  }
  if (request.method === 'PATCH') {
    // Add reply to post
    const { postId, reply } = data;
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.replies.push({
        ...reply,
        id: 'r' + (post.replies.length + 1),
        date: new Date().toISOString().slice(0, 10),
      });
      return json(post);
    }
    return json({ error: 'Post not found' }, { status: 404 });
  }
  return json({ error: 'Invalid request' }, { status: 400 });
};
