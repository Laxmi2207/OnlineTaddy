import * as React from 'react';
import { Box, Grid, Typography, Container, IconButton, Stack} from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import img1 from './../../assets/logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import img3 from './../../assets/playstore.svg'

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: 'https://www.facebook.com/', 
  twitter: 'https://twitter.com/?lang=en',
  instagram: 'https://www.instagram.com/',
  youTube: 'https://www.youtube.com/',
};

const Footer = () => {
  
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          color: 'text.secondary',
          py: 3,
          borderTop: '1px solid',
          borderColor: 'divider',
         
        }}
      >
        <Container maxWidth={false} sx={{paddingLeft:{xs:'',sm:'',md:'',lg:'5rem'}, paddingRight:{xs:'',sm:'',md:'',lg:'5rem'},}}>
          <Grid  container spacing={2} justifyContent='space-between' sx={{background: '#FBC8DE' , borderRadius:'10px'}}>

            <Grid item xs={12} sm={6} md={5} >
              <Stack sx={{ marginLeft: { xs: '', sm: '', md: '', lg: '5rem' } }}>

                <Typography variant="h6" color="text.primary" gutterBottom  >
                  <Typography >
                    <img sx={{ width: '100%' }} src={img1} />
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.5rem', lg: '2rem' } }}>
                    Subscribe To Our Newsletter!
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '8px', sm: '8px', md: '10px', lg: '12px' } ,color:'gray'  ,fontFamily:'sans-serif'}} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                    Lorem Ipsum has been the industry's standard dummy text.
                  </Typography>
                </Typography>

                <Typography mt={2} display="flex">
                  <input style={{ padding: '10px', marginRight: '1px', width: '300px' }} type="text" name="text" placeholder="Your email address" />
                  <Button style={{ background: '#00C6FF', color: 'white' }} variant="outlined">
                    Subscribe
                  </Button>
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={6}  sx={{ display: { xs: 'grid', sm: 'flex', md: 'flex' }, justifyContent: { xs: 'center', sm: 'center', md: 'space-between' }, height: { xs: '600px', sm: '500px' ,lg:'350px' }, flexWrap: 'wrap' }} mt={5} >
              <Grid item xs={12} sm={4} md={4} >
                <Stack direction='column' spacing={1}>
                  <Typography variant="subtitle1" color="text.primary" gutterBottom>
                    <b>Quick Links</b>
                  </Typography>
                  <Link to="/terms" color="inherit" display="block" style={{ textDecoration: 'none', color: 'inherit',fontSize: '15px'}}>Terms & Conditions</Link>
                  <Link to="/privacy" color="inherit" display="block" style={{ textDecoration: 'none', color: 'inherit',fontSize: '15px' }}>Privacy Policy</Link>
                  <Link href="#" color="inherit" display="block" style={{ textDecoration: 'none', color: 'inherit',fontSize: '15px' }}>Testimonials</Link>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <Stack direction='column' spacing={1}>
                  <Typography variant="subtitle1" color="text.primary" gutterBottom>
                    <b>Support</b>
                  </Typography>
                    <Link to="/contact" color="inherit" style={{ textDecoration: 'none', color: 'inherit',fontSize: '15px' }}>Contact Us</Link>
                    <Link to="/faqs" color="inherit" display="block" style={{ textDecoration: 'none', color: 'inherit' ,fontSize: '15px'}}>FAQs</Link>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
              <Stack direction='column'>
                <Typography variant="subtitle1" color="text.primary" gutterBottom>
                  <b>Follow Us</b>
                </Typography>
                <Typography style={{ width: '2px', height: '2px' }}>
                  <IconButton aria-label="Facebook" href={socialMediaLinks.facebook} style={{ fontSize: '15px' }}>
                    <FacebookIcon style={{ width: '30px', height: '20px', color: 'black' }} /> Facebook
                  </IconButton>
                  <IconButton aria-label="Twitter" href={socialMediaLinks.twitter} style={{ fontSize: '15px' }}>
                    <TwitterIcon style={{ width: '30px', height: '20px', color: 'black' }} /> Twitter
                  </IconButton>
                  <IconButton aria-label="Instagram" href={socialMediaLinks.instagram} style={{ fontSize: '15px' }}>
                    <InstagramIcon style={{ width: '30px', height: '20px', color: 'black' }} /> Instagram
                  </IconButton>
                  <IconButton aria-label="YouTube" href={socialMediaLinks.youTube} style={{ fontSize: '15px' }}>
                    <YouTubeIcon style={{ width: '30px', height: '20px', color: 'black' }} /> YouTube
                  </IconButton>
                </Typography>
                </Stack>
              </Grid>

              <Stack direction="row" spacing={2} sx={{ marginLeft: { xs: '0', sm: '0rem', md: '0rem', lg: '10rem' }, marginTop: { xs: '8rem', sm: '2rem', md: '2rem' } }}>

                <Button sx={{ '&:hover': {background: 'black',color: 'white'},color: 'white', background: 'black', height: '45px', width: { xs: '130px', sm: '180px', md: '180px', lg: '180px' }, borderRadius: '10px' }} startIcon={<img src={img3} alt="PlayStore" style={{ height: '30px', width: '35px' }} />}>
                  <div style={{ lineHeight: '0.5' }}>
                    <p style={{ fontSize: '8px', whiteSpace: 'nowrap' }}>Get In All</p>
                    <Typography sx={{ fontSize: '12px', whiteSpace: 'nowrap', marginLeft: { xs: '-5px' } }}>Google Play</Typography>
                  </div>
                </Button>
                <Button sx={{ '&:hover': {background: 'black',color: 'white'},color: 'white', background: 'black', height: '45px', width: { xs: '130px', sm: '150px', md: '180px', lg: '180px' }, borderRadius: '10px' }} startIcon={<AppleIcon style={{ height: '30px', width: '35px' }} />}>
                  <div style={{ lineHeight: '0.5' }}>
                    <Typography sx={{ fontSize: '8px', whiteSpace: 'nowrap', marginLeft: { xs: '-8px' } }}>Downloaded the App</Typography>
                    <Typography sx={{ fontSize: '12px', marginLeft: { xs: '-8px' } }}>AppStore</Typography></div>
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
            © 2024 Company Co. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>

  );
}

export default Footer;