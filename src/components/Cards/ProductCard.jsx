import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/reducers/FavoriteReducer';
import { Favorite } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { Post } from '../../utils/api';
import { toggleCart } from '../../redux/reducers/CartReducer';

function ProductCard({ imgUrl, title, discription, price, id, isFavorite }) {
  const [localIsFavorite, setLocalIsFavorite] = useState(false);
  const [isCatItem, setIsCartItem] = useState(false);
  const [animateFavorite, setAnimateFavorite] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.favorite);
  useEffect(() => {
    if (Array.isArray(state)) {
      setLocalIsFavorite(state.map((item) => item.id).includes(id));
    }
  }, [isFavorite, id, state]);
  const isCartItems = useSelector((state) => state.cart);

  useEffect(() => {
    if (Array.isArray(isCartItems)) {
      setIsCartItem(isCartItems.map((item) => item.id).includes(parseInt(id)));
    }
  }, [isCartItems, id]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setAnimateFavorite(true);
    if (localIsFavorite) {
      dispatch(
        toggleFavorite({
          id,
          imgUrl,
          title,
          discription,
          price,
        }),
      );
    } else {
      dispatch(
        toggleFavorite({
          id,
          imgUrl,
          title,
          discription,
          price,
        }),
      );

      toast.success(' Item Added To Wishlist!', {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    setTimeout(() => {
      setAnimateFavorite(false);
    }, 1000);
  };

  const handleAddToCartClick = async (e) => {
    e.preventDefault();

    dispatch(toggleCart({ id }));

    try {
      await Post(
        `/products/${id}/add_to_cart`,
        {
          id,
        },
        { isAuthRequired: true },
      );

      toast.success(
        isCatItem ? 'Item Removed From Cart!' : 'Item Added To Cart!',
        {
          position: 'bottom-center',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        },
      );
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
      <section className="card">
        <Box className="product-image">
          <img
            src={imgUrl}
            alt="OFF-white Red Edition"
            className="productImg"
            draggable="false"
          />
        </Box>
        <Box className="product-info">
          <h2>{title}</h2>
          <p>{discription}</p>
          <Box className="price">${price}</Box>
        </Box>
        <Box className="btn">
          <button
            className={`buy-btn ${isCatItem ? 'in-cart' : ''}`}
            onClick={(e) => handleAddToCartClick(e)}
          >
            {isCatItem ? 'Remove From Cart' : 'Add To Cart'}
          </button>
          <button
            className="fav"
            onClick={(e) => handleFavoriteClick(e)}
            style={{
              transform: animateFavorite ? 'scale(1.3)' : 'scale(1)',
              transition: 'transform 0.1s ease-in-out',
            }}
          >
            <Favorite
              style={{
                color: localIsFavorite ? 'red' : '',
                height: '35px',
                width: '35px',
              }}
            />
          </button>
        </Box>
      </section>
    </Link>
  );
}
export default ProductCard;
