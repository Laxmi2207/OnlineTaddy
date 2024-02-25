import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import img1 from './../../assets/logo.png';
import { Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, } from '@mui/material';
import Modal from '@mui/material/Modal';




import { BorderRight, Logout } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';


const drawerWidth = 240;
const navItems = ['subscriptions', 'Contact us', 'testimonials', 'FAQs'];

function Header(props) {

  const navigate = useNavigate();
  const pagelogin = () => {
    navigate("/signin")
  }

  

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={img1} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modalOpen = () => {
    setOpen(true)
  }

  const pagelogout = () => {
    
    navigate("/")
  }
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: 'white', boxShadow: 'none' }} >
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
              <MenuIcon style={{ color: 'black' }} />
            </IconButton>
            <Stack sx={{ display: { xs: 'none', sm: 'block' }, paddingLeft: { sm: '3rem', md: '8rem' }, width: '20%' }} direction='row-reverse'>
              <img src={img1} alt="Image Description" />
            </Stack>

            <Box sx={{ display: { xs: 'none', sm: 'block' }, width: '70%', }}>
              {navItems.map((item) => (
                <Button key={item} style={{ color: '#000048', fontWeight: '550', fontSize: '16px' }}>
                  {item}
                </Button>
              ))}

            </Box>
            {/* <Button style={{ color: 'white', background: '#00C6FF', marginRight: '80px', whiteSpace: 'nowrap' }} onClick={pagelogin}>Sign In</Button> */}
            <Button style={{ color: 'white', background: '#00C6FF', marginRight: '80px', whiteSpace: 'nowrap' }} onClick={modalOpen}>Log Out</Button>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" >
          <Toolbar />
        </Box>
      </Box>



      <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 'auto' }}>
            
            <CardContent >
              <Typography variant="h5" component="div" textAlign="center">
                <img src={img1} />
              </Typography>

              <Typography component="div" textAlign="center" sx={{fontFamily:'Nunito Sans'}} color='orange'>
               Logout
              </Typography>

              <Typography component="div" textAlign="center"  >
                Are you sure YOu Want logout !
              </Typography>
              
              <Stack direction='row' spacing={4} mt={4} justifyContent='center'>
                <Button variant="outlined"  size='large' onClick={handleClose} >No </Button>
                <Button variant="contained" size="large" onClick={pagelogout}>
  Yes
</Button>

              </Stack>

            </CardContent>
          </Card>
        </Modal>
      </div>
    </>

  );
}


export default Header;