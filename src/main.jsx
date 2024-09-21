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
import Body from './components/Body.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Signup from './components/Signup.jsx';
import CollegeForm from './components/CollegeForm.jsx';
import NotificationForm from './components/NotificationForm.jsx';
import AboutUs from './components/AboutUs.jsx';
import AdminLogin from './components/AdminPage/AdminLogin.jsx';
import College from './components/testingCollegeList/College.jsx';
import Admin from './components/AdminPage/Admin.jsx';
import PrivateRoute from './components/AdminPage/PrivateRoute.jsx';

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
        path: "/about",
        element: <AboutUs />
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
        element: <College />
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
        element: <AdminLogin />
      },
      {
        path: "/admin/home",
        element: <PrivateRoute><Admin /></PrivateRoute>,
        children: [
          {
            path: "/admin/home",
            element: <CollegeForm />
          },
          {
            path: "/admin/home/notifications",
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
