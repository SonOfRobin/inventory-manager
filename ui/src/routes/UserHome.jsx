import React from 'react';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import DataTable from '../components/DataTable';
import Box from '@mui/material/Box';
import axios from 'axios';



const UserHome = () => {
  const [user] = useOutletContext();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8081/user/${user.id}`)
      console.log(res.data);
      setTableData(res.data);
    };
    if (user.auth) fetchData();
  }, [user.id, user.auth]);

  const columns = [
    {
      field: 'item_name',
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
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: .3,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  return (
    <Box
      className='user-home'
      height='100vh'
      display='flex'
      flexWrap='wrap'
      flexDirection='column'
      alignContent='center'
      justifyContent='center'
    >
      <h1>{`Login successful!!. Welcome, ${user.user}`}</h1>
      <Box
        className='grid'
        height='80%'
        width={.8}
        display='flex'
        alignContent='center'
        justifyContent='center'
      >
        <DataTable rows={tableData} columns={columns} />
      </Box>
    </Box>
  );
};

export default UserHome;