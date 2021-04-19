
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
  notice: {
    color: '#FE68B8',
    borderRadius: 3,
    height: 48,
    padding: '0 30px',
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box pl={20} className={classes.root} alignItems="center" mr={0.5}>
      
      <Card style={{backgroundColor: "#100a33", color: "white"}} >
        <CardContent>
          
          <Typography variant="h5" component="h2" align='center'>
            NOTIFICATIONS
          </Typography>
          <Typography className={classes.pos} color="white">
            <Button className={classes.notice}>abcxyz</Button>
          </Typography>
          <Typography className={classes.pos} color="white">
            <Button className={classes.notice}>abcxyz</Button>
          </Typography>
          <Typography className={classes.pos} color="white">
            <Button className={classes.notice}>abcxyz</Button>
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}