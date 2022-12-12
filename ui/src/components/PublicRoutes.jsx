import React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';
import Box from '@mui/material/Box';

const footerText =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
 Ut id aliquet eros. Etiam sollicitudin auctor sagittis. 
 Maecenas a elit urna. Nullam sit amet neque mi. 
 Donec ut quam tincidunt, laoreet.`;

const PublicRoutes = () => {
  const [user, setUser] = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.auth) navigate('/main');
  }, [user]);

  return (
    <Box className='page' width='100%'>
      <PublicNavbar />
      <Box
        className='content'
        position='absolute'
        left='10%'
        right='10%'
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Outlet context={[user, setUser]} />
      </Box>
      <Box
        component='footer'
        position='absolute'
        bottom='3%'
        left='30%'
        right='30%'
        display='flex'
        textAlign='center'
        flexWrap='wrap'
        justifyContent='center'
      >
        {footerText}
      </Box>
    </Box>
  );

};

export default PublicRoutes;