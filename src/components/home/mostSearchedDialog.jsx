import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
}));
export default function MostSearchedDialog(props)  {
    var entries = [];
    const classes = useStyles();
    var i = 0;
    if (props.data !== undefined){

        for (let [key, value] of Object.entries(props.data)) {
          i++;
          entries.push([
            <ListItem key={i.toString()}>
              <ListItemText primary={key} secondary={value} />
            </ListItem>,
            <Divider />
          ]);
        }
    }
    return (

        <div>
            <Button variant="outlined" color="primary" onClick={props.hc}>
                Read
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
                    {entries}
                </List>
    
            </Dialog>
        </div>
    );

}
