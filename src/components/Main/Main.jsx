import { Box, Container, Typography } from '@mui/material'
import styles from './styles.module.css'

export const Main = () => {
  return (
    <Container maxWidth="xl" sx={{marginY:'2rem'}} >
    <Box sx={{height:'100%', backgroundImage: 'url(https://www.shutterstock.com/image-photo/stylish-interior-contemporary-bedroom-comfortable-600nw-2477328441.jpg)' , backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div style={{paddingTop:'48rem',paddingBottom:'5rem'}}>
      <Typography variant="h1" sx={{color:'white', fontSize:'3rem', textAlign:'center'}}>LABOUR DAY: ENJOY 20% OFF EQ3</Typography>
      <Typography variant="h3" sx={{color:'white', fontSize:'1.5rem', textAlign:'center'}}>Save on designs made with longevity in mind. Now until September 3rd.</Typography>
      </div>
    </Box>
    </Container>
  )
}
