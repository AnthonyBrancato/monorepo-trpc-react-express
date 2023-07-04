import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { createContext } from './context';
import { appRouter } from './routers/_app';

const app = express();
const port = 8080;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(morgan('dev'));

app.use(
  '/api',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
