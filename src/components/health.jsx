import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { GridList } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  Policy: {
    backgroundColor: "#CFD5FA",
    overflow: "visible"
  },
  ReadMoreButton: {
    backgroundColor: "white",

    '&:hover': {
      backgroundColor: "#100A33",
      border: "white 0.25rem",
      color: "white"
    },
    'bottom': "-30px",
  },

}));
function Policy(props) {
  const classes = useStyles();
  return (
    <Card className={classes.Policy}>
      <CardContent>
        <Typography variant="h2" color="textSecondary" style={{ textAlign: "center" }} gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="h2" color="textSecondary">
          {props.subtitle}
        </Typography>
        <Typography variant="body2" component="p">
          {props.short_text}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small" variant="outlined" className={classes.ReadMoreButton}> Read More</Button>
      </CardActions>
    </Card>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Policy(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  var entries = [];
  var i = 0;
  for (let [key, value] of Object.entries(props.data)) {
    i++;
    entries.push([
      <ListItem key={i.toString()}>
        <ListItemText primary={key} secondary={value} />
      </ListItem>,
      <Divider />
    ]);
  }
  return (
    <Card className={classes.Policy}>
      <CardContent>
        <Typography variant="h4" color="textSecondary" style={{ textAlign: "center" }} gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="h2" style={{textAlign: "center"}} color="textSecondary">
          {props.subtitle}
        </Typography>
        <Typography variant="body2" component="p">
          {props.short_text}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small" variant="outlined" className={classes.ReadMoreButton} onClick={props.handleClickOpen}> READ MORE </Button>
      </CardActions>
      <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.title}
            </Typography>
            <Button autoFocus color="inherit" onClick={props.handleClose}>
              explore another policy
          </Button>
          </Toolbar>
        </AppBar>
        <List>
          {entries}
        </List>

      </Dialog>
    </Card>
  );
}
function HealthDialog(props) {
  const classes = useStyles();
<<<<<<< HEAD
=======
  var entries = [];
  for (let [key, value] of Object.entries(props.data)) {
    entries.push([
      <ListItem key={key}>
        <ListItemText primary={key} secondary={value} />
      </ListItem>,
      <Divider />
    ]);
  }
>>>>>>> 2b412c5c54440661ed536dfb7596e4345e5e36f9
  return (
    <div>
<<<<<<< HEAD
      <Policy title="Some policy" subtitle="lorem ipsum" short_text={props.short_text} />
||||||| 0c5ca09... Can add data in json (as in variable d1) and use it to display
      <Button variant="outlined" color="primary" onClick={props.handleClickOpen}>
        {props.title}
      </Button>
=======
      <Button variant="outlined" color="primary" onClick={props.handleClickOpen}>
        {props.title}
      </Button>
>>>>>>> parent of 0c5ca09... Can add data in json (as in variable d1) and use it to display
      <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.title}
            </Typography>
            <Button autoFocus color="inherit" onClick={props.handleClose}>
              explore another policy
          </Button>
          </Toolbar>
        </AppBar>
        <List>
          {
            Object.keys(props.data).forEach(dataHead => ([
              <ListItem>
                <ListItemText primary={dataHead} secondary={props.data[dataHead]} />
              </ListItem>,
              <Divider />
            ]))
          }
        </List>

      </Dialog>
    </div>

  );
}
const d1 = {
<<<<<<< HEAD
  title: "rere",
=======
  title: "Rajiv Gandhi Shilpi Swasthya Bima Yojana",
  subtitle: "subtitle",
  short_text: "short text",
>>>>>>> 2b412c5c54440661ed536dfb7596e4345e5e36f9
  data: {
    "ABOUT": " The scheme comes under the National Handicrafts Development Programme under\
    the section Ambedkar Hastshilp Vikas Yojna.",
    "AIM": " Rajiv Gandhi Shilpi Swasthya Bima Yojana is aimed towards providing financial aid to the\
    artisan community to access the best of healthcare facilities in the country.",
    "ELIGIBILITY": "  All Craft persons( Handicraft artisans) whether male or female, between the age\
    group of one day to 80 years are eligible to avail the scheme.",
<<<<<<< HEAD
<<<<<<< HEAD
    "BENEFITS OF SCHEME": "  table.",
||||||| 0c5ca09... Can add data in json (as in variable d1) and use it to display
    "BENEFITS OF SCHEME": "  table.",
<<<<<<< HEAD
    
=======
    "BENEFITS OF SCHEME:": "  table.",
    "Pattern of Financial Assistance: ": "<ol><li> GOI share = 75% of the total premium (90% in case of J and K and NER States) </li>\
    <li> *State’s share = 25% of the total premium (10% in case of J and K and NER States)\
    </li><li> Artisan’s share = Rs.30/- for registration</li>\
    *In case of non-consenting states, the State share will also be contributed by GOI.\
    (NOTE: Except for OPD, the scheme shall align with *RSBY in respect of remaining parameters\
    such as IP treatment and final limits decided per package for IP treatment by Ministry of Health\
    and Family Welfare (MoHFW).\
    </ol>\
    *RSBY- Rashtriya Swasthya Bima Yojana )",
=======
import Box from '@material-ui/core/Box';

import HealthArray from '../data/health/healthdata.json';
import Policy from './policy.jsx';
>>>>>>> 3e397577cf5cd41dc9fcae8f1fafb41ec6baef86

>>>>>>> parent of 0c5ca09... Can add data in json (as in variable d1) and use it to display
||||||| 0c5ca09... Can add data in json (as in variable d1) and use it to display
    "BENEFITS OF SCHEME": "  table.",
    
=======
    "BENEFITS OF SCHEME:": "  table.",
    "Pattern of Financial Assistance: ": "<ol><li> GOI share = 75% of the total premium (90% in case of J and K and NER States) </li>\
    <li> *State’s share = 25% of the total premium (10% in case of J and K and NER States)\
    </li><li> Artisan’s share = Rs.30/- for registration</li>\
    *In case of non-consenting states, the State share will also be contributed by GOI.\
    (NOTE: Except for OPD, the scheme shall align with *RSBY in respect of remaining parameters\
    such as IP treatment and final limits decided per package for IP treatment by Ministry of Health\
    and Family Welfare (MoHFW).\
    </ol>\
    *RSBY- Rashtriya Swasthya Bima Yojana )",

<<<<<<< HEAD
>>>>>>> parent of 0c5ca09... Can add data in json (as in variable d1) and use it to display
=======

>>>>>>> 2b412c5c54440661ed536dfb7596e4345e5e36f9


  },
  short_text: "Rajiv Gandhi Shilpi Swasthya Bima Yojana is aimed towards providing financial aid to the\
  artisan community to access the best of healthcare facilities in the country. "
}
=======
const useStyles2 = makeStyles((theme) => ({
  PolicyBox: {
    [theme.breakpoints.down('sm')]: {
      minWidth: "300px"
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: "30%"
    }
    
  }
}));
>>>>>>> 3e397577cf5cd41dc9fcae8f1fafb41ec6baef86
export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (thisTab) => {

    setOpen(thisTab);
  };
  const classes = useStyles2();
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div>
      <Grid item container >
        <Grid item xs={0} sm={2} />
        <Grid item xs={5} sm={4} style={{ margin: "20px" }}>
          <HealthDialog open={open === "a"} dialogName="a" handleClose={handleClose} handleClickOpen={() => handleClickOpen("a")} {...d1} />

        </Grid>
        <Grid item xs={5} sm={4} style={{ margin: "20px" }} >
          <HealthDialog open={open === "a"} dialogName="a" handleClose={handleClose} handleClickOpen={() => handleClickOpen("a")} {...d1} />
        </Grid>

        <Grid item xs={0} sm={2} />
      </Grid>
      <Grid item container >
        <Grid item xs={0} sm={2} />
        <Grid item xs={5} sm={4} style={{ margin: "20px" }}>
          <HealthDialog open={open === "a"} dialogName="a" handleClose={handleClose} handleClickOpen={() => handleClickOpen("a")} {...d1} />

        </Grid>
        <Grid item xs={5} sm={4} style={{ margin: "20px" }} >
          <HealthDialog open={open === "a"} dialogName="a" handleClose={handleClose} handleClickOpen={() => handleClickOpen("a")} {...d1} />

        </Grid>

        <Grid item xs={0} sm={2} />
      </Grid>

    </div>
