
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#100a33",
  },
  title: {
    fontSize: 14,
  },
  pos: {
  },
  notice: {
    color: '#FE68B8',
    borderRadius: 3,

    padding: '0 1rem',
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Box className={classes.root} alignItems="center">
      
      <Card style={{backgroundColor: "#100a33", color: "white"}} >
        <CardContent>
          
          <Typography variant="h5" component="h2" align='center'>
            NOTIFICATIONS
          </Typography>
          <Typography className={classes.pos} >
            <Button className={classes.notice}>abcxyz</Button>
          </Typography>
          <Typography className={classes.pos} >
            <Button className={classes.notice}>abcxyz</Button>
          </Typography>
          <Typography className={classes.pos} >
            <Button className={classes.notice}>abcxyz</Button>
          </Typography>
          
        </CardContent>
      </Card>
    </Box>
  );
}