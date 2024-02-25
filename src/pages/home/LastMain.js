import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Taddyslider from './../../components/slider/Taddyslider';
import Backgroundd from './../../assets/Back2.png';
const LastMain = () => {
  return (
    <div>

<Box container sx={{ backgroundImage: `url(${Backgroundd})`, backgroundSize: 'cover' }}>
   {/* background: '#FCAF63', */}
   <Grid container spacing={2} style={{  textAlign: 'center' }}>
        <Grid item xs={12} sm={12}  md={12} style={{ alignItems: 'center', marginTop: '1rem', }} direction={{ xs: 'column', sm: 'column' }} >
          <Typography sx={{ fontSize: { xs: '35px', sm: '35px', md: '40px', lg: '40px' }, alignItems: 'center', fontFamily: 'Nunito Sans', fontWeight: '900' }}>
            You Are The Center Of Our Universe
              </Typography>
          <Typography sx={{ fontFamily: 'Rowdies', fontWeight: '700', fontSize: '50px', color: '#00C6FF' }}>
            Testimonials
          </Typography>
      </Grid>

        <Taddyslider />


      </Grid>
   </Box>
    </div>
  )
}

export default LastMain