import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import MiscArray from '../data/misc_data.json';
import Policy from './policy.jsx';


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
export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles2();
  
  return (
    <Box display="flex" p={1} style={{ width: '100%' }} flexWrap="wrap" flexDirection="row" justifyContent="center">
      
      {MiscArray.map((data, i) => (
        <Box m={2} className={classes.PolicyBox} key={i}>
          <Policy open={open === i}  {...data} />
          
        </Box>
                      
      ))}
    </Box>

  );
}
