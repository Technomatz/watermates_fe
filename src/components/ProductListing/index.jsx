import { Box, Grid } from '@mui/material';
import React from 'react';
import ProductCard from '../Cards/ProductCard';

const data = [
  {
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'Bisleri Rockstar 300ml',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
  {
    name: 'dev',
    url: 'https://media.istockphoto.com/id/178035079/photo/three-blue-water-cooler-bottles-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oJnhg6E5rRxV8W-VLHg3ehyQNDMZlYwx3ia1l2d_Mx8=',
    title: 'this is your title',
    discription: 'lorem djhwdjdvw wdjqwhdvqwjdhvq dwdhqwvdqwjd',
    price: '198',
  },
];

function ProductListingPAge() {
  return (
    <Box sx={{ flexGrow: 1, padding: '5%' }}>
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
                  imgUrl={data.url}
                  title={data.title}
                  discription={data.discription}
                  price={data.price}
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
