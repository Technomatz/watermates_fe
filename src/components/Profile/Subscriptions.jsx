import React from 'react';
import '../Cards/ProductCard.css';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
// import { toggleFavorite } from '../../redux/reducers/FavoriteReducer';
import { Box, Grid, Typography } from '@mui/material';
// import { Favorite } from '@mui/icons-material';
import Sidebar from '../SideBar/Index';

function Subscription() {
  // const dispatch = useDispatch(); // Get the dispatch function

  // const handleFavoriteClick = (id, imgUrl, title, description, price) => {
  //   dispatch(
  //     toggleFavorite({
  //       id,
  //       imgUrl,
  //       title,
  //       description,
  //       price,
  //     }),
  //   );
  // };

  const favorites = useSelector((state) => state.favorite);

  return (
    <div style={{ display: 'flex', height: '100vh', overflowY: 'hidden' }}>
      <Sidebar />

      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          padding: '5%',
          marginTop: '1rem',
          overflowY: 'auto',
          gap: '10px',
        }}
      >
        <Grid container spacing={1}>
          {favorites.length !== 0 || 0 ? (
            <Typography
              variant="h4"
              style={{
                position: 'absolute',
                top: '50%',
                left: '45%',
                fontFamily: 'fantasy',
              }}
            >
              You have not any Subscription yet.
            </Typography>
          ) : (
            <Grid
              container
              item
              spacing={4}
              sx={{ display: 'flex', flexDirection: 'row' }}
            ></Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
}

export default Subscription;
