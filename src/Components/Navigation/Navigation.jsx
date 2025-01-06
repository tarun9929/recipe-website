import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuIcon, Container, Avatar, Button, Tooltip, MenuItem, LocalDiningIcon } from '../index';
import master from '../../../images/master.png'
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import useMediaQuery from '@mui/material/useMediaQuery';

const pages = [
  {
    title: 'Home',
    address: '/'
  }, 
  {
    title: 'Recipes',
    address: 'recipes'
  },
  {
    title:'Contact',
    address: '/contact'
  }
];
const settings = [
  {
    title: 'Likes',
    dest: '/recipes/likes'
  }, 
  {
    title: 'History',
    dest: '/recipes/history'
  }, 
  {
    title: 'Profile',
    dest: ''
  }, 
  {
    title: 'Account',
    dest: ''
  }, 
  {
    title: 'Dashboard',
    dest: ''
  },
  {
    title: 'Logout',
    dest: ''
  }
];

function Navigation() {
  const matches = useMediaQuery('(max-width:232px)');
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{
      background: '#FF4500'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalDiningIcon sx={{ mx: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'white'
              }}

              to={''}
            >
              FOOD
            </Link>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={v4()} onClick={handleCloseNavMenu}>
                  <Link to={page.address} style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography sx={{ textAlign: 'center' }}>
                      {page.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="span"
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
            <Link
              style={{
                textDecoration: 'none',
                color: 'white'
              }}

              to={''}
            >
              FOOD
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                key={v4()}
                to={page.address}
                style={{
                  textDecoration: 'none',
                  color: 'white'
                }}
              >
                <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={master} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem 
                  key={v4()} 
                  onClick={handleCloseUserMenu}
                >
                  <Link 
                    to={setting.dest} 
                    style={
                      {
                        textDecoration: 'none', 
                        color: 'black'
                      }
                    }>
                    <Typography sx={{ textAlign: 'center' }}>{setting.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
