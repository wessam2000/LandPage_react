import React from 'react';
import { AppBar, Toolbar, IconButton, Breadcrumbs, Link, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>

        
          <Typography variant='h4' color="text.primary">EQ3</Typography>


        {/* Right side - Icons */}
        <div>
          <Breadcrumbs aria-label="breadcrumb">
          <IconButton color="inherit">
            <LocationOnIcon />
          </IconButton>
          <IconButton color="inherit">
            <HelpOutlineIcon />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
            <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit">join</Typography>
            <Typography href="#" color="inherit">login to EQ3</Typography>
            </Breadcrumbs>
          </IconButton>
          <IconButton color="inherit">
            <LanguageIcon />
            <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit">EN</Typography>
            <Typography  color="inherit">CAD</Typography>
            </Breadcrumbs>
          </IconButton>
          <IconButton color="inherit" sx={{ border: '1px solid gray',borderRadius: '5px' }}>
            <ShoppingCartIcon />
            <Typography  component="span">Cart</Typography>
            <Typography variant="caption" component="span">(0)</Typography>
          </IconButton>
          </Breadcrumbs>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
