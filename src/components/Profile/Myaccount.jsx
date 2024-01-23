import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { PermIdentity } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const genders = ['Male', 'Female', 'Other'];
const renderInputLabel = (label, value) => {
  return value ? label : '';
};
const MyAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    birthday: '',
  });
  const user = useSelector((state) => state.user.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '150px',
          background: 'white',
          padding: '40px 60px',
          borderRadius: '20px',
          marginLeft: '50px',
          width: '150%',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        }}
      >
        <Box className="iconwithtitle">
          {' '}
          <PermIdentity className="profilepageicons" />
          Personal Information
        </Box>
        <Box className="childBox">
          <TextField
            label={renderInputLabel('Name', user[0]?.fullName)}
            name="name"
            value={user[0]?.fullName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label={renderInputLabel('Email', user[0]?.email)}
            name="email"
            type="email"
            value={user[0]?.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Box>
        <Box className="childBox">
          <TextField
            label="Birthday"
            name="birthday"
            type="text"
            value={'02/06/2000'}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            select
            label="Gender"
            name="gender"
            value={'Male'}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            {genders.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <TextField
            label={renderInputLabel('Phone Number', user[0]?.mobile)}
            name="phoneNumber"
            value={user[0]?.mobile}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Box>
      </Box>
    </form>
  );
};

export default MyAccount;
