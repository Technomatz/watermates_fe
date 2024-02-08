import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { LiquorOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState();

  const navigate = useNavigate();

  const handleOpenProfileMenu = (event) => {
    if (event && event.currentTarget) {
      setAnchorElNav(event.currentTarget);
    }
  };
  const handleLogin = () => {
    navigate('/login');
  };
  const handleSignup = () => {
    navigate('/signup');
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleProfileClick = (event) => {
    const userExists = localStorage.getItem('user');
    if (userExists) {
      navigate('/myprofile');
    } else {
      handleOpenProfileMenu(event);
    }
  };

  const CartItems = useSelector((state) => state.cart);

  return (
    <AppBar position="fixed" sx={{ background: 'white', color: 'grey' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LiquorOutlined sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={() => {
              navigate('/');
            }}
          >
            Water
            <span style={{ color: 'red' }}> Mates</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Water
            <span style={{ color: 'red' }}> Mates</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  if (page === 'Products') {
                    navigate('/products');
                  }
                }}
                sx={{ my: 2, color: 'grey', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '30px',
            }}
          >
            <SearchIcon
              sx={{
                marginRight: '1rem',
                background: '#00b2a2',
                color: 'white',
                borderRadius: '50px',
                padding: '5px',
                height: '35px',
                width: '35px',
                cursor: 'pointer',
              }}
            />
            <PermIdentityOutlinedIcon
              sx={{
                marginRight: '1rem',
                background: '#00b2a2',
                color: 'white',
                borderRadius: '50px',
                padding: '5px',
                height: '35px',
                width: '35px',
                cursor: 'pointer',
              }}
              onClick={handleProfileClick}
            />
            <Badge badgeContent={CartItems.length} color="primary">
              <ShoppingCartOutlinedIcon
                sx={{
                  background: '#00b2a2',
                  color: 'white',
                  borderRadius: '50px',
                  padding: '5px',
                  height: '35px',
                  width: '35px',
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/cart')}
              />
            </Badge>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {!localStorage.getItem('user') && (
              <>
                <MenuItem>
                  <Typography textAlign="center" onClick={handleLogin}>
                    Login
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" onClick={handleSignup}>
                    Signup
                  </Typography>
                </MenuItem>
              </>
            )}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
