import React from 'react';
import { useRoutes } from 'react-router-dom';
import {protectedRoutes} from "./protectedRoutes.tsx";
export const AppRoutes = () => {
  const element = useRoutes(protectedRoutes);
  return <div>{element}</div>;
};
