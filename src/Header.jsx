import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import GavelIcon from '@material-ui/icons/Gavel';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  },
  appbarStyle: {
    paddingBottom:"",
    backgroundColor: "#c5cbf5",
    color:"#fe8500"
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
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
