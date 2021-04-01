import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import Header from "./Header";
import Tabs from "./Tabs";
import Footer from "./components/common/footer"
import Search from "./Search";
import About from "./About";
import Home from "./components/home/home.jsx";


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  AboutUs: {
    backgroundColor: "#fc9c31",
    color: "white",
  },
  root: {
    height: "100vh",
    width: "100%"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
      <Box flexDirection="column" display="flex" className={classes.root}>
        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Tabs />
            </Grid>
          </Grid>
        </Box>
        <Box flexGrow={1}/>
        <Box>
          <Footer style={{width: '100vw'}}/>
        </Box>
      </Box>
  );
};

export default App;