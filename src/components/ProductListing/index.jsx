import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from '../Cards/ProductCard';
import { useSelector } from 'react-redux';
import { Get } from '../../utils/api';
import Footer from '../Footer/Index';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import './ProductListing.css';

function ProductListingPage() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    focusOnSelect: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    arrows: true, // Changed to true
    prevArrow: <ArrowBackIosNew />,
    nextArrow: <ArrowForwardIos />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const isFavorite = useSelector((state) => state.favorite);

  return (
    <>
      <Box sx={{ padding: '5%', marginTop: '3rem', height: '60vh' }}>
        <Slider {...settings} style={{ width: '85%', margin: 'auto' }}>
          {products?.map((data, index) => {
            const imageUrl =
              data.images &&
              Array.isArray(data.images) &&
              data.images.length > 0
                ? image
                : image;
            return (
              <ProductCard
                id={data.id}
                key={index}
                imgUrl={imageUrl}
                title={data.name}
                discription={data?.description}
                price={data.price}
                isFavorite={isFavorite}
                isFavorited={isFavorited}
                setIsFavorited={setIsFavorited}
              />
            );
          })}
        </Slider>
      </Box>

      <Footer />
    </>
  );
}

export default ProductListingPage;
