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
  width: '75vh',
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  flexGrow: 1,
};

const NewItemModal = ({ isOpen, setIsOpen, uid }) => {
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
            <Form method='post'>
              <Grid2 container spacing={2}>
                <Grid2 xs={6}>
                  <TextField
                    label='Product'
                    fullWidth
                    inputProps={{ name: 'product', required: true }} />
                </Grid2>
                <Grid2 xs={6}>
                  <TextField
                    label='Quantity'
                    fullWidth
                    inputProps={{ name: 'quantity', type: 'number', required: true }} />
                </Grid2>
                <Grid2 xs={12}>
                  <TextField
                    multiline
                    label='Description'
                    fullWidth
                    inputProps={{ name: 'description', type: 'text', required: true }} />
                </Grid2>
                <Grid2 xs={10}>
                  <input type='hidden' name='uid' value={uid} />
                </Grid2>
                <Grid2 xs={2} >
                  <Button variant='contained' color='secondary' type='submit' onClick={handleClose}>
                    Create
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

NewItemModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  uid: PropTypes.number,
};

export default NewItemModal;