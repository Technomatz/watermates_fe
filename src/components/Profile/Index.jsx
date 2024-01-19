import React from 'react';
// import Sidebar from '../SideBar/Index';
import { Box } from '@mui/material';
import MyAccount from './Myaccount';
import './Profile.css';
import MyAddresses from './MyAddresses';
import ProfileLayout from '../../layouts/ProfileLayout';

function MyProfile() {
  return (
    <ProfileLayout>
      <div style={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '30px',
          }}
        >
          <MyAccount />
          <MyAddresses />
        </Box>
      </div>
    </ProfileLayout>
  );
}

export default MyProfile;
