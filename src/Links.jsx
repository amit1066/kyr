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
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box alignItems="center" className={classes.root}>

      <Card className={classes.root} style={{backgroundColor: "#100a33", color: "white"}}>
        <CardContent>
          
          <Typography variant="h5" component="h2">
            LINKS
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            abcxyz
          </Typography>
          <Typography variant="body2" component="p">
            {bull}link 1 
            <br />
            {bull}link 2
            <br />
            {bull}link 3
            <br />
            {'statement'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}