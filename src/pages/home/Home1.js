import React from "react";
import { Button, Grid, Stack, Typography, Box } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import GradeIcon from "@mui/icons-material/Grade";
import img1 from "./../../assets/tad.png";
import img2 from "./../../assets/taddy.png";
import img3 from "./../../assets/playstore.svg";
import img4 from "./../../assets/start.png";
// import img5 from "./../../assets/Group.png";
import img6 from "./../../assets/Group1.png";
import img7 from "./../../assets/Group2.png";
import Message from './../../assets/Msg.png'

const Home1 = () => {
  return (
    <div style={{ background: "#fcaf63" }}>
      <Grid container rowSpacing={1}>
        {/* First Grid */}
        <Grid
          item
          xs={12}
          md={6}
          style={{ lineHeight: "-6", alignItems: "center" }}
        >
          <Stack
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "100%",
              marginTop: "2rem",
            }}
          >
            <Typography sx={{marginLeft:{md:'60px',sm:'1px'}}}><img
              src={img1}
              alt="Teddy Image 1"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                justifyContent: { md: "center", xs: "center", sm: "center" },
              }}
            /></Typography>
            <Typography sx={{marginBottom:{xs:'10px' ,sm:'' ,md:'',lg:'4rem'},marginLeft:'16%'}} >
              <Typography
                sx={{ fontSize:{md:'3rem' ,lg:'2rem'},fontWeight: "900",width: "100%",fontFamily: "Nunito Sans",}}>
                Discover Teddy Tale Wonders <br />
                Around You
              </Typography>
              <Typography sx={{ width: "85%", alignItems: "center",fontSize:{md:'21px' ,lg:'15px'} }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                qui reiciendis eius, dolorum omnis impedit quos eaque ullam
                itaque temporibus, minima quas aliquam illo porro totam nostrum,
                beatae odio labore.
              </Typography>
            </Typography>
            <h3>Download now on</h3>
            <Stack direction="row" spacing={2}>
              <Button xs={12} md={6} size="large" sx={{height:{xs:'4rem',md:'5rem'},width:{xs:'9rem', sm:'10rem',md:'15rem'}}}
                style={{ color: "white",background: "black",borderRadius: "10px",}}
                startIcon={ <img  src={img3} alt="PlayStore" style={{ height: "30px", width: "35px" }}/>}>
                <div style={{ marginLeft: "10px", lineHeight: "0.5" }}>
                  <Typography sx={{ fontSize: {xs:'5px',md:'12px'}}}>Get In All</Typography>
                  <Typography sx={{ fontSize: {xs:'10px',md:'20px'},whiteSpace:'nowrap' }}>Google Play</Typography>
                </div>
              </Button>
              <Button xs={12} md={6} sx={{height:{xs:'4rem',md:'5rem'},width:{xs:'9rem',sm:'10rem' ,md:'15rem'}}}
                style={{ color: "white",background: "black",borderRadius: "10px",}}
                startIcon={<AppleIcon style={{ height: "30px", width: "35px" }} />}>
                <div style={{ marginLeft: "10px", lineHeight: "0.5" }}>
                  <Typography sx={{ fontSize: {xs:'5px',md:'12px'}}}>Downloaded the App</Typography>
                  <Typography sx={{ fontSize: {xs:'10px',md:'20px'} ,whiteSpace:'nowrap'}}>AppStore</Typography>
                </div>
              </Button>
            </Stack>
          </Stack>
        </Grid>

        {/* Second Grid */}
        <Grid item xs={12} md={6} style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",marginTop: "2rem",}}>
          {/* <Stack>
            <Button  style={{ color: "black",background: "white",height: "70px",width: "200px",border:'1px solid #00C6FF' ,borderRadius: "15px",marginTop: "15px",}}>
              <p>Hey, Buddy! Want to hear a story?</p>
            </Button>
            <img  src={img2} alt="Teddy Image 2" style={{maxWidth: "100%",maxHeight: "100%",marginLeft: "6rem",}}/>
          </Stack> */}
          <Stack>
          <Stack>
            {/* <Button  style={{ color: "black",background: "white",height: "70px",width: "200px",border:'1px solid #00C6FF' ,borderRadius: "15px",marginTop: "15px",}}>
              <p>Hey, Buddy! Want to hear a story?</p>
              
            </Button> */}
            <img src={Message} alt="Message"  style={{width:'270px'}} />
            <img  src={img2} alt="Teddy Image 2" style={{maxWidth: "100%",maxHeight: "100%",marginLeft: "6rem"}}/>
            </Stack>
          </Stack>
          {/* Additional Stack for Downloads, Ratings, etc. */}
          <Stack  direction="row" spacing={2} sx={{ marginTop: "3rem", marginLeft:{xs:'0px' ,sm:'0px' ,md: "6rem",lg:'6rem'} }}>
            <Button style={{color: "black",background: "white",height: "85px",width: "100px",borderRadius: "15px",border: "2px solid #00C6FF",}}>
              <div style={{ marginLeft: "10px", lineHeight: "0.5" }}>
                <p style={{ fontSize: "12px", fontWeight: "700" }}>10 M+</p>
                <p style={{ fontSize: "8px" }}>Dowmload</p>
              </div>
            </Button>
            <Button  style={{color: "black", background: "white",height: "85px",width: "100px",borderRadius: "15px",border: "2px solid #00C6FF",}}>
              <div style={{ marginLeft: "10px", lineHeight: "0.5" }}>
                <p style={{ fontSize: "12px", fontWeight: "700" }}>15 M+</p>
                <p style={{ fontSize: "8px" }}>Members</p>
              </div>
            </Button>
            <Button style={{color: "black",background: "white",height: "85px",width: "100px",borderRadius: "15px",border: "2px solid #00C6FF",}}
              startIcon={ <GradeIcon style={{ height: "30px", width: "35px", color: "yellow" }}/> }>
              <div style={{ marginLeft: "2px", lineHeight: "0.5" }}>
                <p style={{ fontSize: "12px", fontWeight: "700" }}>4.5</p>
                <p style={{ fontSize: "8px" }}>Ratings</p>
              </div>
            </Button>
          </Stack>
        </Grid>

        {/* Common Section */}

        <Grid item xs={12} md={12} sx={{marginTop:{xs:'3rem' ,md:'4rem' ,lg:'5rem'}}}>
          <Stack  style={{ alignItems: "center"}}direction={{ xs: "column", sm: "column" }} spacing={2}>
            <img src={img4} alt="Start Image" style={{ maxWidth: "100%" }} />
            <Typography sx={{marginLeft:{xs:'',sm:'',md:'18%',lg:'18%'},marginRight:{xs:'',sm:'',md:'',lg:'18%'}}}>
               <Typography variant="h6" gutterBottomstyle={{ fontFamily: "Nunito Sans", fontWeight: "900" }} sx={{fontSize:{xs:'12px' ,sm:'15px' ,md:'18px' ,lg:'20px'} ,textAlign: "center" ,fontWeight:'800'}}>
              TO REACH CHILDREN, CREATE THEIR KNOWN WORLD WITH TEDDY FRIEND
               </Typography>
            <Typography paragraph style={{ textAlign: "center" }} sx={{fontSize:{xs:'12px' ,sm:'12px' ,md:'14px' ,lg:'16px'},marginLeft:{xs:'2%',sm:'',md:'',lg:'16%'},marginRight:{xs:'2%',sm:'',md:'',lg:'16%'}}} mt={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid item container mt={8}>
        <Grid item xs={12} sm={12} md={12} lg={6} display='flex' justifyContent='center'>
          <Typography width='70%'>
            <img src={img2} alt="Teddy Image 2"  Width='100%'/>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} mt={4}>
          <Stack
            direction={{ xs: "row", sm: "row" }}
            spacing={3}
            justifyContent={"center"}
          >
            <div style={{ position: "relative" }}>
              <img src={img6} alt="Image 1" style={{ width: "100%" }} />

              <Typography
                variant="h6"
                sx={{ lineHeight: { xs: "1.0", sm: "1.0", md: "1.5" } }}
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "55%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                }}
              >
                <p style={{ fontSize: "10px", fontWeight: "800" }}>
                  DOWNLOAD THE APP
                </p>
                <Typography
                  sx={{ fontSize: { xs: "8px",sm:'10px', md: "12px" } }}
                  style={{ width: "85%" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Typography>
            </div>

            <div style={{ position: "relative" }}>
              <img src={img7} alt="Image 2" style={{ width: "100%" }} />

              <Typography
                variant="h6"
                sx={{ lineHeight: { xs: "0.8", sm: "0.8", md: "1.5" } }}
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "60%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                }}
              >
                <div style={{ marginLeft: "10px" }}>
                  <p style={{ fontSize: "10px", fontWeight: "800" }}>
                    DOWNLOAD THE APP
                  </p>
                  <Typography
                    sx={{ fontSize: { xs: "8px",sm:'10px', md: "12px" } }}
                    style={{ width: "85%" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>
                </div>
              </Typography>
            </div>
          </Stack>
           {/* //stack 1 */}
          <Stack
            direction={{ xs: "row", sm: "row" }}
            spacing={3}
            justifyContent={"center"}
          >
            <div style={{ position: "relative" }}>
              <img src={img6} alt="Image 1" style={{ width: "100%" }} />

              <Typography
                variant="h6"
                sx={{ lineHeight: { xs: "1.0", sm: "1.0", md: "1.5" } }}
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "55%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                }}
              >
                <p style={{ fontSize: "10px", fontWeight: "800" }}>
                  DOWNLOAD THE APP
                </p>
                <Typography
                  sx={{ fontSize: { xs: "8px", md: "12px" } }}
                  style={{ width: "85%" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Typography>
            </div>

            <div style={{ position: "relative" }}>
              <img src={img7} alt="Image 2" style={{ width: "100%" }} />

              <Typography
                variant="h6"
                sx={{ lineHeight: { xs: "0.8", sm: "0.8", md: "1.5" } }}
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "60%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                }}
              >
                <div >
                  <p style={{ fontSize: "10px", fontWeight: "800" }}>
                    DOWNLOAD THE APP
                  </p>
                  <Typography
                    sx={{ fontSize: { xs: "8px", md: "12px" } }}
                    style={{ width: "85%" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>
                </div>
              </Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>

   
    </div>
  );
};

export default Home1;
