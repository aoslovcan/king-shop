import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {PageLayout} from "../../shared/ui/layouts/PageLayout/PageLayout.tsx";

export const MainLayout = () => {
  return (
    <Suspense
      fallback={<div className="grid min-h-screen place-items-center text-xl font-bold">...</div>}
    >
    <PageLayout>
      <Outlet />
    </PageLayout>
    </Suspense>
  );
};
