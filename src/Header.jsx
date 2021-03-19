import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import GavelIcon from '@material-ui/icons/Gavel';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Know Your Rights
        </Typography>
        <GavelIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
