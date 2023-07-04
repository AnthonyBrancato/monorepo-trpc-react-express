import { QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { queryClient } from '../libs/react-query';
import { trpc } from '../utils/trpc';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: 'http://localhost:8080/trpc',
        // You can pass any HTTP headers you wish here
      }),
    ],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Router>{children}</Router>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
