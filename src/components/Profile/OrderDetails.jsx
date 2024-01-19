import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  // Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../SideBar/Index';
import { useSelector } from 'react-redux';
import { DownloadForOfflineOutlined, Help, Star } from '@mui/icons-material';
import { orders } from '../../constants';
import OrderDetailStapper from './OrderDetailStapper';

function OrderDetails() {
  const { orderId } = useParams();

  const user = useSelector((state) => state.user.user);

  return (
    <div
      style={{
        display: 'flex',
        overflowY: 'hidden',
        overflowX: 'hidden',
        height: '100vh',
      }}
    >
      <Sidebar />
      <Box
        sx={{
          marginTop: '10rem',
          width: '70vw',
          marginLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Card
          sx={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <CardContent
            sx={{ borderRight: '1px solid black', padding: '0px 50px' }}
          >
            <Typography variant="p">
              <strong>Delivery Address</strong>
            </Typography>
            <br />
            <Typography variant="p">{user[0]?.fullName} ,</Typography>
            <Typography>
              {user[0]?.roomNumber},{user[0]?.landmark},{user[0]?.pinCode} ,
              {user[0]?.city} ,{user[0]?.state}, {user[0]?.mobile} ,{' '}
              {user[0]?.city}
            </Typography>
            <Typography variant="p"> Order Id : {orderId}</Typography>
            <br />

            <span>
              <strong>Phone number : </strong> {user?.user?.mobile}
            </span>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              marginRight: '20%',
            }}
          >
            <Typography variant="h6"> More Actions </Typography> <br />
            <IconButton disableRipple>
              <Button
                variant="outlined"
                startIcon={<DownloadForOfflineOutlined />}
              >
                {' '}
                Download Invoice
              </Button>
            </IconButton>
          </CardActions>
        </Card>
        <Card
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '30px',
          }}
        >
          <Container sx={{ display: 'flex', gap: '1rem' }}>
            <Link to={`/product/${orderId}`} style={{ textDecoration: 'none' }}>
              <Box>
                {' '}
                <img
                  src={orders[0].img}
                  style={{ maxHeight: '100px', maxWidth: '100px' }}
                />
              </Box>
              <Box>
                <Typography>{orders[0].title}</Typography>
                <Typography> {orders[0].descption}</Typography>
                <Typography>{orders[0].price}</Typography>
              </Box>
            </Link>
          </Container>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            {' '}
            <OrderDetailStapper />
            <Typography sx={{ alignItems: 'center' }}>
              Your item has been delivered
            </Typography>
          </Container>
          <Container>
            <CardActions
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <IconButton disableRipple>
                <Button
                  sx={{ whiteSpace: 'nowrap' }} // Ensure text stays on a single line
                  startIcon={<Star />}
                >
                  Rate & Review product
                </Button>
              </IconButton>
              <IconButton disableRipple>
                <Button
                  sx={{ whiteSpace: 'nowrap', marginRight: '72%' }} // Ensure text stays on a single line
                  startIcon={<Help />}
                >
                  Need Help ?
                </Button>
              </IconButton>
            </CardActions>
          </Container>
        </Card>
      </Box>
    </div>
  );
}

export default OrderDetails;
