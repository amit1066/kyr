import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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
function HealthDialog(props) {
  const classes = useStyles();
  var entries = [];
  for (let [key, value] of Object.entries(props.data)) {
    entries.push([
      <ListItem>
        <ListItemText primary={key} secondary={value} />
      </ListItem>,
      <Divider />
    ]);
  }
  return (
    <div>
      <Policy title="Some policy" subtitle="lorem ipsum" short_text={props.short_text} />
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
    </div>

  );
}
const d1 = {
  title: "rerfdfe",
  data: {
    "ABOUT": " The scheme comes under the National Handicrafts Development Programme under\
    the section Ambedkar Hastshilp Vikas Yojna.",
    "AIM": " Rajiv Gandhi Shilpi Swasthya Bima Yojana is aimed towards providing financial aid to the\
    artisan community to access the best of healthcare facilities in the country.",
    "ELIGIBILITY": "  All Craft persons( Handicraft artisans) whether male or female, between the age\
    group of one day to 80 years are eligible to avail the scheme.",
    "BENEFITS OF SCHEME": "  table.",


  },
  short_text: "Rajiv Gandhi Shilpi Swasthya Bima Yojana is aimed towards providing financial aid to the\
  artisan community to access the best of healthcare facilities in the country. "
}
export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (thisTab) => {

    setOpen(thisTab);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
  );
}
