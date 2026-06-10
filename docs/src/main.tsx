import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './styles.css';

// Tworzymy instancję routera
const router = createRouter({ routeTree });

// Deklaracja dla TypeScript, żeby nie krzyczał o typy
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Renderowanie aplikacji
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
