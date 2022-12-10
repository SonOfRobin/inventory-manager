import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Form } from 'react-router-dom';

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

const LoginModal = ({ isOpen, setIsOpen }) => {
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
            <Form method='post' action='/login'>
              <Grid2 container spacing={2}>
                <Grid2 xs={6}>
                  <TextField
                    focused
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
        </Fade>
      </Modal>
    </>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default LoginModal;