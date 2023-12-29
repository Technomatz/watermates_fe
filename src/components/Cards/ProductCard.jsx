import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ imgUrl, title, discription, price }) {
  return (
    <Link to={`/product/${1}`} style={{ textDecoration: 'none' }}>
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
          <button className="buy-btn">Buy Now</button>
          <button className="fav">
            <svg
              className="svg"
              id="i-star"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              stroke="#000"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
            </svg>
          </button>
        </div>
      </section>
    </Link>
  );
}
export default ProductCard;
