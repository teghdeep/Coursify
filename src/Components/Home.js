import React, { useState } from "react";
import Header from "./Header";
import PinDropIcon from '@material-ui/icons/PinDrop';
import SearchBar from "material-ui-search-bar";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import purple from '@material-ui/core/colors/yellow';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import svg1 from "./images/undraw_book_lover_mkck.svg";
import svg2 from "./images/undraw_book_reading_kx9s.svg";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import PublicIcon from '@material-ui/icons/Public';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/purple';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import HelpIcon from '@material-ui/icons/Help';
import PublishIcon from '@material-ui/icons/Publish';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow.A400,
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles((theme)=>({
  root2: {
    flexGrow: 1,
    minwidth: 500,
    marginBottom:50,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minwidth:500,
    padding: "10px",
    fontSize: 20,
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root3: {
    maxWidth: 345,
    marginBottom:30,
  },
  largeIcon:{
     
      '& svg': {
        fontSize: 60,
        justifyContent: "center"
      }
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Home = () => {
  const [value, setValue] = useState("");
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper} ><PinDropIcon />Andhra Pradesh</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><PinDropIcon />Andhra Pradesh</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><PinDropIcon />Andhra Pradesh</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><PinDropIcon />Andhra Pradesh</Paper>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div>
      <Header currUser={null} />
      <section className="banner-area relative" id="home">
        <div className="container">
          <div className="overlay overlay-bg"></div>
          <div className="row fullscreen d-flex align-items-center justify-content-start">
            <div className="banner-content col-lg-6 col-md-8">
              <h1 className="text-uppercase">
                Clarify your doubts in your language <br /></h1>
              
              <div className="row justify-content-between">
              
              {/* <SearchBar
              className='col-10 col-md-10 mb-4'
    value={value}
    onChange={(newValue) => setValue(newValue)}
     onRequestSearch={(e) => setValue(e.target.value)}
  /> */}
  </div>
  
  <div className="row justify-content-between">
                {/* <a
                  href="/locate"
                  className="col-9 col-md-7 primary-btn header-btn text-uppercase  mb-1"
                >
                  Get the free app on Play Store
                </a> */}
                <button
                  onClick={() => {
                    window.Location("/");
                  }}
                  className="form-btn"
                  style={{
                   

                    borderRadius: "10px",
    height: "45px",
    lineHeight: "40px",
    
                  }}
                ><GetAppIcon />
                  Download our App for free
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-sm-block" style={{overflow:"none"}}>
              <img src={svg1}  style={{height:"70%",width:"70%",float:"right" ,marginRight:"auto"}} />       </div>
          </div>
        </div>
      </section>

      

      <section className="process-area section-gap" id="wanttohelp">
        <div className="container">
          <div className="row d-flex justify-content-center">
          
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
      
        <Typography variant="h5" component="h2">
        <img style={{height:"10%" , width:"10%"}} src="https://cdn.onlinewebfonts.com/svg/img_67203.png" />
                {"     "}20+
        </Typography>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
                {"     "}State Boards 
        </Typography>
      </CardContent>
     
    </Card>
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
                <PlayCircleFilledIcon />{" "}1,000,000+
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Video Lectures
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
                <SentimentVerySatisfiedIcon />{" "}40,000+
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Doubts Solved
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-process">
              
                 <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
                <ImportContactsIcon />{"  "}4,000+
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Books Covered
        </Typography>
      </CardContent>
     
    </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      






      <section className="process-area section-gap" id="wanttohelp">
        <div className="container">
          <div className="row d-flex justify-content-center">
            
          
          <h2><HelpIcon /> {"  "}Solve your doubts faster</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="single-process mb-5 mt-5">
              <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
                <PublicIcon />{"  "}Accessible everywhere
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Access to quality education anywhere, anytime
        </Typography>
      </CardContent>
     
    </Card>
                
              </div>
              <div className="single-process mb-5">
              <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
                <PlayCircleFilledIcon />{"  "}1 million + videos
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Unlimited access to video solutions
        </Typography>
      </CardContent>
     
    </Card>
                </div>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="single-process">
              
                 <img src={svg2} style={{height:"70%", width:"70%", float:"right", marginRight:"auto"}}  />
              </div>
            </div>
          </div>
        </div>
      </section>







<div className="semi-circle"></div>
      <section className="process-area section-gap" id="wanttohelp">
        <div className="container">
          <div className="row d-flex justify-content-center">
            
          
          <h2>How it works?</h2>
          </div>
          <br /><br />
          <div className="row">
            {/* <div className="col-12"> */}
            <div className="col-lg-3 col-md-3">
              <div className="single-process mr-4 ">
              <Card className={classes.root}>
      <CardContent className="ml-20">
        <Typography variant="h5" component="h2">
                Have a doubt?<br /> 
                <IconButton className={classes.largeIcon}>
                <SentimentVeryDissatisfiedIcon />
                </IconButton>
                
        </Typography>
        
        
      </CardContent>
     
    </Card>
                
              </div>
              </div>

             <div className="col-lg-1 col-md-1 mt-5">
              <IconButton className={classes.largeIcon}>
              <ArrowRightIcon  />
              </IconButton>  
              
             </div>

              <div className="col-lg-3 col-md-3">
              <div className="single-process mr-4">
              <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
                Type a question
        </Typography>
        <SearchBar
        className='col-12 mt-2'
    value={value}
    onChange={(newValue) => setValue(newValue)}
     onRequestSearch={(e) => setValue(e.target.value)}
  /><br />
  <Typography className={classes.title} color="textSecondary" gutterBottom>
          OR
        </Typography>
        <button
                  onClick={() => {
                    window.Location("/");
                  }}
                  className="form-btn"
                  style={{
                   

                    borderRadius: "10px",
    height: "45px",
    lineHeight: "40px",
    // backgroundColor: "maroon",
                  }}
                ><PublishIcon />
                  Upload an Image
                </button>
      </CardContent>
     
    </Card>
                </div>
                </div>
                <div className="col-lg-1 col-md-1 mt-5">
              <IconButton className={classes.largeIcon}>
              <ArrowRightIcon  />
              </IconButton>  
              
             </div>
                <div className="col-lg-3 col-md-3">
                <div className="single-process mr-4">
              <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
              You got an answer
              <IconButton className={classes.largeIcon}>
                <SentimentVerySatisfiedIcon />
                </IconButton>
        </Typography>
       
      </CardContent>
     
    </Card>
                </div>
                </div>
            

            {/* <div className="col-lg-8 col-md-8">
              <div className="single-process">
              
                 <img src={svg2} style={{height:"70%", width:"70%", float:"right", marginRight:"auto"}}  />
              </div>
            </div> */}
          </div>
          
          <div className="row mt-5">
            <div className="col-5 offset-4 ">
            <button
                  onClick={() => {
                    window.Location("/");
                  }}
                  className="form-btn"
                  style={{
                   

                    borderRadius: "10px",
    height: "45px",
    lineHeight: "40px",
    // backgroundColor: "darkblue",
                  }}
                ><GetAppIcon />
                  Clarify your doubts now
                </button>
              </div>
            </div>
        </div>
      </section>

      
      {/* <section className="process-area section-gap" id="wanttohelp">
        <div className="container">
          <div className="row d-flex justify-content-center">
            
          
          <h2><HelpIcon /> {"  "}Solve your doubts faster</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="single-process mb-5 mt-5">
              <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
                <PublicIcon />{"  "}Accessible everywhere
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Access to quality education anywhere, anytime
        </Typography>
      </CardContent>
     
    </Card>
                
              </div>
              <div className="single-process mb-5">
              <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
                <PlayCircleFilledIcon />{"  "}1 million + videos
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Unlimited access to video solutions
        </Typography>
      </CardContent>
     
    </Card>
                </div>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="single-process">
              
                 <img src={svg2} style={{height:"70%", width:"70%", float:"right", marginRight:"auto"}}  />
              </div>
            </div>
          </div>
        </div>
      </section>






















       */}

      <section className="process-area section-gap" id="wanttohelp">
        <div className="container">
          <div className="row d-flex justify-content-center">
            
           <h2> Study Materials of 50+ State Boards</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div className="single-process">
              
    <div className={classes.root2}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
                
              </div>
            </div>

           
          </div>
        </div>
      </section>



      <section className="process-area section-gap" id="wanttohelp">
        <div className="container">
          <div className="row d-flex justify-content-center">
            
           <h2> Exams that you can see with Coursify</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          Board Exams
        </Typography>
      </CardContent>
      
    </Card>
                
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
         JEE Mains And Advanced
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          NEET
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>

            
          </div>
        </div>
      </section>



      <section className="process-area section-gap" id="wanttohelp">
        <div className="container">
          <div className="row d-flex justify-content-center">
            
            <h2>Explore our Subjects</h2>
          </div>
          <div className="row mb-1">
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          Maths
        </Typography>
      </CardContent>
      
    </Card>
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
         Physics
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          Chemistry
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          Biology
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>

            
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          Science
        </Typography>
      </CardContent>
      
    </Card>
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
         Commerce
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          Coding
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          
          Languages
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>

            
          </div>
        </div>
      </section>


      <section className="process-area section-gap" id="wanttohelp">
        <div className="container">
          <div className="row d-flex  ">
            
           <h2 style={{justifyContent:"center",marginLeft:"auto"}}>Free Solutions</h2>
          <br />
           <a href="/" style={{float:"right", marginLeft:"auto"}}>Change Board</a>
          </div>
         
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          NCERT Solutions
        </Typography>
      </CardContent>
      
    </Card>
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
         NCERT Exemplar
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          Reference Books
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
                <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          Exam Prep Material
        </Typography>
      </CardContent>
      
    </Card>
              </div>
            </div>
            
          </div>
        </div>
      </section>


      <section className="process-area section-gap" id="wanttohelp">
        <div className="container">
          <div className="row d-flex justify-content-center">
            
           <h2>Testimonials</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
              <Card className={classes.root3}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bill Gates"
        subheader="October 21, 2020"
      />
      <CardMedia
        className={classes.media}
        image="https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg"
        title="Bill"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is an impressive site, with great user interface. Courses provided here are top class.
        </Typography>
      </CardContent>
      
      
    </Card>
                
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
              <Card className={classes.root3}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bill Gates"
        subheader="October 21, 2020"
      />
      <CardMedia
        className={classes.media}
        image="https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg"
        title="Bill"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is an impressive site, with great user interface. Courses provided here are top class.
        </Typography>
      </CardContent>
      
      
    </Card>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
              <Card className={classes.root3}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bill Gates"
        subheader="October 21, 2020"
      />
      <CardMedia
        className={classes.media}
        image="https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg"
        title="Bill"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is an impressive site, with great user interface. Courses provided here are top class.
        </Typography>
      </CardContent>
      
      
    </Card>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-process">
               
              <Card className={classes.root3}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bill Gates"
        subheader="October 21, 2020"
      />
      <CardMedia
        className={classes.media}
        image="https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg"
        title="Bill"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is an impressive site, with great user interface. Courses provided here are top class.
        </Typography>
      </CardContent>
      
      
    </Card>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      <div className="row ">
      <button
                  onClick={() => {
                    window.Location("/");
                  }}
                  className="form-btn"
                  style={{
                    borderRadius: "20px",
                    height: "50px",
                    lineHeight: " 0px",
                    marginLeft:"auto",
                    marginRight:"auto",
                    justifyContent:"center"
                  }}
                >
                  Download the app for free
                </button>
              </div>

<br /><br />

    </div>
  );
};

export default Home;







