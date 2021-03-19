import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Tabs from "./Tabs";
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
}));

const App = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs= {12}>
        <Header />
      </Grid>
      <Grid item xs= {12}> 
        <Tabs />
      </Grid>
      <Home/>
    </Grid>
  );
};

export default App;