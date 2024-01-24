import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from '../Cards/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../utils/api';
import {
  setError,
  setLoading,
  setProducts,
} from '../../redux/reducers/ProductsReducers';
import { productsResponse } from '../../constants';

function ProductListingPAge() {
  const [isFavorited, setIsFavorited] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading());

      try {
        let response = await get('/products').then((response) =>
          response.json(),
        );

        console.log(response, '////response');
        console.log(response?.data, '////responsedata');

        dispatch(setProducts(response.data));
      } catch (error) {
        console.log(error);
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const Products = await get('/products').then((response) => response.data);
  //     if (!products) {
  //       setProducts(productsResponse);
  //     } else {
  //       setProducts(Products);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const isFavorite = useSelector((state) => state.favorite);
  return (
    <Box sx={{ flexGrow: 1, padding: '5%', marginTop: '3rem' }}>
      <Grid container spacing={1}>
        <Grid
          container
          item
          spacing={4}
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          {productsResponse.map((data, index) => {
            return (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                <ProductCard
                  id={data.id}
                  imgUrl={data.img}
                  title={data.name}
                  discription={data.description}
                  price={data.price}
                  isFavorite={isFavorite}
                  isFavorited={isFavorited}
                  setIsFavorited={setIsFavorited}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductListingPAge;
