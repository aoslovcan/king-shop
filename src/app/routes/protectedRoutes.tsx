import React from 'react';
import { lazyImport } from 'shared/utils';
import { RouteType } from 'app/routes/types';
import { Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout.tsx';

const { HomePage } = lazyImport(() => import('pages/home/HomePage'), 'HomePage');

export const protectedRoutes: RouteType[] = [
  {
    path: '/', // Parent route for rendering the Outlet
    element: <MainLayout />, // Outlet for rendering child routes
    children: [
      {
        path: 'home', // Path for HomePage (renders at `/home`)
        element: <HomePage />
      },
      {
        path: '*', // Fallback route
        element: <Navigate to="/home" replace />
      }
    ]
  }
];
