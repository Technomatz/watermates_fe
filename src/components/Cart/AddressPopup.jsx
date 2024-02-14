import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  IconButton,
  Box,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { enqueueSnackbar } from 'notistack';
import {
  createUserAddress,
  updateUserAddress,
} from '../../redux/reducers/UserAddress';
import { useNavigate } from 'react-router-dom';
export default function AddressPopup({
  isModalOpen,
  setModalOpen,
  onSubmit,
  editAddress,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [formData, setFormData] = useState({
    id: user.length.toString(),
    fullName: '',
    mobile: '',
    email: '',
    selectAddress: '',
    pinCode: '',
    city: '',
    state: '',
    roomNumber: '',
    roadName: '',
    square: '',
    alternateMobileNumber: '',
    landmark: '',
  });

  useEffect(() => {
    if (editAddress) {
      setFormData(editAddress);
    } else {
      setFormData({
        id: user.length.toString(),
        fullName: '',
        mobile: '',
        email: '',
        state: '',
        pinCode: '',
        city: '',
        Square: '',
        roomNumber: '',
        roadName: '',
        colony: '',
        alternateMobileNumber: '',
        landmark: '',
      });
    }
  }, [editAddress, isModalOpen, user.length]);

  const handleClose = () => {
    setModalOpen(!isModalOpen);
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editAddress) {
      dispatch(
        updateUserAddress({ id: formData.id, updatedAddress: formData }),
      );
      enqueueSnackbar('Address Updated Successfully', {
        variant: 'success',
        autoHideDuration: 3000,
        anchorOrigin: { horizontal: 'left', vertical: 'top' },
      });
    } else {
      dispatch(createUserAddress(formData));
      enqueueSnackbar('Address Added Successfully', {
        variant: 'success',
        autoHideDuration: 3000,
        anchorOrigin: { horizontal: 'left', vertical: 'top' },
      });
      navigate('/cart');
    }

    onSubmit(formData);
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onClose={handleClose} maxWidth="md" fullWidth>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Typography variant="h6">Add Address</Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            gap={4}
          >
            <TextField
              autoFocus
              margin="dense"
              id="fullName"
              label="Full Name"
              type="text"
              fullWidth
              variant="standard"
              required
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
            />
            <TextField
              margin="dense"
              id="mobile"
              label="Mobile Number"
              type="text"
              fullWidth
              variant="standard"
              value={formData.mobile}
              onChange={(e) => handleChange('mobile', e.target.value)}
              required
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            gap={4}
          >
            {' '}
            <TextField
              margin="dense"
              id="alternatemobileNumber"
              label=" Alternate Mobile Number"
              type="tel"
              fullWidth
              required
              variant="standard"
              value={formData.alternateMobileNumber}
              onChange={(e) =>
                handleChange('alternateMobileNumber', e.target.value)
              }
            />
            <Select
              margin="dense"
              id="state"
              label="Select State"
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value)}
              fullWidth
              variant="standard"
              required
              displayEmpty
              sx={{ marginTop: '16px' }}
            >
              <MenuItem value="" disabled>
                Select State
              </MenuItem>
              <MenuItem value="Indore">Madhya Pradesh</MenuItem>
            </Select>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            gap={4}
          >
            <Select
              margin="dense"
              id="city"
              label="Select City"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              fullWidth
              variant="standard"
              required
              displayEmpty
              sx={{ marginTop: '16px' }}
            >
              <MenuItem value="" disabled>
                Select City
              </MenuItem>
              <MenuItem value="Indore">Indore</MenuItem>
            </Select>
            <TextField
              margin="dense"
              id="pinCode"
              label="Pincode"
              type="text"
              fullWidth
              variant="standard"
              value={formData.pinCode}
              required
              onChange={(e) => handleChange('pinCode', e.target.value)}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            gap={4}
          >
            <TextField
              margin="dense"
              id="NearestSquare"
              label="Nearest Square"
              type="tel"
              fullWidth
              variant="standard"
              required
              value={formData.square}
              onChange={(e) => handleChange('state', e.target.value)}
            />
            <TextField
              margin="dense"
              id="roomnumber"
              label="Building/House Number"
              type="text"
              fullWidth
              required
              variant="standard"
              value={formData.roomNumber}
              onChange={(e) => handleChange('roomNumber', e.target.value)}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            gap={4}
          >
            <TextField
              margin="dense"
              id="roadname"
              label="Road Name"
              type="tel"
              fullWidth
              required
              variant="standard"
              value={formData.roadName}
              onChange={(e) => handleChange('roadName', e.target.value)}
            />
            <TextField
              margin="dense"
              id="colony"
              label="Colony Name"
              required
              type="tel"
              fullWidth
              variant="standard"
              value={formData.locality}
              onChange={(e) => handleChange('locality', e.target.value)}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            gap={4}
          >
            <TextField
              margin="dense"
              id="email"
              label="email"
              type="text"
              fullWidth
              required
              variant="standard"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />

            <TextField
              margin="dense"
              id="landmark"
              label="Landmark"
              type="tel"
              fullWidth
              variant="standard"
              value={formData.landmark}
              onChange={(e) => handleChange('landmark', e.target.value)}
            />
          </Box>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
