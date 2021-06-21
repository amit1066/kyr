import React, { useCallback, useState } from "react";

import {
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import LetsChat from "./lets-chat";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: 68,
      paddingBottom: 68,
      backgroundColor: "#100A33",
      borderRadius: 0,
      [theme.breakpoints.down(800)]: {
        paddingTop: 30,
        paddingBottom: 30,
      },
    },
    surgeIcon: {
      fontSize: "48px",
      color: "#ffffff",
      fontWeight: 600,
      paddingLeft: 8,
      [theme.breakpoints.down(800)]: {
        fontSize: "18px",
      },
    },
    navButtons: {
      color: "#ffffff",
      fontWeight: 600,
      fontSize: "20px",
      [theme.breakpoints.down(800)]: {
        lineHeight: "21px",
        fontSize: "12px",
      },
    },
    growButton: {
      "&:hover": {
        backgroundColor: "#FE8500",
      },
      borderRadius: 0,
      border: "1px solid #00ddb6",
      color: "#ffffff",
      textTransform: "none",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 45,
      paddingRight: 45,
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    dot: {
      fontSize: "48px",
      color: "#00ddb6",
      fontWeight: 600,
      [theme.breakpoints.down(800)]: {
        fontSize: "16px",
      },
    },
    hi: {
      color: "#ffffff",
      fontWeight: 600,
      fontSize: "20px",
      [theme.breakpoints.down(800)]: {
        lineHeight: "21px",
        fontSize: "12px",
      },
    },
  })
);

const Footer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <Paper elevation={0} className={classes.root}>
      <LetsChat isOpen={open} handleClose={handleClose} />
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="h4" className={classes.surgeIcon}>
              Know Your Rights
            </Typography>
            <Typography variant="h4" className={classes.dot}>
              .
            </Typography>
          </Box>
          <Typography variant="body1" className={classes.hi}>
            hi@nss.iitd
          </Typography>
          <Button
            variant="outlined"
            disableElevation
            className={classes.growButton}
            endIcon={<ArrowForwardIcon />}
            onClick={handleClickOpen}
          >
            <Typography variant="body1" className={classes.navButtons}>
              Contact Us
            </Typography>
          </Button>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
