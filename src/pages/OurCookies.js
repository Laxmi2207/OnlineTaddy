import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from './../assets/logo.png';
import { BorderRight } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const OurCookies = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
       
        handleOpen();
    
       
      }, []);
  return (
    <>
      <Typography   mt={2} sx={{ fontWeight: '600', fontSize: '40px', textAlign: 'center', marginBottom: '20px' }}>
      Our Cookies Policy
      </Typography>

    <Stack sx={{marginLeft:'10%',marginRight:'2%'}}>
    <Typography sx={{ fontSize: '16px', textAlign: 'left' ,color:'gray'}}>
    These Terms and Conditions (“Terms”, “Terms and Conditions”) govern your relationship with Fululizo mobile applications and web panels (the “Service”) operated by Integral Media Limited (“us”, “we”, or “our”).
<br/><br/>
Please read these Terms and Conditions carefully before using our Fululizo mobile applications and web panels (the “Service”).
Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
<br/><br/>
By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
Content<br/><br/>

Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. You agree that this license includes the right for us to make your Content available to other users of the Service, who may also use your Content subject to these Terms.
<br/><br/>
You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
Accounts
<br/><br/>
When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
<br/><br/>
You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
<br/><br/>
Availability, Errors and Inaccuracies<br/><br/>
We are constantly updating our offerings of products and services on the Service. The products or services available on our Service may be mispriced, described inaccurately, or unavailable, and we may experience delays in updating information on the Service and in our advertising on other web sites.
We cannot and do not guarantee the accuracy or completeness of any information, including prices, product images, specifications, availability, and services. We reserve the right to change or update information and to correct errors,inaccuracies, or omissions at any time without prior notice.
Purchases<br/><br/>

If you wish to purchase any product or service made available through the Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card,your billing address, and your shipping information.
You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.By submitting such information, you grant us the right to provide the information to third parties for purposes of facilitating the completion of Purchases.
We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons. We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
<br/><br/>
Intellectual Property
The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Integral Media Limited and its licensors. The Service is protected by copyright, trademark, and other laws of both the KENYA and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Integral Media Limited.
Links To Other Web Sites
<br/><br/>
Our Service may contain links to third-party web sites or services that are not owned or controlled by Integral Media Limited.
Integral Media Limited has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Integral Media Limited shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
Termination
<br/><br/>
We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
Limitation of Liability<br/><br/>
In no event shall Integral Media Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
Disclaimer<br/><br/>
Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
Integral Media Limited its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
Governing Law<br/><br/>
These Terms shall be governed and construed in accordance with the laws of KENYA, without regard to its conflict of law provisions.
Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.
Changes<br/><br/>

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
      </Typography>
    </Stack>
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={{ position: 'absolute',outline:'none', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 850 ,height:'auto'}}>
        <CardHeader
            
            action={
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent >
            <Typography variant="h5" component="div">
             <img src={logo}  />
            </Typography>
            <Typography  sx={{marginBottom:'0.5rem',fontWeight:'bold',fontSize:'20px'}}>
            We Value Your Privacy
            </Typography>
            <Typography paragraph  sx={{color:'gray',fontSize:'16px'}}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </Typography>
            <Stack direction='row' spacing={4} color='#00C6FF' mt={4}>
                <Typography>Terms & Conditions</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>More Information</Typography>
            </Stack>
            <Stack direction='row' spacing={4} mt={4}>
            <Button variant="outlined" sx={{borderRadius:'30px',padding:'19px',width:'500px'}} size='large' onClick={handleClose} >Deny Cookies</Button>
            <Button variant="contained" sx={{width:'500px'}} size='large' onClick={handleClose}>Accept Cookies</Button>

            </Stack>
           
          </CardContent>
        </Card>
      </Modal>
    </div>
    </>
  );
};

export default OurCookies;
