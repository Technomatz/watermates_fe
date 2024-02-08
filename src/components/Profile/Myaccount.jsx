import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button } from '@mui/material';
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

  console.log(formData);
  const [isEditing, setIsEditing] = useState(false);
  const user = useSelector((state) => state.user.user);
  const loggedInUser = useSelector((state) => state?.auth?.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
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
        <Box
          className="iconwithtitle"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {' '}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PermIdentity className="profilepageicons" />
            Personal Information
          </Box>
          <Box>
            {isEditing && (
              <Button onClick={handleSaveClick} style={{ float: 'right' }}>
                Save
              </Button>
            )}
            {!isEditing && (
              <Button onClick={handleEditClick} style={{ float: 'right' }}>
                Edit
              </Button>
            )}
          </Box>
        </Box>
        <Box className="childBox">
          <TextField
            label={renderInputLabel('Name', user[0]?.fullName)}
            name="name"
            value={loggedInUser?.full_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputProps={{
              readOnly: !isEditing,
            }}
          />

          <TextField
            label={renderInputLabel('Email', user[0]?.email)}
            name="email"
            type="email"
            value={loggedInUser?.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputProps={{
              readOnly: !isEditing,
            }}
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
            InputProps={{
              readOnly: !isEditing,
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
            InputProps={{
              readOnly: !isEditing,
            }}
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
            InputProps={{
              readOnly: !isEditing,
            }}
          />
        </Box>
      </Box>
    </form>
  );
};

export default MyAccount;
