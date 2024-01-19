import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { LiquorOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState();
  // const [anchorElUser, setAnchorElUser] = React.useState();

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
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
                onClick={handleCloseNavMenu}
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
              // onMouseEnter={toggleBoxVisibility}
              // onMouseLeave={toggleBoxVisibility}
              onClick={() => {
                navigate('/myprofile');
              }}
            />

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
            <div className="cartitems">1</div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
