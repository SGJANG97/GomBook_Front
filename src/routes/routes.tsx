import React from 'react';
import HomePage from '../pages/HomePage';
import AdminLayout from '../layouts/admin/AdminLayout';
import {adminMainPath, userMainPath} from "./path";

export const routes = [
    {
        path: userMainPath,
        element: <HomePage />,
    },
    {
        path: adminMainPath,
        element: <AdminLayout />,
    },
];
