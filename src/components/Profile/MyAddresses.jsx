import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import {
  CheckCircleOutline,
  DeleteOutline,
  EditOutlined,
  RoofingOutlined,
} from '@mui/icons-material';
import '../Cart/Cart.css';
import AddressPopup from '../Cart/AddressPopup';
import { useSelector } from 'react-redux';
function Delivery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [Addresess, setAddresess] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(0);
  const userAddress = useSelector((state) => state.user.user);
  const handleSubmitForm = (data) => {
    if (selectedAddressIndex !== null) {
      const updatedAddresses = [...Addresess];
      updatedAddresses[selectedAddressIndex] = data;
      setAddresess(updatedAddresses);
      setSelectedAddressIndex(null);
    } else {
      setAddresess([...Addresess, data]);
      setDefaultAddressIndex(Addresess.length);
    }
    setModalOpen(false);
  };

  const handleAddressOpen = () => {
    setModalOpen(!isModalOpen);
    setSelectedAddressIndex(null);
  };

  const handleDeleteAddress = (index) => {
    const updatedAddresses = [...Addresess];
    updatedAddresses.splice(index, 1);
    setAddresess(updatedAddresses);
    if (index === defaultAddressIndex) {
      setDefaultAddressIndex(0);
    }
  };

  const handleEditAddress = (index) => {
    setSelectedAddressIndex(index);
    setModalOpen(true);
  };

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (Addresess.length === 0) {
      enqueueSnackbar('You Did Not Added Any Address Yet', {
        variant: 'success',
        autoHideDuration: 3000,
        anchorOrigin: { horizontal: 'left', vertical: 'top' },
      });
    }
  }, [Addresess, enqueueSnackbar]);

  return (
    <Box>
      <Box>
        <Card
          sx={{
            boxShadow: '0 3px 20px rgba(7,141,115,.16)',
            padding: '20px 45px',
            borderRadius: '10px',
            width: '150%',
            marginLeft: '50px',
            marginTop: '20px',
          }}
        >
          <Box className="iconwithtitle">
            {' '}
            <RoofingOutlined className="profilepageicons" />
            Addresses{' '}
          </Box>
          <CardContent>
            <Box>
              <Typography
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                color="black"
                gutterBottom
              >
                <Button
                  onClick={handleAddressOpen}
                  sx={{
                    background: 'lightsteelblue',
                    color: 'white',
                    '&:hover': {
                      background: 'darkslategray',
                    },
                  }}
                >
                  Add a new address
                </Button>

                {isModalOpen && (
                  <AddressPopup
                    isModalOpen={isModalOpen}
                    setModalOpen={setModalOpen}
                    onSubmit={handleSubmitForm}
                    editAddress={Addresess[selectedAddressIndex]}
                  />
                )}
              </Typography>
              <Box className="scrollable-container">
                {userAddress &&
                  userAddress?.map((address, index) => (
                    <Card
                      sx={{
                        boxShadow: '0 3px 20px rgba(7,141,115,.16)',
                        padding: '15px 25px',
                        borderRadius: '10px',
                        marginTop: '30px',
                        width: '40vw',
                        display: 'flex',
                        flexDirection: 'column',
                        background:
                          'linear-gradient(90deg, rgb(238, 251, 255) 0px, rgb(246, 252, 255))',
                      }}
                      key={index}
                    >
                      {index === 0 && (
                        <>
                          <CheckCircleOutline
                            sx={{
                              color: 'green',
                              fontSize: '1.2rem',
                              marginRight: '8px',
                            }}
                          />
                          <span style={{ color: 'red', fontWeight: 'bold' }}>
                            {' '}
                            Default Address
                          </span>
                        </>
                      )}
                      <CardContent
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box>
                          <Typography variant="h6">
                            {address?.fullName},
                          </Typography>
                          <Typography>
                            {address?.roomNumber},{address?.landmark},
                            {address?.pinCode} ,{address?.city} ,
                            {address?.state}, {address?.mobile}
                          </Typography>
                        </Box>
                        <Box>
                          <DeleteOutline
                            sx={{
                              color: 'red',
                              fontSize: '1.2rem',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleDeleteAddress(index)}
                          />
                          <EditOutlined
                            sx={{
                              color: 'rgb(0, 178, 162)',
                              fontSize: '1.2rem',
                              marginLeft: '8px',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleEditAddress(index)}
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
              </Box>
            </Box>
            <Box
              className="addresscontainer"
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            ></Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Delivery;
