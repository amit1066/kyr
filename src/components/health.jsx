import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import HealthArray from '../data/health_data.json';
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
      
      {HealthArray.map((data, i) => (
        <Box m={2} className={classes.PolicyBox} key={i}>
          <Policy open={open === i}  {...data} />
          
        </Box>
                      
      ))}
    </Box>

  );
}
export const cyrb53 = function(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
  h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1>>>0);
};