import { mergeRouters } from '../trpc';
import { postsRouter } from './posts';

export const appRouter = mergeRouters(postsRouter);

export type AppRouter = typeof appRouter;
