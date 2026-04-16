import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppShell from './components/layout/AppShell';
import HomePage from './pages/HomePage';
import RouteLoader from './components/common/RouteLoader';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const TimelinePage = lazy(() => import('./pages/TimelinePage'));
const StatsPage = lazy(() => import('./pages/StatsPage'));
const FriendDetailsPage = lazy(() => import('./pages/FriendDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function withRouteLoader(Component) {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Component />
    </Suspense>
  );
}

const router = createHashRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: withRouteLoader(NotFoundPage),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'timeline', element: withRouteLoader(TimelinePage) },
      { path: 'stats', element: withRouteLoader(StatsPage) },
      { path: 'friends/:friendId', element: withRouteLoader(FriendDetailsPage) },
      { path: '*', element: withRouteLoader(NotFoundPage) },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={2200} theme="colored" />
  </React.StrictMode>,
);
