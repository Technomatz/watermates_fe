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
// import AddressPopup from './AddressPopup';

function Delivery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [Addresess, setAddresess] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(0);

  const handleSubmitForm = (data) => {
    if (selectedAddressIndex !== null) {
      // Edit existing address
      const updatedAddresses = [...Addresess];
      updatedAddresses[selectedAddressIndex] = data;
      setAddresess(updatedAddresses);
      setSelectedAddressIndex(null);
    } else {
      // Add a new address
      setAddresess([...Addresess, data]);
      setDefaultAddressIndex(Addresess.length);
    }
    setModalOpen(false);
  };

  const handleAddressOpen = () => {
    setModalOpen(!isModalOpen);
    setSelectedAddressIndex(null); // Reset the selected address index when opening the modal
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

  // const handleBack = () => {
  //   setCurrentStape(currentStape - 1);
  // };

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

  // function loadScript(src) {
  //   return new Promise((resolve) => {
  //     const script = document.createElement('script');
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // }
  // async function displayRazorpay(amount) {
  //   const res = await loadScript(
  //     'https://checkout.razorpay.com/v1/checkout.js',
  //   );

  //   if (!res) {
  //     alert('Razorpay SDK failed to load. Are you online?');
  //     return;
  //   }

  //   // creating a new order
  //   // const result = await axios.post(
  //   //   'https://jsonplaceholder.typicode.com/posts',
  //   // );

  //   if (!res) {
  //     alert('Server error. Are you online?');
  //     return;
  //   }

  //   const options = {
  //     key: 'rzp_test_CLr42OejxtiorB', // Enter the Key ID generated from the Dashboard
  //     currency: 'INR',
  //     amount: amount * 100,
  //     name: 'Water Mates',
  //     description: 'Thanks for purchasing',
  //     handler: async function (response) {
  //       console.log(response, '//////////////response');
  //       alert(response.razorpay_payment_id);
  //       alert('Payment successful');
  //     },
  //     prefill: {
  //       name: 'Water Mates',
  //       email: 'Watermates@example.com',
  //       contact: '8435943098',
  //     },
  //     notes: {
  //       address: 'PU 4 Sch. 54 Indore ',
  //     },
  //     theme: {
  //       color: '#61dafb',
  //     },
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  // }

  return (
    <div>
      <div>
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
            <div>
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
              <div className="scrollable-container">
                {Addresess &&
                  Addresess.map((address, index) => (
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
              </div>
            </div>
            <div
              className="addresscontainer"
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            ></div>
          </CardContent>
        </Card>
      </div>
      {/* <div className="sideConatiner" style={{ maxWidth: '50vw' }}>
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
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>Price</p>
                  <h4>₹85/Per Can</h4>
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>Delivery Charges</p>
                  <h4>₹ 0</h4>
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>Refundable deposite</p>
                  <h4>₹30</h4>
                </div>
              </div>
              <Divider />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}
              >
                <h3>Total</h3>
                <h3>490</h3>
              </div>
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
                  if (Addresess.length) {
                    displayRazorpay(500);
                  }
                  enqueueSnackbar(' Please Add Address', {
                    variant: 'error',
                    autoHideDuration: 3000,
                    anchorOrigin: { horizontal: 'left', vertical: 'top' },
                  });
                }}
              >
                Pay Now
              </Button>
            </CardActions>
          </Card>
        </div> */}
    </div>
  );
}

export default Delivery;
