import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function HealthDialog(props) {
  const classes = useStyles();  
  return (
  <div>
    <Button variant="outlined" color="primary" onClick={props.handleClickOpen}>
    {props.title}
    </Button>
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
          ]
          ))
        }
      </List>
        
    </Dialog>
  </div>

  );
}
const d1 = {
  title: "rere",
  data: {
    "ABOUT": " The scheme comes under the National Handicrafts Development Programme under\
    the section Ambedkar Hastshilp Vikas Yojna.",
    "AIM": " Rajiv Gandhi Shilpi Swasthya Bima Yojana is aimed towards providing financial aid to the\
    artisan community to access the best of healthcare facilities in the country.",
    "ELIGIBILITY": "  All Craft persons( Handicraft artisans) whether male or female, between the age\
    group of one day to 80 years are eligible to avail the scheme.",
    "BENEFITS OF SCHEME:": "  table.",
    "Pattern of Financial Assistance: ":"<ol><li> GOI share = 75% of the total premium (90% in case of J and K and NER States) </li>\
    <li> *State’s share = 25% of the total premium (10% in case of J and K and NER States)\
    </li><li> Artisan’s share = Rs.30/- for registration</li>\
    *In case of non-consenting states, the State share will also be contributed by GOI.\
    (NOTE: Except for OPD, the scheme shall align with *RSBY in respect of remaining parameters\
    such as IP treatment and final limits decided per package for IP treatment by Ministry of Health\
    and Family Welfare (MoHFW).\
    </ol>\
    *RSBY- Rashtriya Swasthya Bima Yojana )",


  }
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
    <>
      <HealthDialog open={open ==="a"} dialogName="a"  handleClose={handleClose} handleClickOpen={() => handleClickOpen("a")} {...d1} />
      <HealthDialog open={open ==="b"} dialogName="b" handleClose={handleClose} handleClickOpen={() => handleClickOpen("b")} {...d1}/>
    </>
  );
}
