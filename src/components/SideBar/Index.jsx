import React, { useEffect, useRef, useState } from 'react';
import './SideBar.css';
import {
  Favorite,
  LocalMallOutlined,
  LoyaltyOutlined,
  PermIdentity,
} from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducers/authreducer';
import { del } from '../../utils/api';
const Sidebar = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const [activeMenu, setActiveMenu] = useState('acc');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state?.auth?.user?.full_name);

  const getRoutes = () => {
    let currentPath = window.location.pathname;

    currentPath = currentPath.split('/');
    currentPath = currentPath[1];

    switch (currentPath) {
      case 'my-account':
        setActiveMenu('my-account');
        break;
      case 'my-orders':
        setActiveMenu('my-orders');
        break;
      case 'my-subscriptions':
        setActiveMenu('my-subscriptions');
        break;
      case 'my-cart':
        setActiveMenu('my-cart');
        break;

      case 'favorites':
        setActiveMenu('favorites');
        break;

      default:
        setActiveMenu('my-account');
    }
  };

  useEffect(() => {
    getRoutes();
  }, [activeMenu]);

  const handleLogOut = async () => {
    dispatch(logout);
    await del('/users/logout');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-user">
        <div className="userProfile">
          <div className="profile " onClick={handleIconClick}>
            {selectedImage ? (
              <img src={selectedImage} alt="Selected Profile" />
            ) : (
              <PermIdentity />
            )}
          </div>
          <span style={{ color: 'black' }}>
            Welcome back <span style={{ color: 'red' }}> {userName}</span>
          </span>
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              style={{
                display: 'none',
              }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <Divider />
        <div className="containerdiv">
          <div className="tabscontainer">
            <div
              onClick={() => {
                setActiveMenu('my-account');
                navigate('/my-account');
              }}
              className={
                activeMenu === 'my-account' ? 'active_menu tab' : 'tab'
              }
            >
              <PermIdentity className="profilepageicons" />
              My Account
            </div>
            <div
              className={activeMenu === 'my-orders' ? 'active_menu tab' : 'tab'}
              onClick={() => {
                setActiveMenu('my-orders');
                navigate('/my-orders');
              }}
            >
              <LocalMallOutlined className="profilepageicons" />
              My Orders
            </div>
            <div
              className={
                activeMenu === 'my-subscriptions' ? 'active_menu tab' : 'tab'
              }
              onClick={() => {
                setActiveMenu('my-subscriptions');
                navigate('/my-subscriptions');
              }}
            >
              <LoyaltyOutlined className="profilepageicons" />
              My Subscription
            </div>

            <div
              className={activeMenu === 'favorites' ? 'active_menu tab' : 'tab'}
              onClick={() => {
                setActiveMenu('favorites');
                navigate('/favorites');
              }}
            >
              <Favorite className="profilepageicons" />
              favorites
            </div>

            <div className="logout-tab " onClick={handleLogOut}>
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
