import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

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

const DetailsModal = ({ isOpen, setIsOpen, data }) => {
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
            <Grid2 container spacing={2}>
              <Grid2 xs={6}>
                <Typography>
                  {data.row?.itemName}
                </Typography>
              </Grid2>
              <Grid2 xs={6}>
                <Typography>
                  {data.row?.quantity}
                </Typography>
              </Grid2>
              <Grid2 xs={12}>
                <Typography>
                  {data.row?.description}
                </Typography>
              </Grid2>
              <Grid2 xs={10}>
              </Grid2>
              <Grid2 xs={2} >
              </Grid2>
            </Grid2>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

DetailsModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  data: PropTypes.object,
};

export default DetailsModal;