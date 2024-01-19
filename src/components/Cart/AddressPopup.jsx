import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { enqueueSnackbar } from 'notistack';
import { createUserAddress } from '../../redux/reducers/userReducer';
export default function AddressPopup({
  isModalOpen,
  setModalOpen,
  onSubmit,
  editAddress,
}) {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    selectAddress: '',
    pinCode: '',
    city: '',
    state: '',
    roomNumber: '',
    roadName: '',
    locality: '',
    alternateMobileNumber: '',
    landmark: '',
  });

  useEffect(() => {
    if (editAddress) {
      // If editAddress prop is provided, set the form data to the existing address data
      setFormData(editAddress);
    } else {
      // Reset form data when the modal is opened for adding a new address
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        selectAddress: '',
        pinCode: '',
        city: '',
        state: '',
        roomNumber: '',
        roadName: '',
        locality: '',
        alternateMobileNumber: '',
        landmark: '',
      });
    }
  }, [editAddress, isModalOpen]);

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
    dispatch(createUserAddress(formData));
    onSubmit(formData);
    enqueueSnackbar('Address Added Successfully', {
      variant: 'success',
      autoHideDuration: 3000,
      anchorOrigin: { horizontal: 'left', vertical: 'top' },
    });
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
              id="email"
              label="email"
              type="text"
              fullWidth
              required
              variant="standard"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            {/* <Typography variant="p">Or</Typography> */}
            <TextField
              margin="dense"
              id="selectAddress"
              label="Select Address"
              type="text"
              fullWidth
              required
              variant="standard"
              value={formData.selectAddress}
              onChange={(e) => handleChange('selectAddress', e.target.value)}
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
              id="pinCode"
              label="Pincode"
              type="text"
              fullWidth
              variant="standard"
              value={formData.pinCode}
              required
              onChange={(e) => handleChange('pinCode', e.target.value)}
            />
            <TextField
              margin="dense"
              id="city"
              label="Select City"
              type="text"
              fullWidth
              variant="standard"
              value={formData.city}
              required
              onChange={(e) => handleChange('city', e.target.value)}
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
              id="state"
              label="Select State"
              type="tel"
              fullWidth
              variant="standard"
              required
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value)}
            />
            <TextField
              margin="dense"
              id="roomnumber"
              label="Building/House Number"
              type="text"
              fullWidth
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
              variant="standard"
              value={formData.roadName}
              onChange={(e) => handleChange('roadName', e.target.value)}
            />
            <TextField
              margin="dense"
              id="locality"
              label="Locality"
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
              id="alternatemobileNumber"
              label=" Alternate Mobile Number"
              type="tel"
              fullWidth
              variant="standard"
              value={formData.alternateMobileNumber}
              onChange={(e) =>
                handleChange('alternateMobileNumber', e.target.value)
              }
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
