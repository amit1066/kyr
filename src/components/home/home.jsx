import React from "react";
import { Grid, Typography } from "@material-ui/core";
import About from "./about";
import Notification from "./Notification";
import Links from "./Links";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    AboutUs: {
        backgroundColor: "#fc9c31",
        color: "white",
    },
    SubscribeNow: {
        backgroundColor: "#100a33",
        color: "white",
        padding: "1.5rem",
    },
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item container className={classes.AboutUs}>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8}><About /></Grid>

                <Grid item xs={0} sm={2} />
            </Grid>
            <Grid item container>
                <Grid item xs={12} sm={6}>
                    <Notification />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Links />
                </Grid>
            </Grid>
            <Grid item container direction="row">
                <Grid item xs={3} />
                <Grid item xs={6} alignItems="center">
                    <h1 alignItems="center">CONTACT US</h1>
                </Grid>
                <Grid item xs={3} />
            </Grid>
            <Grid item container direction="row">

                <Grid item xs={12} sm={6}>
                    phone no:9999999999
                 </Grid>

                <Grid item xs={12} sm={6}>
                    phone no:9999999999
                </Grid>

                <Grid item xs={12} sm={6}>
                    phone no:9999999999
                </Grid>
                <Grid item xs={12} sm={6}>
                    phone no: 9999999999
                </Grid>
                <Grid item xs={12} sm={6}>
                    phone no:9999999999
                </Grid>
                <Grid item xs={12} sm={6}>
                    phone no: 9999999999
                </Grid>
            </Grid>
            <Grid item container alignItems="left" justify="center" style={{minHeight: '50vh'}} className={classes.SubscribeNow}>
                <Grid item spacing={0} justify="center" alignItems="center">

                    <Typography variant="h4" gutterBottom> SUBSCRIBE NOW!</Typography>
                    <Typography variant="h5" gutterBottom>ENTER YOUR EMAIL ADDRESS TO GET UPDATES!</Typography>
                </Grid> 
            </Grid>
        </div>
    )

}

export default Home;