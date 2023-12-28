import React from 'react';
import { Card, CardContent, CardMedia, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ imgUrl, title, discription, price }) {
  return (
    <Link to={`/product/${1}`} style={{ textDecoration: 'none' }}>
      <Card className="cardHead">
        <CardMedia
          component="img"
          className="cardImg"
          height="300"
          alt="Big Image"
          src={imgUrl}
        />
        <IconButton className="favIcon" color="primary" aria-label="favorite">
          <FavoriteIcon />
        </IconButton>

        <CardContent>
          <h2 className="textUpper">{title}</h2>
          <p className="textUpper">{discription}</p>
          <h1>₹ {price}/-</h1>
        </CardContent>
      </Card>
    </Link>
  );
}
export default ProductCard;
