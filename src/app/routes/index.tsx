import React from 'react';
import { useRoutes } from 'react-router-dom';
import { publicRoutes } from 'app/routes/publicRoutes';
import {protectedRoutes} from "./protectedRoutes.tsx";
export const AppRoutes = () => {
  const element = useRoutes(protectedRoutes);
  return <div>{element}</div>;
};
