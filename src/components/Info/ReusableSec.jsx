import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Section = ({ title, description, buttonText, image, reverse }) => {
  return (
    <Grid 
      container 
      spacing={6} 
      direction={reverse ? 'row-reverse' : 'row'} 
      alignItems="center" 
      justifyContent="center"
      sx={{ py: 4,backgroundColor: 'rgba(0, 0, 0, 0.05)',marginBottom:'2rem' }}
    >
      <Grid item size={{md: 6, xs: 12 }}   >
        <Box component="img" src={image} alt={title} sx={{ width: '100%', borderRadius: 2 }} />
      </Grid>
      <Grid item  size={{md: 6, xs: 12 }}  >
        <Box textAlign={reverse ? 'right' : 'left'}  >
          <Typography variant="h4" gutterBottom>{title}</Typography>
          <Typography variant="body1">{description}</Typography>
          <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', mt: 2 }}>{buttonText}</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Section;
