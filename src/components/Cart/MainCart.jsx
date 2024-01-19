import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

function MainCart({ setCurrentStape }) {
  const handleNext = () => {
    setCurrentStape(1);
  };
  return (
    <div className="OuterCart">
      <div className="innermain">
        {/* <div className="priceTag">
          <div>
            {' '}
            <span
              style={{ fontWeight: 500, fontSize: '28px', marginRight: '12px' }}
            >
              My cart
            </span>
            <span style={{ background: '#c0edfa', padding: '6px' }}>
              {' '}
              <span style={{ background: 'yellow' }}>16</span> item(s)
            </span>
          </div>
          <div style={{ fontSize: '30px' }}>₹490</div>
        </div> */}

        <div className="cardscontainer">
          <div className="leftContainers">
            <div className="descDiv">
              <div className="priceTag">
                <div>
                  {' '}
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: '28px',
                      marginRight: '12px',
                    }}
                  >
                    My cart
                  </span>
                  <span style={{ background: '#c0edfa', padding: '6px' }}>
                    {' '}
                    <span style={{ background: 'yellow' }}>16</span> item(s)
                  </span>
                </div>
                <div style={{ fontSize: '30px' }}>₹490</div>
              </div>
              <Card
                sx={{
                  boxShadow: '0 3px 20px rgba(7,141,115,.16)',
                  padding: '20px 15px',
                  borderRadius: '10px',
                  width: '45vw',
                }}
              >
                <CardContent>
                  <div>
                    <Typography
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
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
                        Bisleri 20 litre water can
                      </span>
                      <Button
                        sx={{
                          marginRight: '20px',
                          color: '#00b2a2',
                          fontWeight: 'bold',
                        }}
                      >
                        Delete
                      </Button>
                    </Typography>
                  </div>

                  <Typography variant="p" component="div">
                    2 Per can
                  </Typography>
                  <br />
                  <Divider />
                  <br />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>
                      <p>Product price</p>
                      <h4>₹85/Per Can</h4>
                    </div>
                    <div>
                      <p>Discount</p>
                      <h4>₹ 0</h4>
                    </div>
                    <div>
                      <p>Delivery Charges</p>
                      <h4>₹30</h4>
                    </div>
                  </div>
                  <br />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div className=" quantityDiv w-32 mb-5 ">
                      <label
                        htmlFor=""
                        className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                      >
                        Quantity
                      </label>
                      <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
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
                      </div>
                    </div>
                    <div>
                      <p>Total Product Prise</p>
                      <h4>₹30</h4>
                    </div>
                  </div>
                  <div className="checkboxContainer">
                    <input
                      type="checkbox"
                      style={{
                        marginBottom: '4.5rem',
                      }}
                    />
                    <div>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consequatur, perferendis. Est expedita provident
                        vel sapiente! Quae at, impedit officia sunt accusamus
                        inventore delectus praesentium architecto similique hic
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <br />
            <div className="buttomcontainer">
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

                  <div
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
                    <div
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div
            className="sideConatiner"
            style={{ maxWidth: '50vw', marginTop: '54px' }}
          >
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
                <Typography sx={{ fontSize: 24 }} color="black" gutterBottom>
                  Price
                </Typography>
                <Divider />

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
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
              <CardActions>
                <Button
                  style={{
                    background: '#00b2a2',
                    border: '1px solid transparent;',
                    color: '#fff',
                  }}
                  onClick={handleNext}
                >
                  Checkout
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCart;
