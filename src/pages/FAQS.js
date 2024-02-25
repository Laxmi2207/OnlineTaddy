import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const FAQS = () => {
  return (
   <>
      <Typography   mt={2}  sx={{ fontWeight: '600', fontSize: '40px', textAlign: 'center', marginBottom: '20px' }}>
      Frequently Asked Question
      </Typography>
      <div>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" sx={{fontSize:'20px'}}
        >
         The most popular question
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:'15px',lineHeight:'20px',color:'gray'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.<br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" sx={{fontSize:'20px'}}
        >
         The most popular question
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:'15px',lineHeight:'20px',color:'gray'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.<br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" sx={{fontSize:'20px'}}
        >
         The most popular question
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:'15px',lineHeight:'20px',color:'gray'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.<br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" sx={{fontSize:'20px'}}
        >
         The most popular question
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:'15px',lineHeight:'20px',color:'gray'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.<br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" sx={{fontSize:'20px'}}
        >
         The most popular question
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:'15px',lineHeight:'20px',color:'gray'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.<br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" sx={{fontSize:'20px'}}
        >
         The most popular question
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:'15px',lineHeight:'20px',color:'gray'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.<br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" sx={{fontSize:'20px'}}
        >
         The most popular question
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:'15px',lineHeight:'20px', color:'gray'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.<br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/><br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply so that a dummy text of the gone.
        </AccordionDetails>
      </Accordion>
      {/* <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion> */}
    </div>
   </>
  )
}

export default FAQS
