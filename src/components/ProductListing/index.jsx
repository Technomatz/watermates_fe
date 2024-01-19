import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import ProductCard from '../Cards/ProductCard';
import { useSelector } from 'react-redux';

const data = [
  {
    id: 1,
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'Bisleri Rockstar 300ml',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    id: 2,
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    id: 3,
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    id: 4,
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    id: 5,
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    id: 6,
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    id: 7,
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    id: 8,
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    id: 9,
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
];

function ProductListingPAge() {
  const [isFavorited, setIsFavorited] = useState(false);

  const isFavorite = useSelector((state) => state.favorite);
  return (
    <Box sx={{ flexGrow: 1, padding: '5%', marginTop: '1rem' }}>
      <Grid container spacing={1}>
        <Grid
          container
          item
          spacing={4}
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          {data.map((data, index) => {
            return (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                <ProductCard
                  id={data.id}
                  imgUrl={data.url}
                  title={data.title}
                  discription={data.discription}
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
