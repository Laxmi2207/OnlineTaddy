
import ReCAPTCHA from "react-google-recaptcha";
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Taddy from "./../assets/taddy.png";
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const [verfied,setVerifed] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <>
      <Grid container mt={2}>
        <Grid xs={12} md={12} sm={12} lg={12}>
          <Grid sm={12} xs={12} md={6} lg={6}>
            <Typography variant="h3" sx={{marginLeft:{lg:'8rem',md:'8rem',sm:'5rem',xs:'1rem'}, fontSize:{lg:'40px',xs:'30px',sm:'32px'}}}>Get in touch with us</Typography>
            <Typography paragraph sx={{marginLeft:{lg:'8rem',md:'8rem',sm:'5rem',xs:'1rem'},color:'#636880',fontFamily:'Nunito Sans',fontWeight:'400',fontSize:'16px',}}>
            Lorem ipsum dolor sit amet consectetur. Sit risus id placerat morbi. <br/>
            Velit pellentesque sed duis id aliquam quis leo congue.
            </Typography>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid sm={12} xs={12} md={6} lg={6} justifyContent='center' width='20%' >
          <Card sx={{ minWidth: 275 ,padding:{md:'7px',lg:'7px'},marginLeft:{md:'8rem'}} }> 
      <CardContent>
      <TextField
      label="Name"
      variant="outlined"
      fullWidth
      margin="normal"
      InputProps={{
        startAdornment: (
          <PersonIcon />
        ),
      }}
    />
    
    <TextField
      label="Email"
      variant="outlined"
      fullWidth
      margin="normal"
      InputProps={{
        startAdornment: (
          <MailOutlineIcon />
        ),
      }}
    />
            
            <TextField
      label="Phone"
      variant="outlined"
      fullWidth
      margin="normal"
      InputProps={{
        startAdornment: (
          <PhoneIcon />
        ),
      }}
    />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
            <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
  />,
       
              <Button sx={{ '&:hover': {background: '#00C6FF',color: '#FFFFFF'} ,background: '#00C6FF',color:'#FFFFFF' ,height:'50px'}} type='submit'  fullWidth disabled={!verfied}>
              Send Message
              </Button>
              </CardContent>
              </Card>
         
          </Grid>
          <Grid sm={12} xs={12} md={6} lg={6} >
            <Typography  align="center" >
              <img src={Taddy} width="60%" />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
