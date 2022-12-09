import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider, useFetcher } from 'react-router-dom';
import Root from './routes/Root';
import registerAction from './actions/registerAction';
import loginAction from './actions/loginAction';
import ErrorPage from './error-page';
import RootTheme from './RootTheme';
import { ThemeProvider } from '@mui/material/styles';
import UserHome from './routes/UserHome';
import AuthWrapper from './components/AuthWrapper';
import Login from './routes/Login';
import Register from './routes/Register';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes';



const router = createBrowserRouter([
  {
    element: <AuthWrapper />,
    children: [
      {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        // action: async (e) => {
        //   console.log(e);
        //   console.log(e?.request);
        //   console.log(Object.fromEntries(await e?.request.formData()));
        //   console.log((e?.request.body));
        //   return registerAction;
        //},
      },
      {
        element: <PublicRoutes />,
        children: [
          {
            path: '/login',
            element: <Login />,
            action: loginAction,
          },
          {
            path: '/register',
            element: <Register />,
            action: registerAction,
          },
        ],
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/main',
            element: <UserHome />,
            errorElement: <ErrorPage />,
          },
        ]
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={RootTheme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);