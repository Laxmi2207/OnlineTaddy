
import React from 'react';
import Button from '@mui/material/Button';
import { Card, CardHeader, Stack, Grid, Checkbox } from '@mui/material/';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import logo from './../assets/logo.png';
import { Typography } from '@material-ui/core';
import Google from './../assets/Google.png'
import facebook from './../assets/face.png'
import iphone from './../assets/Apple.png'

const SignIn = () => {
    const history = useNavigate();

    const handleButtonClick = (path) => {
        history(path);
    };

    return (
        <Card sx={{ width: { xs: '80%', sm: '50%', md: '40%', lg: '30%' }, margin: 'auto', marginTop: '15vh', marginBottom: '15vh', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #ccc' }}>
            <Grid xs={12} sm={12}>
                <Typography style={{ display: 'flex', justifyContent: 'center' }} >
                    <img src={logo} alt='logo' />
                </Typography>
                <Typography align='center' style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '2rem' }}>
                    SIGN IN
                </Typography>
            </Grid>

            <CardContent >

                <Stack style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} spacing={2}>

                    <Button
                         sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' }, fontSize: { xs: '10px', sm: '10px', md: '10px', lg: '12px' }, whiteSpace: 'nowrap', fontWeight: 'bold', color: 'gray' }}
                        variant="outlined"
                        color="primary"
                        startIcon={<img src={Google} alt="Google Logo" />}
                        onClick={() => handleButtonClick('/home')}
                    >
                        Continue With Google
                    </Button>

                    <Button
                        sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' }, fontSize: { xs: '10px', sm: '10px', md: '10px', lg: '12px' }, whiteSpace: 'nowrap', fontWeight: 'bold', color: 'gray' }}
                        variant="outlined"
                        color="primary"
                        startIcon={<img src={facebook} alt="facebook Logo" />}
                        onClick={() => handleButtonClick('/home')}
                    >
                        Continue With Facebook
                    </Button>

                    <Button
                        sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' }, fontSize: { xs: '10px', sm: '10px', md: '10px', lg: '12px' }, whiteSpace: 'nowrap', fontWeight: 'bold', color: 'gray' }}
                        variant="outlined"
                        color="primary"
                        startIcon={<img src={iphone} alt="iphone Logo" />}
                        onClick={() => handleButtonClick('/home')}
                    >
                        Continue With Apple
                    </Button>

                </Stack>

                <div  style={{ marginLeft: '3rem', display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px' }}>
                    <Checkbox color="primary" />
                    <Typography variant='p' style={{fontSize:'12px'}}>
                        By Clicking You Agree To Our
                        <span style={{ color: '#00c6ff'}}> &nbsp; Terms & Conditions &nbsp; </span>
                        <span style={{ color: '#00c6ff' }}> Privacy Policy</span>
                    </Typography>


                </div>


            </CardContent>
        </Card>
    );
};

export default SignIn;