import React, { useState } from 'react';
import { Outlet, redirect } from 'react-router-dom';

const useLocalStorage = (key, defaultVal) => {

  const [storedValue, setStoredValue] = useState(() => {

    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      else {
        localStorage.setItem(key, JSON.stringify(defaultVal));
        return defaultVal;
      }
    }
    catch (error) {
      return defaultVal;
    }
  });

  const setValue = (newVal) => {
    try {
      localStorage.setItem(key, JSON.stringify(newVal));
    }
    catch (error) { /* empty */ }
    setStoredValue(newVal);
  };
  return [storedValue, setValue];
};

const AuthProvider = () => {
  const [user, setUser] = useLocalStorage('user', '');

  return (
    <>
      <Outlet />
    </>
  );
};