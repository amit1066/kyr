import React from 'react';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
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
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import Slide from '@material-ui/core/Slide';


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
      overflow: "visible",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  export default function Policy(props) {
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
          <Typography variant="body2" component="p">
            {props.short_text}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center", bottom:"0" }}>
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
  