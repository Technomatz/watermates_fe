import React, { useState } from 'react';
import CartStepper from './Index';
import MainCart from './MainCart';
import './Cart.css';
import Delivery from './Delivery';
import { Divider } from '@mui/material';
function Cart() {
  const [currentStape, setCurrentStape] = useState(0);

  return (
    <div
      style={{
        background: 'linear-gradient(90deg,#eefbff 0,#f6fcff)',
        margin: 0,
      }}
    >
      <CartStepper currentStape={currentStape} />
      {currentStape === 0 && (
        <MainCart
          setCurrentStape={setCurrentStape}
          currentStape={currentStape}
        />
      )}
      {currentStape === 1 && (
        <Delivery
          setCurrentStape={setCurrentStape}
          currentStape={currentStape}
        />
      )}
      <Divider sx={{ position: 'absolute', bottom: '10px' }} />
    </div>
  );
}

export default Cart;
