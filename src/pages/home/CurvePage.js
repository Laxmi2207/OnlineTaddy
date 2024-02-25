import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import img1 from './../../assets/logo1.png';
import img2 from './../../assets/UnclockingPotential.png';
import img3 from './../../assets/Capsole.png';
import phoneImage from './../../assets/GroupPhone.png';
import backimage from './../../assets/Back.png';
import backimage2 from './../../assets/Back2.png';
import Taddyslider from './../../components/slider/Taddyslider';
// import img5 from './../assets/Tad2.png';
// import img6 from './../assets/Tad3.png';
// import img7 from './../assets/Tad4.png';
// import img8 from './../assets/Vector1.png';
// import img9 from './../assets/Vector2.png';
// import img10 from './../assets/Ellipse12.png';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'

// import './Main2.css';
const CurvePage = () => {  
  return (

    
    <Box sx={{backgroundImage: `url(${backimage2})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',width: '100%', }}>
      <Grid container   sx={{backgroundImage: `url(${backimage})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',width: '100%' }}>
      
        <Grid item xs={12} md={12} lg={6}  >
          <Stack style={{ alignItems: 'center', justifyContent:'center', marginTop: '1rem' }} direction={{ xs: 'column', sm: 'column' }}>
            <img  src={img1} alt="Image 1" style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}/>
            <img src={img2} alt="Image 2"  width='80%' />
          <Typography paragraph style={{ textAlign: 'center' }}>
              <Typography sx={{ fontSize: '40px',whiteSpace:{md:'nowrap'},fontFamily: 'Nunito Sans', fontWeight: '900', margin: '1rem 7rem' }}>
                Key Features & Functions
              </Typography>
              <Typography paragaph sx={{ fontSize:{xs:'12px' ,sm:'12px',md:'12px',lg:'15px',} ,width: {xs:'80%',md:'75%'},marginLeft:{xs:'2.5rem', sm:'20px', md:'7rem'} }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer
              </Typography>
            </Typography>
          </Stack>
          {/* Middle Row */}
          {/* sx={{width:{sm:'100px' ,md:'200px' ,lg:'256px'}}} */}
          <Grid container display={'grid'}  mt={2} >

            <Stack direction={{ xs: 'column', sm: 'row' }} marginLeft={{ xs: '5rem', md: '15rem' ,lg:'8rem' }}  >
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
            <Stack direction={{ xs: 'column', sm: 'row' }} marginLeft={{ xs: '5rem', md: '15rem' ,lg:'8rem' }}  >
              <div style={{ position: 'relative' }}>
              <Typography  >
                    <img src={img3} alt="Image 1" width='80%'  />
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
        <Stack spacing={2} >
        <img src={phoneImage} alt="image4"  width='100%' />
        </Stack>

      </Grid>


       
      </Grid>
      

      {/* second slider  */}

      <Grid container spacing={2} style={{  textAlign: 'center'  }} >
        <Grid item xs={12} sm={12}  md={12} style={{ alignItems: 'center' }} direction={{ xs: 'column', sm: 'column' }} >
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
    
  );
};

export default CurvePage;
