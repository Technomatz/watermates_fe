import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/reducers/CartReducer';

function MainCart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDeletCartItem = (id) => {
    dispatch(
      toggleCart({
        id,
      }),
    );
  };

  return (
    <Box className="OuterCart">
      <Box className="innermain">
        <Box className="cardscontainer">
          <Box className="leftContainers">
            <Box className="descDiv">
              {cartItems &&
                cartItems.map((elem, index) => {
                  return (
                    <>
                      <Card
                        key={index}
                        sx={{
                          boxShadow: '0 3px 20px rgba(7,141,115,.16)',
                          padding: '20px 15px',
                          borderRadius: '10px',
                          width: '45vw',
                        }}
                      >
                        <CardContent>
                          <Box>
                            <Typography
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                              color="black"
                              gutterBottom
                            >
                              <span
                                style={{
                                  fontWeight: 'bold',
                                  fontSize: '30px',
                                  lineHeight: '20px',
                                }}
                              >
                                {elem?.title}
                              </span>
                              <Button
                                sx={{
                                  marginRight: '20px',
                                  color: '#00b2a2',
                                  fontWeight: 'bold',
                                }}
                                onClick={() => handleDeletCartItem(elem?.id)}
                              >
                                Delete
                              </Button>
                            </Typography>
                          </Box>

                          <Typography variant="p" component="div">
                            2 Per can
                          </Typography>
                          <br />
                          <Divider />
                          <br />
                          <Box
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Box>
                              <p>Product price</p>
                              <h4>{elem?.price}</h4>
                            </Box>
                            <Box>
                              <p>Discount</p>
                              <h4>₹8</h4>
                            </Box>
                            <Box>
                              <p>Delivery Charges</p>
                              <h4>₹30</h4>
                            </Box>
                          </Box>
                          <br />
                          <Box
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Box className=" quantityDiv w-32 mb-5 ">
                              <label
                                htmlFor=""
                                className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                              >
                                Quantity
                              </label>
                              <Box className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                  <span className="m-auto text-2xl font-thin">
                                    -
                                  </span>
                                </button>
                                <input
                                  type="number"
                                  className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                  placeholder="1"
                                />
                                <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                  <span className="m-auto text-2xl font-thin">
                                    +
                                  </span>
                                </button>
                              </Box>
                            </Box>
                            <Box>
                              <p>Total Product Prise</p>
                              <h4>{elem?.price}</h4>
                            </Box>
                          </Box>
                          <Box className="checkboxContainer">
                            <input
                              type="checkbox"
                              style={{
                                marginBottom: '4.5rem',
                              }}
                            />
                            <Box>
                              <p>{elem.discription}</p>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </>
                  );
                })}
            </Box>
            <br />
            <Box className="buttomcontainer">
              {' '}
              <Card
                sx={{
                  boxShadow: '0 3px 20px rgba(7,141,115,.16)',
                  padding: '10px 5',
                  borderRadius: '10px',
                  width: '45vw',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h"
                    sx={{ fontSize: 16 }}
                    color="black"
                    gutterBottom
                  >
                    Have empty Bislery jars with cap ? If yes , select the
                    quantity below
                  </Typography>

                  <Box
                    className="w-32 mb-8"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '517px',
                    }}
                  >
                    <label
                      htmlFor=""
                      className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                    >
                      Quantity
                    </label>
                    <Box
                      className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg"
                      style={{ marginLeft: '5rem' }}
                    >
                      <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        type="number"
                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                        placeholder="1"
                      />
                      <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainCart;
