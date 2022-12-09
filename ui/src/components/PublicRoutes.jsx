import React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';

const PublicRoutes = () => {
  const [user, setUser] = useOutletContext();

  console.log('Public Routes context obj', user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.auth) navigate('/main');
  }, [user]);

  return <Outlet context={[user, setUser]} />;

};

export default PublicRoutes;