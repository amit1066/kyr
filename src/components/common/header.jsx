import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Link } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Autocomplete } from "@material-ui/lab";
import TextField from '@material-ui/core/TextField';


import cyrb53 from "./hash";
import HealthArray from '../../data/health_data.json';
import MiscArray from '../../data/misc_data.json';
import EducArray from '../../data/education_data.json';
import EmploymentArray from '../../data/employment_data.json';


const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
    color: "#fe8500",
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
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
    }
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '85%',
    [theme.breakpoints.up('xl')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

  root: {
    flexGrow: 1,
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
    paddingRight: "0px",
    backgroundColor: "#c5cbf5",

  }

}));

const Header = () => {
  const classes = useStyles();
  let allPolicies = HealthArray.concat(MiscArray, EducArray, EmploymentArray);


  return (
    <div className={classes.root} >

      <AppBar position="static">
        <Toolbar className={classes.appbarStyle}>
          <Box flexWrap="wrap" display="flex" flexGrow={1}>
            <Box>
              <Typography variant="h3" m="2rem" className={classes.typographyStyles}>
                KNOW YOUR RIGHTS 
              </Typography>
            </Box>
            <Box flexGrow={6}/>
            <Box alignSelf="center">
              <a href="https://www.facebook.com">
                <FacebookIcon color="primary" fontSize="large"> </FacebookIcon>
              </a>
              <a href="https://www.twitter.com">
                <TwitterIcon color="primary" fontSize="large"></TwitterIcon>
              </a>
            </Box>

            <Box flexGrow={3} alignSelf="center" >
              
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <Router>

                  <Autocomplete 
                    className = {classes.inputInput}
                    freeSolo
                    getOptionLabel = {(policy) => policy.title}
                    options={allPolicies}
                    id="auto-select"
                    autoSelect
                    renderOption={
                      (policy) => 
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            window.location.href = cyrb53(policy.title, 42);
                            console.log(policy.title);
                          }}
                        >
                          {policy.title}
                        </span>
                      

                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search"
                        
                      />
                    )}
                  />
                </Router>
              </div>

            </Box>
          </Box>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
