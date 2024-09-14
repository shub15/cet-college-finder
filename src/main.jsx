import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Form from './components/Form.jsx';
import SearchCollege from './components/SearchCollege.jsx';
import CollegeList from './components/CollegeList.jsx';
import LoginPage from './components/LoginPage.jsx';
import Body from './components/Body.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Signup from './components/Signup.jsx';
import AdminPage from './components/AdminPage.jsx';
import CollegeForm from './components/CollegeForm.jsx';
import NotificationForm from './components/NotificationForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/search",
        element: <SearchCollege />
      },
      {
        path: "/form",
        element: <Form />
      },
      {
        path: "/colleges",
        element: <CollegeList />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/admin",
        element: <AdminPage />,
        children: [
          {
            path: "/admin",
            element: <CollegeForm />
          },
          {
            path: "/admin/notifications",
            element: <NotificationForm />
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
