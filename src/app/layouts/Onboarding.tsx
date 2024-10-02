import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { OnboardingLayout } from 'shared/ui';

export const Onboarding = () => {
  return (
    <Suspense
      fallback={<div className="grid min-h-screen place-items-center text-xl font-bold">...</div>}
    >
      <OnboardingLayout>
        <Outlet />
      </OnboardingLayout>
    </Suspense>
  );
};
