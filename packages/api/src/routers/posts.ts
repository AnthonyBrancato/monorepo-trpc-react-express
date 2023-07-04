import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const postsRouter = router({
  getPosts: publicProcedure.query(async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await posts.json();
    return data;
  }),
  getPostsById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;

    const post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${input}`
    );
    const data = await post.json();
    return data;
  }),
});
