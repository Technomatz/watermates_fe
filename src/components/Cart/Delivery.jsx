import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';
import {
  CheckCircleOutline,
  ChevronLeft,
  DeleteOutline,
  EditOutlined,
} from '@mui/icons-material';

import './Cart.css';
import AddressPopup from './AddressPopup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  clearUserAddress,
  updateUserAddress,
} from '../../redux/reducers/UserAddress';

function Delivery({ currentStape, setCurrentStape }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [Addresess, setAddresess] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(0);
  const dispatch = useDispatch();

  const userAddress = useSelector((state) => state.user.user);
  const handleSubmitForm = (data) => {
    if (selectedAddressIndex !== null) {
      const updatedAddresses = [...Addresess];
      updatedAddresses[selectedAddressIndex] = data;
      dispatch(updateUserAddress({ id: data.id, updatedAddress: data }));
      setAddresess(userAddress);
      setSelectedAddressIndex(null);
    } else {
      setAddresess([...Addresess, data]);
      setDefaultAddressIndex(userAddress.length);
    }
    setModalOpen(false);
  };

  const handleAddressOpen = () => {
    setModalOpen(!isModalOpen);
    setSelectedAddressIndex(null);
  };

  const handleDeleteAddress = (id) => {
    console.log(id, '////id');
    dispatch(clearUserAddress({ id }));
    if (id === defaultAddressIndex) {
      setDefaultAddressIndex(0);
    }
  };

  const handleEditAddress = (index) => {
    setSelectedAddressIndex(index);
    setModalOpen(true);
  };

  const handleBack = () => {
    setCurrentStape(currentStape - 1);
  };

  useEffect(() => {
    if (userAddress.length === 0) {
      toast.error('You Did Not Added Any Address Yet');
    }
  }, []);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay(amount) {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js',
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    if (!res) {
      alert('Server error. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_CLr42OejxtiorB',
      currency: 'INR',
      amount: amount * 100,
      name: 'Water Mates',
      description: 'Thanks for purchasing',
      handler: async function (response) {
        alert(response.razorpay_payment_id);
        alert('Payment successful');
      },
      prefill: {
        name: 'Water Mates',
        email: 'Watermates@example.com',
        contact: '8435943098',
      },
      notes: {
        address: 'PU 4 Sch. 54 Indore ',
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <Box>
      <p style={{ marginLeft: '15%' }}> Delivery Details</p>
      <Box className="ContainerDelivery">
        <Box>
          <Card
            sx={{
              boxShadow: '0 3px 20px rgba(7,141,115,.16)',
              padding: '30px 25px',
              borderRadius: '10px',
              width: '45vw',
            }}
          >
            <CardContent>
              <Box>
                <Typography
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                  color="black"
                  gutterBottom
                >
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontSize: '2rem',
                      lineHeight: '20px',
                    }}
                  >
                    Addresses
                  </span>
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

                {userAddress &&
                  userAddress?.map((address, index) => (
                    <Card
                      sx={{
                        boxShadow: '0 3px 20px rgba(7,141,115,.16)',
                        padding: '30px 25px',
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
                            onClick={() => handleDeleteAddress(address?.id)}
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
        <Box className="sideConatiner" style={{ maxWidth: '50vw' }}>
          <Card
            sx={{
              boxShadow: '0 3px 20px rgba(7,141,115,.16)',
              padding: '20px',
              borderRadius: '10px',
              backgroundColor: '#c0edfa',
              width: '20vw',
            }}
          >
            <CardContent>
              {' '}
              <Typography sx={{ fontSize: 24 }} color="black" gutterBottom>
                Price
              </Typography>
              <Divider />
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>Price</p>
                  <h4>₹85/Per Can</h4>
                </Box>
                <Box
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>Delivery Charges</p>
                  <h4>₹ 0</h4>
                </Box>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>Refundable deposite</p>
                  <h4>₹30</h4>
                </div>
              </Box>
              <Divider />
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}
              >
                <h3>Total</h3>
                <h3>490</h3>
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Button
                style={{
                  background: '#00b2a2',
                  border: '1px solid transparent;',
                  color: '#fff',
                }}
                onClick={handleBack}
              >
                <ChevronLeft />
                Back
              </Button>
              <Button
                style={{
                  background: '#00b2a2',
                  border: '1px solid transparent;',
                  color: '#fff',
                }}
                onClick={() => {
                  if (userAddress?.length) {
                    displayRazorpay(500);
                  }
                }}
              >
                Pay Now
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default Delivery;
