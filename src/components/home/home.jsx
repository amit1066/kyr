import React from "react";
import { Grid, Typography } from "@material-ui/core";
import About from "./about";
import MostSearched from "./mostSearched";
import Notification from "./Notification";
import Links from "./Links";
import { makeStyles, createMuiTheme, ThemeProvider, fade } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    AboutUs: {
        backgroundColor: "#fc9c31",
        color: "white",
    },
    MostSearched: {
        backgroundColor: "#ECF0FF",
    },
    SubscribeNow: {
        backgroundColor: "#100a33",
        color: "white",
        padding: "1.5rem",
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
        backgroundColor: "white",
    },
    button: {
        display: 'inline-block',
        maxHeight: "1rem",
        padding: '0px',
        
    }
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
    overrides: {
        MuiButton: {
          root: {
            margin: "5px",
            padding: "2px"
          }
        }
    }
});
// copied this style of text fields from https://material-ui.com/components/text-fields/ react reddit field
const useStylesReddit = makeStyles((theme) => ({ 
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 5,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
    focused: {},
}));
  
function RedditTextField(props) {
    const classes = useStylesReddit();
  
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item container className={classes.MostSearched}>
                <Grid item sm={2} />
                <Grid item xs={12} sm={8} ><MostSearched  /></Grid>

                <Grid item   sm={2} />
            </Grid>
            <Grid item container className={classes.AboutUs}>
                <Grid item   sm={2} />
                <Grid item xs={12} sm={8} ><About  /></Grid>

                <Grid item   sm={2} />
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
                <Grid item xs={6}>
                    <h1 >CONTACT US</h1>
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
            <Grid item container justify="center" style={{minHeight: '50vh'}} className={classes.SubscribeNow}>
                <Grid item  justify="center" a>
                    <Typography variant="h4" gutterBottom> SUBSCRIBE NOW!</Typography>
                    <Typography variant="h5" gutterBottom>ENTER YOUR EMAIL ADDRESS TO GET UPDATES!</Typography>
                    <form className={classes.root} noValidate>
                        <ThemeProvider theme={theme}>
                            <RedditTextField
                                label="Email"
                                className={classes.margin}
                                default-value=""
                                variant="filled"
                                id="email"
                            />
                            <Button variant="contained" color="primary" size="small" classes={classes.button}>
                                Subscribe
                            </Button>
                        </ThemeProvider>
                    </form>
                </Grid> 
            </Grid>
        </div>
    )

}

export default Home;