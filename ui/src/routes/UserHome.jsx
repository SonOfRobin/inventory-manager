import React from 'react';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import DataTable from '../components/DataTable';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import NewItemModal from '../components/NewItemModal';

const UserHome = () => {
  const [user] = useOutletContext();
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  const columns = [
    {
      field: 'item_name',
      editable: true,
      headerName: 'Product',
      flex: .4,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      editable: true,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: .3,
      headerAlign: 'center',
      align: 'center',
      editable: true,
      type: 'number',
    },
  ];

  return (
    <Box
      className='user-home'
      height='100vh'
      display='flex'
      flexWrap='wrap'
      overflow='hidden'
      flexDirection='column'
      alignContent='center'
      justifyContent='center'
    >
      <h1>{`Login successful!!. Welcome, ${user.user}`}</h1>
      <Box
        className='grid'
        height='80%'
        width={.8}
        flexDirection='column'
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          mb={2}
        >
          <Button
            onClick={handleModal}
            variant='contained'
            color='primary'
            startIcon={<AddIcon />}
          >
            Product
          </Button>
        </Stack>
        <DataTable
          user={user}
          columns={columns}
        />
      </Box>
      <NewItemModal isOpen={openModal} setIsOpen={setOpenModal} uid={user.id} />
    </Box>
  );
};

export default UserHome;