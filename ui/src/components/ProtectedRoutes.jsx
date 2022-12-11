import React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import Navbar from './Navbar';
import Box from '@mui/material/Box';

const ProtectedRoutes = () => {
  const [user, setUser] = useOutletContext();

  console.log('Protected Routes context obj', user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.auth) navigate('/');
  }, [user]);

  return (
    <Box className='route-layout' height='100vh'>
      <Navbar />
      <Box className='page-content' width={1} >
        <Outlet context={[user, setUser]} />
      </Box>
    </Box>
  );

};

export default ProtectedRoutes;