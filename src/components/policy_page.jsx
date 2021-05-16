import React from 'react';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    

}));

export default function PolicyPage(props) {
    const classes = useStyles();
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
        <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography variant="h7" className={classes.title}>
                        {props.short_text}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={props.handleClose}>
                explore another policy
            </Button>
                </Toolbar>
            </AppBar>
            <List>
                {entries}
            </List>
        </>
    );
}
