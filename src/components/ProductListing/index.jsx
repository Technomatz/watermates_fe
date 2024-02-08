import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from '../Cards/ProductCard';
import { useSelector } from 'react-redux';
import { Get } from '../../utils/api';
import Footer from '../Footer/Index';

function ProductListingPAge() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [products, setProducts] = useState([]);
  const image =
    'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=';

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await Get('/products').then((response) => response);
      setProducts(response?.data?.products);
    };

    fetchProducts();
  }, []);

  const isFavorite = useSelector((state) => state.favorite);
  return (
    <>
      <Box
        sx={{ flexGrow: 1, padding: '5%', marginTop: '3rem', height: '100%' }}
      >
        <Grid container spacing={1}>
          <Grid
            container
            item
            spacing={4}
            sx={{ display: 'flex', flexDirection: 'row' }}
          >
            {products?.map((data, index) => {
              const imageUrl =
                data.images &&
                Array.isArray(data.images) &&
                data.images.length > 0
                  ? image
                  : image;
              return (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                  <ProductCard
                    id={data.id}
                    imgUrl={imageUrl}
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

      <Footer />
    </>
  );
}

export default ProductListingPAge;
