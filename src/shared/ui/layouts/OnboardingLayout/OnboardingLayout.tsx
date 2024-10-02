import React from 'react';

interface OnboardingLayoutProps {
  children: React.ReactNode;
}
export const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  return <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row">{children}</div>;
};
