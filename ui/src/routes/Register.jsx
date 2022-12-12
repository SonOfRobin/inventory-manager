import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Form, useActionData, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Register = () => {
  const test = useActionData();
  const handleSubmit = () => {
    console.log('hi');
  };

  console.log(test);
  return (
    <>
      <Form method='post' onSubmit={handleSubmit}>
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
          <Grid2 xs={10} />
          <Grid2 xs={2}>
            <Button variant='contained' color='secondary' type='submit'>
              Create Account
            </Button>
          </Grid2>
        </Grid2>
      </Form>
    </>
  );
};

export default Register;