import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RegisterModal from '../components/RegisterModal';

const action = () => {
  console.log('successful action performed');
  return ('successful action performed');
};

const Root = () => {
  const [regModal, setRegModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setRegModal(!regModal);
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
          onClick={handleClick}
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
      <RegisterModal isOpen={regModal} setIsOpen={setRegModal} />
    </Box>
  );
};

export default Root;
export { action };