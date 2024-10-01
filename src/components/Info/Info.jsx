import React from 'react';
import Section from './ReusableSec';
import { Container } from '@mui/material';

const Info = () => {
  const info = [
    {
      title: 'As Low As 0% APR Financing',
      description: 'Affirm provides flexible payment solutions, allowing you to buy better and pay over time.',
      buttonText: 'Learn More',
      image: '/pictures/first.PNG',
      reverse: false
    },
    {
      title: 'Choose With Confidence',
      description: 'Remove the guesswork in choosing your upholstery design by ordering complimentary swatches.',
      buttonText: 'Order Swatches',
      image: '/pictures/2.PNG',
      reverse: true
    },{
      title: 'Complimentary Design Services',
      description: 'Let\'s create your dream space together.',
      buttonText: 'Book A Consultation',
      image: '/pictures/3.PNG',
      reverse: false
    }
  ]
  return (
    <Container>
      {info.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          description={section.description}
          buttonText={section.buttonText}
          image={section.image}
          reverse={section.reverse}
        />
      ))}
    </Container>
  );
};

export default Info;
