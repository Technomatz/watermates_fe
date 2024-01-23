import React from 'react';
import Sidebar from '../SideBar/Index';
import { Box, Card, Typography } from '@mui/material';
import { orders } from '../../constants';
import { Link } from 'react-router-dom';

function MyOrders() {
  return (
    <Box
      style={{
        display: 'flex',
        gap: '10px',
        height: '100vh',
        overflowY: 'hidden',
      }}
    >
      <Sidebar />
      <Box
        sx={{
          mt: 15,
          ml: 3,
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '0.4rem',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'transparent',
          },
        }}
      >
        {orders.map((order) => {
          return (
            <Link key={order.id} to={`/my-orders/${order.id}`}>
              <Card
                sx={{
                  display: 'flex',
                  width: '75vw',
                  padding: '20px 10px',
                  mt: '20px',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                  }}
                >
                  <img
                    src={order.img}
                    style={{ height: '5rem', width: '5rem' }}
                  />
                  <Box>
                    <Typography>
                      <strong>{order.title}</strong>
                    </Typography>
                    <Typography>{order.descption}</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'center',
                  }}
                >
                  <Typography>{order.price}</Typography>
                  <Typography>{order.descption}</Typography>
                </Box>
                <Box sx={{ mr: 5 }}>
                  <Typography>Delivered on 24th october</Typography>
                </Box>
              </Card>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default MyOrders;
