import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider, useFetcher } from 'react-router-dom';
import Root from './routes/Root';
import { registerAction } from './components/RegisterModal';
import { loginAction } from './components/LoginModal';
import ErrorPage from './error-page';
import RootTheme from './RootTheme';
import { ThemeProvider } from '@mui/material/styles';
import UserHome from './routes/UserHome';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    action: registerAction,
    children: [
      {
        index: true,
        element: <Root />,
        action: loginAction
      }
    ]
  },
  {
    path: '/main',
    element: <UserHome />,
    errorElement: <ErrorPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={RootTheme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);