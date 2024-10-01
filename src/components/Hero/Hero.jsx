import React from 'react';
import { Container, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';

// Array of categories with image source and label
const categories = [
  {
    img: '/pictures/1-removebg-preview.png', // Replace with your image paths
    title: 'Ready to Ship Upholstery',
  },
  {
    img: '/pictures/2-removebg-preview.png',
    title: 'Dining',
  },
  {
    img: '/pictures/3-removebg-preview.png',
    title: 'Storage Beds',
  },
  {
    img: '/pictures/4-removebg-preview.png',
    title: 'Lighting',
  },
  {
    img: '/pictures/5-removebg-preview.png',
    title: 'Accent Tables',
  },
  {
    img: '/pictures/6-removebg-preview.png',
    title: 'Rugs',
  },
  {
    img: '/pictures/7-removebg-preview.png',
    title: 'Bar & Counter Stools',
  },
  {
    img: '/pictures/8-removebg-preview.png',
    title: 'Accent Stools',
  },
  {
    img: '/pictures/9-removebg-preview.png',
    title: 'Accessories',
  },
  {
    img: '/pictures/10-removebg-preview.png',
    title: 'Accent Chairs',
  },
  {
    img: '/pictures/11-removebg-preview.png',
    title: 'Outdoor',
  },
  {
    img: '/pictures/12-removebg-preview.png',
    title: 'Media & Storage',
  },
];

const Hero = () => {
  return (
    <>
    <Container maxWidth="xl" sx={{ marginY: '2rem' }}>
      <Typography variant="h3" sx={{ fontSize: '2rem' }}>
      Shop by Category
      </Typography>
      <ImageList
        sx={{ width: '100%', height: 'auto' }}
        cols={4} // Number of columns in the grid
        gap={16} // Space between items
      >
        {categories.map((item, index) => (
          <ImageListItem key={index} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',height:'20rem' }} >
            <img
              src={item.img}
              alt={item.title}
              style={{ width: '50%',alignSelf: 'center' }}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              position="below"
              sx={{ textAlign: 'center',paddingTop:'7rem' }} // Align text in the center
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
    </>
  );
}

export default Hero;
