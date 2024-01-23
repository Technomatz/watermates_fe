import React from 'react';
import Sidebar from '../components/SideBar/Index';
import { Box } from '@mui/material';

function ProfileLayout({ children }) {
  return (
    <Box
      style={{
        display: 'flex',
        overflowY: 'hidden',
        height: '100vh',
      }}
    >
      <Sidebar />
      {children}
    </Box>
  );
}

export default ProfileLayout;
