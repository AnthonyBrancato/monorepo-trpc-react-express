import { createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from '../../../api/src/types';

export const trpc = createTRPCReact<AppRouter>();
