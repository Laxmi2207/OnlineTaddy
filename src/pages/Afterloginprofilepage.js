import React from 'react';
import { Grid, Card, CardContent, Typography, Checkbox, Button, Box, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import invoicepdf from './../assets/invoicepdf/invoice.pdf';
import Tickk from './../assets/Tickk.png';

const useStyles = makeStyles({
    circle: { borderRadius: '50%', width: 50, height: 50, backgroundColor: 'white', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '1.4rem' },

    subscriptionButton: { marginTop: 16, },
});


const columns = [
    { id: 'id', label: 'Invoice', minWidth: 50 },
    { id: 'date', label: 'Biiling Date', minWidth: 100 },
    { id: 'amount', label: 'Amount', minWidth: 100 },
    { id: 'plan', label: 'Plan', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];

const rows = [
    { id: 'Invoice #Doc1 -Nov 2023 ', date: '2024-01-01', amount: <span style={{ color: 'blue' }}>$20.00</span>, plan: 'Basic', action: <Button sx={{ color: 'white', background: '#00C6FF' }} onClick={() => handleDownloadClick('Doc1')}>Download</Button> },
    { id: 'Invoice #Doc2 -Nov 2023 ', date: '2024-01-01', amount: <span style={{ color: 'blue' }}>$20.00</span>, plan: 'Basic', action: <Button sx={{ color: 'white', background: '#00C6FF' }} onClick={() => handleDownloadClick('Doc2')}>Download</Button> },
    { id: 'Invoice #Doc3 -Nov 2023 ', date: '2024-01-01', amount: <span style={{ color: 'blue' }}>$20.00</span>, plan: 'Basic', action: <Button sx={{ color: 'white', background: '#00C6FF' }} onClick={() => handleDownloadClick('Doc3')}>Download</Button> },
    { id: 'Invoice #Doc4 -Nov 2023 ', date: '2024-01-01', amount: <span style={{ color: 'blue' }}>$20.00</span>, plan: 'Basic', action: <Button sx={{ color: 'white', background: '#00C6FF' }} onClick={() => handleDownloadClick('Doc4')}>Download</Button> },
    { id: 'Invoice #Doc5 -Nov 2023 ', date: '2024-01-01', amount: <span style={{ color: 'blue' }}>$20.00</span>, plan: 'Basic', action: <Button sx={{ color: 'white', background: '#00C6FF' }} onClick={() => handleDownloadClick('Doc5')}>Download</Button> },
];

const handleDownloadClick = (id) => {

    const pdfPath = invoicepdf;
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    downloadLink.download = `invoce_${id}.pdf`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};

const Afterloginprofilepage = () => {
    const classes = useStyles();


    return (
        <>
            <Box sx={{ background: '#FCAF63' ,height:770 }} mt={2}>
            <Grid container sx={{alignItems:'center'}} >
            <Grid xs={12} md={12} >
                <Stack justifyContent='center' textAlign='center'>
                    <Typography sx={{fontFamily:'Nunito Sans',fontWeight:'800',fontSize:'40px',lineHeight:'80px'}} >
                        SUBSCRIPTION PLANS
                    </Typography>

                    <Typography sx={{fontFamily:'Nunito Sans',fontWeight:'400',fontSize:'25px'}} >
                    Manage your plan and biling history.

                    </Typography>
                </Stack>
            </Grid>
        </Grid>



                <Grid container spacing={2} sx={{marginLeft:'7%', marginRight: '2%', marginTop: '10px' }}>
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
                            <Typography sx={{marginLeft:'1.5rem'}}><img src={Tickk} />  Preloaded Stories  </Typography>
                          
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

            <Grid item xs={10} sm={3} sx={{ marginLeft: '2%', marginRight: '2%' }}>
  <Stack sx={{ margin:'0px',padding:'0px', width: '85%', height: '580px', background: 'white', borderRadius: '15px', border: '1px solid white' }}>
    <Stack direction='column'>
      <Typography component='div' sx={{ color: 'white', background: '#1CC600', borderTopRightRadius: '15px', borderTopLeftRadius: '15px'}}>
        <Typography sx={{ fontSize: '15px', marginLeft: '1rem', marginTop: '5px' }}>
          Activate Plan
        </Typography>
      </Typography>

      <Typography display='flex' justifyContent='center' component='div' sx={{ marginBottom: '-1rem' }}>
        <div sx={{marginTop:'6px'}} className={classes.circle}>{'$10'}</div>
      </Typography>

      <Stack direction='column'>
        <Typography sx={{ fontWeight: '800', fontSize: '30px', fontFamily: 'Nunito Sans', lineHeight: '40.92px', textAlign: 'center' }}>
          {'Basic'}
        </Typography>
        <Typography sx={{ fontFamily: 'Nunito Sans', fontSize: '16px', fontWeight: '400', lineHeight: '22px', padding:'10px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever.
        </Typography>

        <Stack sx={{background: '#00c6ff', marginTop: '2rem', height: '163px' }}>
          <Typography sx={{ fontFamily: 'Nunito Sans', fontSize: '18px', fontWeight: '700', lineHeight: '87px', marginLeft: '20px' }}>
            FEATURES:
          </Typography>
          <Typography sx={{ marginLeft: '1.5rem' }}><img src={Tickk} sx={{ marginLeft: '30px' }} />  Preloaded Stories </Typography>
          <Typography sx={{ marginLeft: '1.5rem', lineHeight: '42px' }}><img src={Tickk} sx={{ marginLeft: '30px', marginTop: '60px' }} />  15 Stories From Chatgpt</Typography>
        </Stack>

        <Stack direction='column' sx={{ marginLeft: '1rem' }}></Stack>
        <Stack direction='column' sx={{ marginLeft: '1rem' }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', marginLeft: '0.5rem' }}>FOR:</Typography>
          <Typography sx={{ marginLeft: '-1.3rem' }}><Checkbox color="primary" />Monthly</Typography>
          <Typography sx={{ marginLeft: '-1.3rem' }}><Checkbox color="primary" />Yearly</Typography>
        </Stack>
        <Stack direction='column' sx={{ marginLeft: '1rem', alignItems: 'center' }}>
        <Button sx={{ '&:hover': {background: '#00C6FF',color: 'white'} ,width:'160px',height:'44px',background:"#00C6FF",color:'white'}}>
                                    {'Get Started'}
                                </Button>
        </Stack>
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
                            <Typography sx={{marginLeft:'1.5rem'}}><img src={Tickk} sx={{marginLeft:'30px'}} />  Preloaded Stories</Typography>
                            <Typography sx={{marginLeft:'1.5rem',lineHeight:'42px'}}><img src={Tickk} sx={{marginLeft:'30px',marginTop:'60px'}} />  Unlimited Stories From Chatgpt</Typography>
                          
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

            <Box sx={{ background: 'white' }}>

                <Stack direction='column' style={{ width: '90%', margin: 'auto', marginTop: 20 }}>
                    <Typography variant="h6" gutterBottom fontWeight="bold" mt={4}>
                        Billing History
                    </Typography>
                    <Typography variant="p"  >
                        Download your Subcribe plan and  detail
                    </Typography>
                </Stack>

                <Paper style={{ width: '90%', margin: 'auto', marginTop: 20 }}>
                    <TableContainer style={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead >
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell sx={{ background: 'black', color: 'white' }}
                                            key={column.id}
                                            align="left"
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => (
                                            <TableCell key={column.id} align="left" sx={{ whiteSpace: 'nowrap' }}>
                                                {row[column.id]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={10}
                        page={0}
                        onChangePage={() => { }}
                        onChangeRowsPerPage={() => { }}
                    />
                </Paper>


            </Box>


        </>
    )
}
export default Afterloginprofilepage;


