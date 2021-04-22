import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
    color:"#fe8500",
  },
  grow: {
    flexGrow: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputInput:{
    padding: '1rem 1rem 0.5rem 2.5rem',
  },
  
  
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbarStyle: {
    //paddingBottom:"",
    backgroundColor: "#c5cbf5",
    
  }

}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.appbarStyle}>
        <Typography variant="h3" m="2rem" className={classes.typographyStyles}>
          KNOW YOUR RIGHTS
        </Typography>
        <a href="facebook.com">
          
          <FacebookIcon color="primary" fontSize="large"> </FacebookIcon>
        </a>
        <a href="twitter.com">

          <TwitterIcon color="primary" fontSize="large"></TwitterIcon>
        </a>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="         Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
