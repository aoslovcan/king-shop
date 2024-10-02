import React from 'react';
import { lazyImport } from 'shared/utils';
import { RouteType } from 'app/routes/types';
import { Navigate } from 'react-router-dom';
import { Onboarding } from '../layouts/Onboarding.tsx';

const { LoginPage } = lazyImport(() => import('pages/Login/LoginPage'), 'LoginPage');

export const publicRoutes: RouteType[] = [
  {
    element: <Onboarding />, // Outlet for rendering child routes
    children: [
      {
        path: 'login', // Path for HomePage (renders at `/home`)
        element: <LoginPage />
      },
      {
        path: '*', // Fallback route
        element: <Navigate to="/login" replace />
      }
    ]
  }
];
