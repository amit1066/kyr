import React from "react";
import { Grid, Typography } from "@material-ui/core";
import About from "./home/about";
import Notification from "./home/Notification";
import Links from "./home/Links";
import { makeStyles, createMuiTheme, ThemeProvider, fade } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    AboutUs: {
        backgroundColor: "#ededed",
        width: "80%",
        marginLeft: "10%",
        margin: "50px",
        padding: "50px",
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
            <Grid item container alignItems="left" justify="center" style={{
                flexGrow: 1,
            }} className={classes.SubscribeNow}>
                <Grid item spacing={0} justify="center" alignItems="center">
                    <Typography variant="h4" gutterBottom> Feedback Form</Typography>
                    <form className={classes.root} noValidate>
                        <ThemeProvider theme={theme}>
                            <Grid item container>
                                <RedditTextField
                                    label="Name"
                                    className={classes.margin}
                                    default-value=""
                                    variant="filled"
                                    id="email"
                                />
                            </Grid>
                            <Grid item container>
                                <RedditTextField
                                    label="Email"
                                    className={classes.margin}
                                    default-value=""
                                    variant="filled"
                                    id="email"
                                />
                            </Grid>
                            <Grid item container>
                                <RedditTextField
                                    label="Comments"
                                    className={classes.margin}
                                    default-value=""
                                    variant="filled"
                                    id="email"
                                />
                            </Grid>
                            <Grid item container>
                                <Button variant="contained" color="primary" size="small" classes={classes.button}>
                                    Send Feedback
                                </Button>
                            </Grid>
                        </ThemeProvider>
                    </form>
                </Grid>
            </Grid>

        </div>
    )

}

export default Home;