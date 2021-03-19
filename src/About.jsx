import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { yellow} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(1600),
      height: theme.spacing(80),
      
    },
  },
  yellowPaper: {
    backgroundColor: yellow[100]
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Paper elevation={3} className={classes.yellowPaper} >
          <h1>ABOUT US</h1>
          <p>qqqqqqqqqqqqqqqqqqqqqqqqqqq wwwwwwwwwwwwwwwww eeeeeeeeee rrrrrrrrrrr tttttt yyyyyy</p>
      </Paper>
    </div>
  );
}
