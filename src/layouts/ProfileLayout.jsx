import React from 'react';
import Sidebar from '../components/SideBar/Index';

function ProfileLayout({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        overflowY: 'hidden',
        height: '100vh',
      }}
    >
      <Sidebar />
      {children}
    </div>
  );
}

export default ProfileLayout;
