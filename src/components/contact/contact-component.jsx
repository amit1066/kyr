import React, { useCallback, useState } from "react";

import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import {
  FadeInSectionBottom,
  FadeInSectionLeft,
  FadeInSectionRight,
  FadeInSectionTop,
} from "../common/fadeIn";
import LetsChat from "../common/lets-chat";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingBottom: 70,
      borderRadius: 0,
      paddingLeft: 60,
      [theme.breakpoints.down(800)]: {
        paddingLeft: 0,
      },
    },
    container: {
      paddingTop: 97,
      backgroundColor: "rgba(0, 221, 182, 0.05)",
      paddingBottom: 140,
      position: "relative",
      [theme.breakpoints.down(800)]: {
        paddingLeft: 0,
        paddingBottom: 44,
      },
    },
    line: {
      height: "3px",
      width: 80,
      backgroundColor: "#00ddb6",
      marginTop: 35,
      "@media (max-width: 1280px)": {
        width: "90px",
        marginTop: 15,
      },
    },
    nextLevel: {
      color: "#0e172a",
      fontWeight: 700,
      [theme.breakpoints.down(800)]: {
        fontSize: "25px",
        lineHeight: "35px",
      },
    },
    description: {
      marginLeft: 50,
      [theme.breakpoints.down(800)]: {
        marginLeft: 24,
      },
    },
    caption: {
      color: "rgba(14,23,42,1)",
      fontWeight: 400,
      paddingTop: 48,
      [theme.breakpoints.down(800)]: {
        paddingTop: 24,
        fontSize: "12px",
        lineHeight: "24px",
      },
    },
    caption2: {
      color: "rgba(14,23,42,1)",
      fontWeight: 400,
    },
    boxDescription: {
      maxWidth: "50%",
      marginTop: 45,
      zIndex: 100,
    },
    growWithUs: {
      color: "#ffffff",
      fontWeight: 600,
      [theme.breakpoints.down(800)]: {
        fontSize: "12px",
      },
    },
    growButton: {
      marginTop: 48,
      textTransform: "none",
      borderRadius: 0,
      border: "0px",
      backgroundColor: "#00ddb6",
      color: "#ffffff",
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 45,
      paddingRight: 45,
      maxWidth: 264,
      [theme.breakpoints.down(800)]: {
        marginTop: 24,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
    grid: {
      paddingTop: 180,
      zIndex: 100,
      "@media (max-width: 1280px)": {
        paddingTop: 100,
      },
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    grid2: {
      paddingTop: 54,
      zIndex: 100,
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
      paddingLeft: 40,
      paddingRight: 30,
    },
    heading: {
      color: "#000000",
      fontWeight: 500,
      paddingBottom: 60,
    },
    heading2: {
      color: "#000000",
      fontWeight: 600,
      paddingLeft: 24,
    },
    body: {
      color: "#000000",
      fontWeight: 700,
      paddingTop: 60,
    },
    gridBox: {
      backgroundColor: "#ffffff",
      paddingTop: 28,
      paddingBottom: 32,
      "@media (max-width: 1280px)": {
        paddingLeft: 20,
        paddingRight: 20,
        minHeight: 400,
      },
      boxShadow: "0px 0px 115px rgba(13, 16, 37, 0.06)",
      borderRadius: "3px",
    },
    image2: {
      position: "absolute",
      left: -60,
      top: 150,
      "@media (max-width: 1350px)": {
        height: 580,
        width: 580,
      },
      "@media (max-width: 1200px)": {
        height: 500,
        width: 500,
      },
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    image1: {
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
      marginTop: 32,
    },
    gridItem: {
      zIndex: 100,
    },
    box: {
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    box2: {
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
    },
    imgContainer: {
      textAlign: "center",
    },
  })
);

const PlatformSellers = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <Paper className={classes.root} elevation={0}>
      <LetsChat isOpen={open} handleClose={handleClose} />
      <Container className={classes.container} maxWidth="xl">
        <Box
          display="flex"
          flexDirection="row-reverse"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.box}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            pt={2}
            className={classes.boxDescription}
          >
            <Box className={classes.line} />
            <Box className={classes.description}>
              <FadeInSectionRight>
                <Typography variant="h2" className={classes.nextLevel}>
                  A platform for sellers by sellers
                </Typography>
              </FadeInSectionRight>
              <Typography variant="body1" className={classes.caption}>
                With the right tools, technology and team, your brand can
              </Typography>
              <Typography variant="body1" className={classes.caption2}>
                grow faster than ever before.
              </Typography>
              <Button
                variant="contained"
                disableElevation
                className={classes.growButton}
                endIcon={<ArrowForwardIcon />}
                onClick={handleClickOpen}
              >
                <Typography variant="h6" className={classes.growWithUs}>
                  Grow with us
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.box2}
        >
          <Box className={classes.line} />
          <Box className={classes.description}>
            <Typography variant="h2" className={classes.nextLevel}>
              A platform for sellers by sellers
            </Typography>
            <Typography variant="body1" className={classes.caption}>
              With the right tools, technology and team, your brand can grow
              faster than ever before.
            </Typography>
            <Button
              variant="contained"
              disableElevation
              className={classes.growButton}
              endIcon={<ArrowForwardIcon />}
              onClick={handleClickOpen}
            >
              <Typography variant="h6" className={classes.growWithUs}>
                Grow with us
              </Typography>
            </Button>
          </Box>
        </Box>
        <div className={classes.imgContainer}>
        </div>
        <Grid container spacing={4} className={classes.grid}>
          <Grid item xs={3} className={classes.gridItem} />
          <Grid item xs={3} className={classes.gridItem}>
            <FadeInSectionLeft>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                textAlign="center"
                className={classes.gridBox}
              >
                <Typography variant="h6" className={classes.heading}>
                  INCREASED REVENUE
                </Typography>
                <Typography variant="h2" className={classes.body}>
                  156%
                </Typography>
              </Box>
            </FadeInSectionLeft>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <FadeInSectionTop>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                textAlign="center"
                className={classes.gridBox}
              >
                <Typography variant="h6" className={classes.heading}>
                  TOP FBA SELLER
                </Typography>
                <Typography variant="h2" className={classes.body}>
                  0.01%
                </Typography>
              </Box>
            </FadeInSectionTop>
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <FadeInSectionBottom>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                textAlign="center"
                className={classes.gridBox}
              >
                <Typography variant="h6" className={classes.heading}>
                  IMPROVED SELLER RANK
                </Typography>
                <Typography variant="h2" className={classes.body}>
                  7.5%
                </Typography>
              </Box>
            </FadeInSectionBottom>
          </Grid>
        </Grid>
        <Grid container spacing={4} className={classes.grid2}>
          <Grid item xs={12} className={classes.gridItem}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              className={classes.gridBox}
            >
              <Typography variant="h6" className={classes.heading}>
                INCREASED REVENUE
              </Typography>
              <Typography variant="h2" className={classes.body}>
                156%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              className={classes.gridBox}
            >
              <Typography variant="h6" className={classes.heading}>
                TOP FBA SELLER
              </Typography>
              <Typography variant="h2" className={classes.body}>
                0.01%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
              className={classes.gridBox}
            >
              <Typography variant="h6" className={classes.heading}>
                IMPROVED SELLER RANK
              </Typography>
              <Typography variant="h2" className={classes.body}>
                7.5%
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default PlatformSellers;
