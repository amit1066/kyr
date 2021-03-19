


import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Tabs from "./Tabs";
import Search from "./Search";
import About from "./About";
import Notification from "./Notification";
import Links from "./Links";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";



const App = () => {
  return (
    <Grid container direction="column">
      <Grid item xs= {12}>
        <Header />
      </Grid>
      <Grid item xs= {12}>
        <Search />
      </Grid>
      <Grid item xs= {12}>
        <Tabs />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm ={2}/>
        <Grid item xs={12} sm = {8}><About /></Grid>
        
        <Grid item xs={0} sm ={2}/>
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          Content HERE 
        </Grid>
        <Grid item container direction= "row" bgcolor="blue">
          <Grid item xs={12} sm= {6}>
           < Notification />
          </Grid>
          <Grid item xs={12} sm= {6}>
            <Links />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      <Grid item container direction="row">
        <Grid item xs={3}/>
      <Grid item xs={6} alignItems="center">
        <h1 alignItems="center">CONTACT US</h1>
      </Grid>
      <Grid item xs={3}/>
      </Grid>
      <Grid item container direction= "row">
       
       <Grid item xs= {12} sm={6}>
         phone no:9999999999
       </Grid>
      
       <Grid item xs= {12} sm={6}>
       phone no:9999999999
       </Grid>
       
       <Grid item xs= {12} sm={6}>
       phone no:9999999999
       </Grid>
       <Grid item xs= {12} sm={6}>
       phone no: 9999999999
       </Grid>
       <Grid item xs= {12} sm={6}>
       phone no:9999999999
       </Grid>
       <Grid item xs= {12} sm={6}>
       phone no: 9999999999
       </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item xs={3}/>
      <Grid item xs={6} alignItems="center">
        <h1 alignItems="center">SUBSCRIBE NOW</h1>
        <h5>info</h5>
        <button>Click here(Redirects to feedback/subscription page)</button>
      </Grid>
      <Grid item xs={3}/>
      </Grid>
    </Grid>
  );
};

export default App;