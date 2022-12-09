import React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Form, useActionData, useOutletContext } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

const Login = () => {
  const [user, setUser] = useOutletContext();

  const test = useActionData();
  console.log('action data: ', test);

  useEffect(() => {
    console.log('login use effect', user);
    if (test) {
      setUser(test);
    }
  }, [test]);

  return (
    <Box >
      <Form method='post'>
        <Grid2 container spacing={2}>
          <Grid2 xs={6}>
            <TextField
              label='Username'
              fullWidth
              inputProps={{ name: 'username', required: true }} />
          </Grid2>
          <Grid2 xs={6}>
            <TextField
              label='Password'
              fullWidth
              inputProps={{ name: 'password', type: 'password', required: true }} />
          </Grid2>
          <Grid2 xs={7} />
          <Grid2 xs={5}>
            <Button variant='contained' color='secondary' type='submit'>
              Login
            </Button>
          </Grid2>
        </Grid2>
      </Form>
    </Box>
  );
};

export default Login;