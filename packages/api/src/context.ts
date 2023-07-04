import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

export type Context = inferAsyncReturnType<typeof createContext>;

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return {};
}; // no context

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
export const t = initTRPC.context<Context>().create();
