import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import img1 from './../../assets/logo1.png';
import img2 from './../../assets/UnclockingPotential.png';
import img3 from './../../assets/Capsole.png';
import phoneImage from './../../assets/GroupPhone.png';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'

const Home2 = () => {
  return (
    <Box >
      <Grid container style={{ background: '#00C6FF' }}>
        <Grid item xs={12} md={12} lg={6}>
          <Stack style={{ alignItems: 'center', justifyContent:'center', marginTop: '1rem' }} direction={{ xs: 'column', sm: 'column' }}>
            <img  src={img1} alt="Image 1" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}/>
            <img src={img2} alt="Image 2"  width='100%' /> 
          <Typography paragraph style={{ textAlign: 'center' }}>
              <Typography sx={{ fontSize: '40px',whiteSpace:{md:'nowrap'},fontFamily: 'Nunito Sans', fontWeight: '900', margin: '1rem 7rem' }}>
                Key Features & Functions
              </Typography>
              <Typography paragaph sx={{ fontSize:{xs:'12px' ,sm:'12px',md:'15px',lg:'18px',} ,width: {xs:'80%',md:'75%'},marginLeft:{xs:'2.5rem', sm:'20px', md:'7rem'} }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer
              </Typography>
            </Typography>
          </Stack>
          {/* Middle Row */}
          {/* sx={{width:{sm:'100px' ,md:'200px' ,lg:'256px'}}} */}
          <Grid container display={'grid'}  mt={4} >

            <Stack direction={{ xs: 'column', sm: 'row' }} marginLeft={{ xs: '5rem', md: '15rem' ,lg:'8rem' }} spacing={2} >
              <div style={{ position: 'relative' }}>
              <Typography  >
                    <img src={img3} alt="Image 1" width='80%'  />
                </Typography>
                
                <Typography variant="h6"style={{position: 'absolute',top: '40%',left: '40%',transform: 'translate(-50%, -50%)',color: 'white',textAlign: 'center',}}>
                  Features - 1
                </Typography>
              </div>

              <div style={{ position: 'relative' }}>
              <Typography  >
                    <img src={img3} alt="Image 1" width='80%'  />
                </Typography>
                <Typography variant="h6"style={{position: 'absolute',top: '28%',left: '40%',marginTop: '1rem',transform: 'translate(-50%, -50%)',color: 'white',textAlign: 'center',}}>
                  Features - 2
                </Typography>
              </div>

            </Stack>

            {/* Lower Row */}
            <Stack direction={{ xs: 'column', sm: 'row' }} marginLeft={{ xs: '5rem', md: '15rem' ,lg:'8rem' }} spacing={2} >
              <div style={{ position: 'relative' }}>
              <Typography  >
                    <img src={img3} alt="Image 1" width='80%' />
                </Typography>
                <Typography variant="h6" style={{ marginTop: '-2rem',position: 'absolute',top: '80%',left: '40%',transform: 'translate(-50%, -50%)',color: 'white',textAlign: 'center',}}>
                  Features - 3
                </Typography>
              </div>
              <div style={{ position: 'relative' }}>
              <Typography  >
                    <img src={img3} alt="Image 1" width='80%'  />
                </Typography>
                <Typography variant="h6"style={{ position: 'absolute',top: '44%',left: '40%',transform: 'translate(-50%, -50%)',color: 'white',textAlign: 'center',}}>
                  Features - 4
                </Typography>
              </div>
            </Stack>
          </Grid>





        </Grid>

        

        <Grid item xs={12} md={12} lg={6} justifyContent="center" sx={{marginTop:{xs:'10px' ,sm:'10px'}}}>
        <Stack spacing={2} justifyContent="center"  sx={{width:'100%',textAlign: 'center', }}>
        <img src={phoneImage} alt="image4"  />
        </Stack>

         </Grid>
      </Grid>
     
    </Box>
    
  );
};

export default Home2;
