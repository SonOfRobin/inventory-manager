import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

const Root = () => {
  const [regModal, setRegModal] = useState(false);
  const [logModal, setLogModal] = useState(false);
  const [token, setToken] = useState({});
  const [credentials, setCredentials] = useState({ uToken: '', username: '' });

  const handleClick = (e) => {
    e.preventDefault();
    setRegModal(!regModal);
  };

  const handleLog = (e) => {
    e.preventDefault();
    setLogModal(!logModal);
  };


  return (
    <Box
      height='100vh'
      display='flex'
      justifyContent='center'
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
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
      <LoginModal
        isOpen={logModal}
        setIsOpen={setLogModal}
        setToken={setToken}
        setCredentials={setCredentials} />
      <RegisterModal isOpen={regModal} setIsOpen={setRegModal} />

    </Box>
  );
};

export default Root;