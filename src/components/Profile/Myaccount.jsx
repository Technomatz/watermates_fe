import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { PermIdentity } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const genders = ['Male', 'Female', 'Other'];

const MyAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    birthday: '',
  });
  const user = useSelector((state) => state.user);
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
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
            label="Name"
            name="name"
            value={user?.user?.fullName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={user?.user?.email}
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
            label="Phone Number"
            name="phoneNumber"
            value={user?.user?.mobile}
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