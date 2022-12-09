import React, { useState } from 'react';
import { Outlet, redirect } from 'react-router-dom';


const AuthWrapper = () => {
  const [credentials, setCredentials] = useState({ uToken: '', username: '' });

  return (
    <>
      <Outlet />
    </>
  );
};