import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { isLoggedIn } from '../../utils';
import { useNavigate } from 'react-router-dom';
import AddressPopup from '../Cart/AddressPopup';
import { useSelector } from 'react-redux';

function ProductCard({ imgUrl, title, discription, price }) {
  const [showSignup, setShowSignup] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [Addresess, setAddresess] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(0);

  const user = useSelector((state) => state?.user?.user);

  const handleSubmitForm = (data) => {
    if (selectedAddressIndex !== null) {
      const updatedAddresses = [...Addresess];
      updatedAddresses[selectedAddressIndex] = data;
      setAddresess(updatedAddresses);
      setSelectedAddressIndex(null);
    } else {
      setAddresess([...Addresess, data]);
      setDefaultAddressIndex(Addresess.length);
    }
    setModalOpen(false);
  };
  console.log(defaultAddressIndex);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isLoggedIn()) {
      setShowSignup(true);
    } else {
      setModalOpen(!isModalOpen);
      if (user.length) {
        navigate('/cart');
      }
    }
  };

  useEffect(() => {
    console.log(showSignup, 'showl=signup');
  }, [handleClick]);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '40vh',
        border: '1px solid',
        padding: '20px 40px',
        justifyContent: 'space-between',
      }}
      className="productContainer"
    >
      <Box>
        <Typography variant="h2" sx={{ alignItems: 'center' }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: '400', marginTop: '2rem' }}>
          {discription}
        </Typography>
        <Typography variant="h6">Rs {price} /Can</Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: '3rem' }}
          size="large"
          onClick={handleClick}
        >
          Book Now
        </Button>
      </Box>
      <Box>
        <img
          src={imgUrl}
          style={{ height: '100%', width: '100%' }}
          alt={title}
        />
      </Box>
      {showSignup ? (
        navigate('/signup')
      ) : (
        <AddressPopup
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          onSubmit={handleSubmitForm}
        />
      )}
    </Box>
  );
}

export default ProductCard;
