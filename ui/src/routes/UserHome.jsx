import React from 'react';
import { useOutletContext } from 'react-router-dom';

const UserHome = () => {
  const [user] = useOutletContext();
  return (
    <h1>{`Login successful!!. Welcome, ${user.user}`}</h1>
  );
};

export default UserHome;