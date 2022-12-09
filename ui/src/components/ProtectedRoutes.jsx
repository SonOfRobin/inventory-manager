import React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

const ProtectedRoutes = () => {
  const [user, setUser] = useOutletContext();

  console.log('Protected Routes context obj', user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.auth) navigate('/');
  }, [user]);

  return <Outlet context={[user, setUser]} />;

};

export default ProtectedRoutes;