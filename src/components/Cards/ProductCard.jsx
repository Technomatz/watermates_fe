import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/reducers/FavoriteReducer';
import { Favorite } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
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
      setAnimateFavorite(false); // Reset the animation state after a delay
    }, 1000);
  };

  const handleAddToCartClick = (e) => {
    e.preventDefault();

    if (isCatItem) {
      dispatch(toggleCart({ id, imgUrl, title, discription, price }));
      toast.success('Item Removed From Cart!', {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      dispatch(toggleCart({ id, imgUrl, title, discription, price }));
      toast.success('Item Added To Cart!', {
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
  };

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
      <section className="card">
        <div className="product-image">
          <img
            src={imgUrl}
            alt="OFF-white Red Edition"
            className="productImg"
            draggable="false"
          />
        </div>
        <div className="product-info">
          <h2>{title}</h2>
          <p>{discription}</p>
          <div className="price">${price}</div>
        </div>
        <div className="btn">
          <button className="buy-btn" onClick={(e) => handleAddToCartClick(e)}>
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
        </div>
      </section>
    </Link>
  );
}
export default ProductCard;
