import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Form from './components/Auth/Form.jsx';
import SearchCollege from './components/SearchCollege.jsx';
import Body from './components/Body.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import CollegeForm from './components/CollegeForm.jsx';
import NotificationForm from './components/NotificationForm.jsx';
import AboutUs from './components/AboutUs.jsx';
import AdminLogin from './components/AdminPage/AdminLogin.jsx';
import College from './components/CollegeList/College.jsx';
import Admin from './components/AdminPage/Admin.jsx';
import PrivateRoute from './components/AdminPage/PrivateRoute.jsx';
import LogoutPage from './components/Auth/Logout.jsx';
import CollegeDetails from './components/CollegeList/CollegeDetails.jsx';
import LoginDark from './components/Auth/LoginDark.jsx';

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
        path: "/collegedetails",
        element: <CollegeDetails />
      },
      {
        path: "/login",
        element: <LoginDark />
      },
      {
        path: "/logout",
        element: <LogoutPage />
      },
      {
        path: "/signup",
        element: <Form />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/admin/login",
        element: <AdminLogin />
      },
      {
        path: "/admin",
        element: <PrivateRoute><Admin /></PrivateRoute>,
        children: [
          {
            path: "",
            element: <CollegeForm />
          },
          {
            path: "notifications",
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
