import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Grid2 from '@mui/material/Unstable_Grid2';
import axios, { isCancel, AxiosError } from 'axios';
import { useFetcher } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vh',
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  flexGrow: 1,

};

const loginAction = async ({ request }) => {
  const { username, password } = Object.fromEntries(await request?.formData());
  console.log(`'From the route action: ' ${username}, ${password}`);

  const token = await axios.post(('http://localhost:8081/login'),
    {
      username: username,
      password: password,
    }
  );
  console.log(token);
  return { token: token, username: username };
};

const LoginModal = ({ isOpen, setIsOpen, setToken, setCredentials }) => {
  const fetcher = useFetcher();
  // useEffect(() => {
  //   if (fetcher.formData) {
  //     const testing = async () => {
  //       const data = Object.fromEntries(fetcher?.formData);
  //       console.log('From the use effect: ', data);
  //     };
  //     testing();
  //   }
  // }, [fetcher]);

  const handleClose = () => setIsOpen(!isOpen);



  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <fetcher.Form method='post' action='/?index'>
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
            </fetcher.Form>
          </Box>
        </Fade>
      </Modal>
    </>
  );

};

LoginModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  setToken: PropTypes.func,
  setCredentials: PropTypes.func,
};

export default LoginModal;
export { loginAction };