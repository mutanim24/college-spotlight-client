import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './pages/Home/Home/Home.jsx';
import Signup from './pages/Signup/Signup.jsx';
import AuthProvider from './provider/AuthProvider/AuthProvider.jsx';
import Login from './pages/Login/Login.jsx';
import SingleCollegePage from './pages/SingleCollegePage/SingleCollegePage.jsx';
import College from './pages/College/College.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/college',
        element: <College></College>
      },
      {
        path: '/college/:id',
        element: <SingleCollegePage></SingleCollegePage>,
        loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
