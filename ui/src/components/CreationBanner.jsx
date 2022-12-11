import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const msgs = {
  success: 'Successfully Created New Item. ',
  failure: 'Failed to Add New Item. ',
};

const CreationBanner = ({ type }) => {

  const handleAniEnd = (e) => e.target.remove();
  return (
    <Box
      onAnimationEnd={handleAniEnd}
      bgcolor='#7dc27e'
      borderRadius='10px'
      textAlign='center'
      border='1px solid'
      borderColor='#155919'
      className='fade-out'
      component='h4'
      color={'#155919'}
      p={2}
    >
      {msgs[type]}
    </Box>
  );
};

CreationBanner.propTypes = {
  type: PropTypes.string
};

export default CreationBanner;