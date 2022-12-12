import React from 'react';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import DataTable from '../components/DataTable';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import NewItemModal from '../components/NewItemModal';
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';



const UserHome = () => {
  const [user] = useOutletContext();
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  const columns = [
    {
      field: 'id'
    },
    {
      field: 'item_name',
      editable: true,
      headerName: 'Product',
      flex: .2,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: .7,
      headerAlign: 'center',
      align: 'center',
      editable: true,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: .08,
      headerAlign: 'center',
      align: 'center',
      editable: true,
      type: 'number',
    },
  ];

  const NewProduct = () => (
    <Button
      onClick={handleModal}
      variant='contained'
      color='primary'
      startIcon={<AddIcon />}
    >
      Product
    </Button>
  )


  const ItemToolBar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <NewProduct />
      </GridToolbarContainer>
    );
  };

  return (
    <Box
      className='user-home'
      height='100%'
      display='flex'
      flexWrap='wrap'
      overflow='hidden'
      flexDirection='column'
      alignContent='center'
      justifyContent='space-evenly'
    >
      <h1>{`Login successful!!. Welcome, ${user.user}`}</h1>
      <Box
        className='grid'
        height='80%'
        width={.8}
        flexDirection='column'
      >
        <DataTable
          itemBar={ItemToolBar}
          user={user}
          columns={columns}
        />
      </Box>
      <NewItemModal isOpen={openModal} setIsOpen={setOpenModal} uid={user.id} />
    </Box>
  );
};

export default UserHome;