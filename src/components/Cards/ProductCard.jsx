import React from 'react';
// import { Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ imgUrl, title, discription, price }) {
  return (
    <Link to={`/product/${1}`} style={{ textDecoration: 'none' }}>
      {/* <Card classNameName="cardHead">
        <CardMedia
          component="img"
          classNameName="cardImg"
          height="300"
          alt="Big Image"
          src={imgUrl}
        />
        <IconButton classNameName="favIcon" color="primary" aria-label="favorite">
          <FavoriteIcon />
        </IconButton>

        <CardContent>
          <h2 classNameName="textUpper">{title}</h2>
          <p classNameName="textUpper">{discription}</p>
          <h1>₹ {price}/-</h1>
        </CardContent>
      </Card> */}
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
          <img
            src={imgUrl}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {title}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {discription}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
