import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const PublicNavbar = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleLog = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleGuest = (e) => {
    e.preventDefault();
    console.log(e);
  };


  return (
    <>
      <AppBar position='static'>
        <ToolBar>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
          </Box>
          <Box>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Button
                aria-label='guest-login'
                variant='contained'
                onClick={handleGuest}
              >
                Guest
              </Button>
              <Button
                aria-label='login'
                variant='contained'
                onClick={handleLog}
              >
                Login
              </Button>
              <Button
                aria-label='sign-up'
                variant='contained'
                onClick={handleClick}
              >
                Signup
              </Button>
            </Stack>
          </Box>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default PublicNavbar;