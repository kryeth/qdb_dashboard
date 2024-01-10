import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    Navigate,
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';
import { Blogs } from './routes/Blogs/Blogs';
import { ErrorPage } from './routes/ErrorPage/ErrorPage';
import { Dashboards } from './routes/Dashboards/Dashboards';
import { BlogPostDetails } from './components/BlogPostDetails/BlogPostDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate replace to="/dashboards/overview" />
            },
            {
                path: 'blogs/latest-posts',
                element: <Blogs />
            },
            {
                path: 'blogs/all-posts',
                element: <Blogs />
            },
            {
                path: 'blogs/archived',
                element: <Blogs />
            },
            {
                path: 'blogs/:id',
                element: <BlogPostDetails />
            },
            {
                path: 'dashboards/overview',
                element: <Dashboards />
            },
            {
                path: 'dashboards/calendar',
                element: <Dashboards />
            },
            {
                path: 'dashboards/schedule-actions',
                element: <Dashboards />
            },
            {
                path: 'dashboards/live-alerts',
                element: <Dashboards />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
