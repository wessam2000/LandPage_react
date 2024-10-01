import React from 'react';
import { AppBar, Toolbar, Button, TextField, Box, Typography } from '@mui/material';

const Navigation = () => {
  return (
    <>
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none',borderTop: '1px solid #e0e0e0' }}>
      <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
        {/* Left side - Navigation Links */}
        <Box>
          <Button href="#" color="inherit">Living</Button>
          <Button href="#" color="inherit">Dining</Button>
          <Button href="#" color="inherit">Bedroom</Button>
          <Button href="#" color="inherit">Outdoor</Button>
          <Button href="#" color="inherit">Office</Button>
          <Button href="#" color="inherit">Lighting</Button>
          <Button href="#" color="inherit">Rugs</Button>
          <Button href="#" color="inherit">Accessories</Button>
          <Button href="#" color="inherit">Brands</Button>
          <Button href="#" color="inherit">Inspiration</Button>
          <Button href="#" color="inherit">Gifts</Button>
          <Button href="#" color="inherit">Sale</Button>
        </Box>

        {/* Right side - Search Input */}
        <Box>
          <TextField 
            variant="outlined" 
            size="small" 
            placeholder="Search..." 
            sx={{ width: 250 }} 
          />
        </Box>
      </Toolbar>
    </AppBar>
    <Box sx={{ height: '2rem', backgroundColor: 'rgb(245, 160, 73)' ,width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Typography sx={{ textAlign: 'center', fontSize: '1rem',fontWeight: 'bold' }}>Labor day : Enjoy 20% off EQ3</Typography>
    </Box>
    </>
  );
}

export default Navigation;
