import React from 'react';
import MainNav from '../components/MainNav';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <MainNav />
      <Outlet/>
    </div>
  )
}

export default Root;
