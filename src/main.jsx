import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppShell from './components/layout/AppShell';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import StatsPage from './pages/StatsPage';
import FriendDetailsPage from './pages/FriendDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const router = createHashRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'timeline', element: <TimelinePage /> },
      { path: 'stats', element: <StatsPage /> },
      { path: 'friends/:friendId', element: <FriendDetailsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={2200} theme="colored" />
  </React.StrictMode>,
);

