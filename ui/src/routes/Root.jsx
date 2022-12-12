import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import { useOutletContext, useNavigate } from 'react-router-dom';

const footerText =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
 Ut id aliquet eros. Etiam sollicitudin auctor sagittis. 
 Maecenas a elit urna. Nullam sit amet neque mi. 
 Donec ut quam tincidunt, laoreet.`;

const Root = () => {
  const [regModal, setRegModal] = useState(false);
  const [logModal, setLogModal] = useState(false);
  const [user] = useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (user.auth) navigate('/main');
  }, [user]);


  const handleClick = (e) => {
    e.preventDefault();
    setRegModal(!regModal);
  };

  const handleLog = (e) => {
    e.preventDefault();
    setLogModal(!logModal);
  };

  const handleGuest = (e) => {
    e.preventDefault();
    navigate('/guest');
  };

  console.log('Root context obj: ', user);



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
          Sign Up
        </Button>
      </Stack>
      <LoginModal isOpen={logModal} setIsOpen={setLogModal} />
      <RegisterModal isOpen={regModal} setIsOpen={setRegModal} />
      <footer className='footer'
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '30%',
          right: '30%',
          display: 'flex',
          textAlign: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {footerText}
      </footer>
    </Box>
  );
};

export default Root;