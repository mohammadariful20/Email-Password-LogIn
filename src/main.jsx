import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import SignUp from './components/SignUp/SignUp';
import Others from './components/Others/Others';
import AuthProvider from './components/Provider/AouthProvider';
import Privates from './components/Privates/Privates';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/Signup',
        element: <SignUp />
      },
      {
        path: '/others',
        element: <Privates><Others></Others></Privates>
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
