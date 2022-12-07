import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { action as rootAction } from './routes/Root';
import ErrorPage from './error-page';
import RootTheme from './RootTheme';
import { ThemeProvider } from '@mui/material/styles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    action: rootAction,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={RootTheme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);