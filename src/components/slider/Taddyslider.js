import React from 'react';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './../../assets/Row.png';
import image2 from './../../assets/Row.png';
import image3 from './../../assets/Row.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
    margin: 'auto',
  },
  sliderContainer: {
    marginTop: theme.spacing(4),
  },
  card: {
    backgroundColor: 'white',
    height: 450,
    borderRadius: '12px',
    margin: theme.spacing(1), // Add space between cards
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    
  },
 
  prevNextButton: {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    cursor: 'pointer',
    color: 'white',
    border: 'none',
    outline: 'none',
    padding: '10px',
    borderRadius: '50%',
  },
}));

function Taddyslider() {
  const classes = useStyles();

  const settings = {
    // autoplay:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow classes={classes} />,
    nextArrow: <NextArrow classes={classes} />,
    responsive: [
      {
        breakpoint: 1024, // tablet/desktop breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // phone breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function PrevArrow({ onClick }) {
    return (
      <div className={`${classes.prevNextButton} slick-arrow slick-prev`} onClick={onClick}>
        Prev
      </div>
    );
  }

  function NextArrow({ onClick }) {
    return (
      <div className={`${classes.prevNextButton} slick-arrow slick-next`} onClick={onClick}>
        Next
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.sliderContainer}>
        <Slider {...settings}>
          {data.map((d) => (
            
              <div className={classes.cardHeader}>
                <img src={d.img} alt="" width='100%' />
              </div>
              
            
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
   
    img: image1,
    
  },
  {
   
    img: image2,
    
  },{
   
    img: image1,
    
  },
  {
   
    img: image2,
    
  },{
   
    img: image1,
    
  },
  
];

export default Taddyslider;