||||||| 0c5ca09... Can add data in json (as in variable d1) and use it to display
    <>
<<<<<<< HEAD
      <HealthDialog open={open === "a"} dialogName="a" handleClose={handleClose} handleClickOpen={() => handleClickOpen("a")} {...d1} />
      <HealthDialog open={open === "b"} dialogName="b" handleClose={handleClose} handleClickOpen={() => handleClickOpen("b")} {...d1} />
    </>
=======
    <>
      <HealthDialog open={open === "a"} dialogName="a" handleClose={handleClose} handleClickOpen={() => handleClickOpen("a")} {...d1} />
      <HealthDialog open={open === "b"} dialogName="b" handleClose={handleClose} handleClickOpen={() => handleClickOpen("b")} {...d1} />
=======
      <Grid item container >
        <Grid item  xs={false} sm={2} />
        <Grid item xs={5} sm={4} style={{ margin: "20px" }}>
          <Policy open={open === "a"} dialogName="a" handleClose={handleClose} handleClickOpen={() => handleClickOpen("a")} {...d1} />
        </Grid>
        <Grid item xs={5} sm={4} style={{ margin: "20px" }} >
          <Policy open={open === "b"} dialogName="b" handleClose={handleClose} handleClickOpen={() => handleClickOpen("b")} {...d1} />
        </Grid>

        <Grid item  xs={false} sm={2} />
      </Grid>
      <Grid item container >
        <Grid item  xs={false} sm={2} />
        <Grid item xs={5} sm={4}  style={{ margin: "20px" }}>
          <Policy open={open === "v"} dialogName="v" handleClose={handleClose} handleClickOpen={() => handleClickOpen("v")} {...d1} />
        </Grid>
        <Grid item xs={5} sm={4} style={{ margin: "20px" }} >
          <Policy open={open === "c"} dialogName="c" handleClose={handleClose} handleClickOpen={() => handleClickOpen("c")} {...d1} />
        </Grid>

        <Grid item  xs={false} sm={2} />
      </Grid>
>>>>>>> 2b412c5c54440661ed536dfb7596e4345e5e36f9
    </>
>>>>>>> parent of 0c5ca09... Can add data in json (as in variable d1) and use it to display
=======
    <Box display="flex" p={1} style={{ width: '100%' }} flexWrap="wrap" flexDirection="row" justifyContent="center">
      
      {HealthArray.map((data, i) => (
        <Box m={2} className={classes.PolicyBox} key={i}>
          <Policy open={open === i}  handleClose={handleClose} handleClickOpen={() => handleClickOpen(i)} {...data} />
          
        </Box>
                      
      ))}
    </Box>

>>>>>>> 3e397577cf5cd41dc9fcae8f1fafb41ec6baef86
  );
}
