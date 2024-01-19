import React from 'react';
import Sidebar from '../SideBar/Index';
import { Box } from '@mui/material';
import MyAccount from './Myaccount';
import './Profile.css';
import MyAddresses from './MyAddresses';

function MyProfile() {
  return (
    <div style={{ display: 'flex', overflowY: 'hidden' }}>
      <Box>
        <Sidebar />
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}
      >
        <MyAccount />
        <MyAddresses />
      </Box>
    </div>
  );
}

export default MyProfile;
