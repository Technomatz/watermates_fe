import React from 'react';
import '../Cards/ProductCard.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { toggleFavorite } from '../../redux/reducers/FavoriteReducer';
import { Box, Grid, Typography } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import Sidebar from '../SideBar/Index';
import { Link } from 'react-router-dom';

function Favorites() {
  const dispatch = useDispatch(); // Get the dispatch function

  const handleFavoriteClick = (id, imgUrl, title, description, price) => {
    dispatch(
      toggleFavorite({
        id,
        imgUrl,
        title,
        description,
        price,
      }),
    );
  };

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
          width: 'min-content',
        }}
      >
        <Grid container spacing={1}>
          {favorites.length === 0 ? (
            <Typography
              variant="h4"
              style={{
                position: 'absolute',
                top: '50%',
                left: '45%',
                fontFamily: 'fantasy',
              }}
            >
              You have not added any favorites yet.
            </Typography>
          ) : (
            <Grid
              container
              item
              spacing={5}
              sx={{ display: 'flex', flexDirection: 'row' }}
            >
              {favorites.map((fav, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  xl={3}
                  key={index}
                  sx={{ display: 'flex', marginLeft: '40px' }}
                >
                  <Link
                    to={`/product/${fav.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <section className="card" key={fav.id}>
                      <div className="product-image">
                        <img
                          src={fav.imgUrl}
                          alt="OFF-white Red Edition"
                          className="productImg"
                          draggable="false"
                        />
                      </div>
                      <div className="product-info">
                        <h2>{fav.title}</h2>
                        <p>{fav.description}</p>
                        <div className="price">${fav.price}</div>
                      </div>
                      <div className="btn">
                        <button className="buy-btn">Buy Now</button>
                        <button
                          className="fav"
                          onClick={() =>
                            handleFavoriteClick(
                              fav.id,
                              fav.imgUrl,
                              fav.title,
                              fav.description,
                              fav.price,
                            )
                          }
                        >
                          <Favorite className="FavIcon" />
                        </button>
                      </div>
                    </section>
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
}

export default Favorites;
