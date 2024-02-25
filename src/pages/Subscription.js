

import React from 'react';
import { Grid, Card, CardContent, Typography, Checkbox, Button, Box, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Tickk from './../assets/Tickk.png';
const useStyles = makeStyles({

    circle: {
        borderRadius: '50%', width: 60, height: 60, backgroundColor: 'white', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 15, fontWeight: 'bold', fontSize: '1.4rem'
    },
    circle2: { borderRadius: '50%', width: 60, height: 60, backgroundColor: 'white', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 15, fontWeight: 'bold', fontSize: '1.4rem' },
    subscriptionButton: { marginTop: 16, }
});

const Subscription = () => {
    const classes = useStyles();
    return (

        <Box sx={{ background: '#FCAF63' ,height:770}}   mt={2}>
        <Grid container sx={{alignItems:'center'}} >
            <Grid xs={12} md={12} >
                <Stack justifyContent='center' textAlign='center'>
                    <Typography sx={{fontFamily:'Nunito Sans',fontWeight:'800',fontSize:'40px',lineHeight:'80px'}} >
                        SUBSCRIPTION PLANS
                    </Typography>

                    <Typography sx={{fontFamily:'Nunito Sans',fontWeight:'400',fontSize:'25px'}} >
                    Choose The Plane That Suits For You
                    </Typography>
                </Stack>
            </Grid>
        </Grid>


        <Grid container spacing={2} sx={{marginLeft:'7%' ,marginRight:'2%' ,marginTop:'10px'}}>
            <Grid item xs={10} sm={3} sx={{marginLeft:'2%' ,marginRight:'2%'}}>
                <Stack sx={{width:'85%',height:'580px', background: 'tranparent', borderRadius: '15px', padding: '1rem', border: '1px solid white' }}  >
                    <Typography sx={{lineHeight:'20.92px'}} display='flex' justifyContent='center' component='div'>
                        <div className={classes.circle}>{'$00'}</div>
                    </Typography>

                    <Stack direction='column'>
                        <Typography sx={{fontWeight:'800',fontSize:'30px',fontFamily:'Nunito Sans',lineHeight:'40.92px',textAlign:'center'}}>
                            {'Free'}
                        </Typography>
                        <Typography sx={{fontFamily:'Nunito Sans',fontSize:'16px',fontWeight:'400',lineHeight:'22px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        . Lorem Ipsum has been the industry's standard dummy text ever.
                        </Typography>

                        <Stack sx={{ marginLeft:'-15px',marginRight:'-15px',background:'#FFFFFF28',marginTop:'2rem',height:'140px' }}  >
                            
                            <Typography sx={{fontFamily:'Nunito Sans',fontSize:'18px',fontWeight:'700',lineHeight:'70px', marginLeft:'1rem'}}>FEATURES:</Typography>
                            <Typography sx={{marginLeft:'1.5rem'}}><img src={Tickk} />Preloaded Stories </Typography>
                          
                        </Stack>
                        {/* <Stack direction='column' sx={{ marginLeft: '1rem' }}>
                            <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>FEATURES</Typography>
                            <Typography><Checkbox color="primary" /> Preloded Stories</Typography>
                            <Typography><Checkbox color="primary" /> 15 Stories from ChatGPT</Typography>
                        </Stack> */}
                        
                        <Stack direction='column' sx={{ marginLeft: '1rem' ,lineHeight:'3rem',marginTop:'5rem',alignItems:'center'}}>
                        <Button sx={{ '&:hover': {background: '#00C6FF',color: 'white'} ,width:'160px',height:'44px',background:"#00C6FF",color:'white'}}>
                                    {'Get Started'}
                                </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>

            <Grid item xs={10} sm={3} sx={{marginLeft:'2%' ,marginRight:'2%'}}>
                <Stack sx={{width:'85%',height:'580px', background: 'white', borderRadius: '15px', padding: '1rem', border: '1px solid white' }}  >
                    <Typography display='flex' justifyContent='center' component='div'>
                        <div className={classes.circle2}>{'$10'}</div>
                    </Typography>

                    <Stack direction='column'>
                    <Typography sx={{fontWeight:'800',fontSize:'30px',fontFamily:'Nunito Sans',lineHeight:'40.92px',textAlign:'center'}}>
                            {'Basic'}
                        </Typography>
                        {/* <Typography  sx={{fontSize:'15px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever.
                        </Typography>
                        <Stack sx={{ background: '#00c6ff',marginLeft:'-15px',marginRight:'-15px'  }}  >
                        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' ,marginLeft:'9px'}}>FEATURES</Typography>
                            <Typography><Checkbox color="primary" /> Preloded Stories</Typography>
                            <Typography><Checkbox color="primary" /> 15 Stories from ChatGPT</Typography>
                        </Stack> */}
                                       <Typography sx={{fontFamily:'Nunito Sans',fontSize:'16px',fontWeight:'400',lineHeight:'22px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        . Lorem Ipsum has been the industry's standard dummy text ever.
                        </Typography>

                        <Stack sx={{ marginLeft:'-15px',marginRight:'-15px',background:'#00c6ff',marginTop:'2rem',height:'163px' }}  >
                            
                            <Typography sx={{fontFamily:'Nunito Sans',fontSize:'18px',fontWeight:'700',lineHeight:'87px', marginLeft:'1rem'}}>FEATURES:</Typography>
                            <Typography sx={{marginLeft:'1.5rem'}}><img src={Tickk} sx={{marginLeft:'30px'}} /> Preloaded Stories </Typography>
                            <Typography sx={{marginLeft:'1.5rem',lineHeight:'42px'}}><img src={Tickk} sx={{marginLeft:'30px',marginTop:'60px'}} /> 15 Stories From Chatgpt</Typography>
                          
                           
                        </Stack>
                        <Stack direction='column' sx={{ marginLeft: '1rem' }}>
                           
                        </Stack>
                        <Stack direction='column' sx={{ marginLeft: '1rem' }}>
                            <Typography sx={{ fontSize: '1rem', fontWeight: 'bold',marginLeft:'-1.3rem' }}>FOR:</Typography>
                            <Typography sx={{marginLeft:'-1.3rem'}}><Checkbox color="primary" />Monthly</Typography>
                            <Typography  sx={{marginLeft:'-1.3rem'}}><Checkbox color="primary" />Yearly</Typography>
                        </Stack>
                        <Stack direction='column' sx={{ marginLeft: '1rem' ,alignItems:'center'}}>
                        <Button sx={{ '&:hover': {background: '#00C6FF',color: 'white'} ,width:'160px',height:'44px',background:"#00C6FF",color:'white'}}>
                                    {'Get Started'}
                                </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>

            
           

<Grid item xs={10} sm={3} sx={{marginLeft:'2%' ,marginRight:'2%'}}>
                <Stack sx={{width:'85%',height:'580px', background: 'tranparent', borderRadius: '15px', padding: '1rem', border: '1px solid white' }}  >
                    <Typography sx={{lineHeight:'20.92px'}} display='flex' justifyContent='center' component='div'>
                        <div className={classes.circle}>{'$20'}</div>
                    </Typography>

                    <Stack direction='column'>
                        <Typography sx={{fontWeight:'800',fontSize:'30px',fontFamily:'Nunito Sans',lineHeight:'40.92px',textAlign:'center'}}>
                            {'Premium'}
                        </Typography>
                        <Typography sx={{fontFamily:'Nunito Sans',fontSize:'16px',fontWeight:'400',lineHeight:'22px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        . Lorem Ipsum has been the industry's standard dummy text ever.
                        </Typography>

                        <Stack sx={{ marginLeft:'-15px',marginRight:'-15px',background:'#FFFFFF28',marginTop:'2rem',height:'163px'  }}  >
                            
                        <Typography sx={{fontFamily:'Nunito Sans',fontSize:'18px',fontWeight:'700',lineHeight:'70px', marginLeft:'1rem'}}>FEATURES:</Typography>
                            <Typography sx={{marginLeft:'1.5rem'}}><img src={Tickk} sx={{marginLeft:'30px'}} /> Preloaded Stories</Typography>
                            <Typography sx={{marginLeft:'1.5rem',lineHeight:'42px'}}><img src={Tickk} sx={{marginLeft:'30px',marginTop:'60px'}} />Unlimited Stories From Chatgpt</Typography>
                          
                        </Stack>
                        {/* <Stack direction='column' sx={{ marginLeft: '1rem' }}>
                            <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>FEATURES</Typography>
                            <Typography><Checkbox color="primary" /> Preloded Stories</Typography>
                            <Typography><Checkbox color="primary" /> 15 Stories from ChatGPT</Typography>
                        </Stack> */}

<Stack direction='column' sx={{ marginLeft: '1rem' }}>
                            <Typography sx={{ fontSize: '1rem', fontWeight: 'bold',marginLeft:'-1.3rem' }}>FOR:</Typography>
                            <Typography sx={{marginLeft:'-1.3rem'}}><Checkbox color="primary" />Monthly</Typography>
                            <Typography  sx={{marginLeft:'-1.3rem'}}><Checkbox color="primary" />Yearly</Typography>
                        </Stack>
                        <Stack direction='column' sx={{ marginLeft: '1rem' ,alignItems:'center'}}>
                        <Button sx={{ '&:hover': {background: '#00C6FF',color: 'white'} ,width:'160px',height:'44px',background:"#00C6FF",color:'white'}}>
                                    {'Get Started'}
                                </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>

    </Box>

    )
}
export default Subscription;


