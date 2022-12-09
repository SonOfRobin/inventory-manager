import React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Form, useActionData } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

const Register = () => {

  const test = useActionData();
  console.log(test);
  useEffect(() => {
    console.log('use effect: ', test);
  })
  return (
    <Box >
      <Form method='post'>
        <Grid2 container spacing={2}>
          <Grid2 xs={6}>
            <TextField
              label='First Name'
              fullWidth
              inputProps={{ name: 'firstName', required: true }} />
          </Grid2>
          <Grid2 xs={6}>
            <TextField
              label='Last Name'
              fullWidth
              inputProps={{ name: 'lastName', required: true }} />
          </Grid2>
          <Grid2 xs={12}>
            <TextField
              label='Email Address'
              fullWidth
              inputProps={{ name: 'email', type: 'email', required: true }} />
          </Grid2>
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
              Create Account
            </Button>
          </Grid2>
        </Grid2>
      </Form>
    </Box>
  );
};

export default Register;