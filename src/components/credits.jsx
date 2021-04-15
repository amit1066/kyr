import React from "react";
import { Grid, Typography } from "@material-ui/core";
import About from "./about";
import Notification from "./Notification";
import Links from "./Links";
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
            <Grid item container className={classes.AboutUs}>
                <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            
            <h1>Team Of the Project </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec eros sit amet velit mollis laoreet ut vel est. Praesent porta elementum ante, viverra efficitur mi consectetur quis. Donec luctus condimentum magna vel gravida. Suspendisse lectus massa, vestibulum et nibh at, ultricies finibus enim. Sed sed nunc metus. Vivamus vel elit blandit, fringilla magna a, vestibulum ipsum. Aenean et pretium augue. Donec quis dolor eget ante ultricies posuere at eu turpis. Proin suscipit augue, sed rhoncus massa. Maecenas consequat eu magna non pharetra. Aliquam erat volutpat. Donec lobortis tellus id ornare pulvinar. V
                </Grid>

                <Grid item xs={0} sm={2} />
        </Grid>
        <Grid item container className={classes.AboutUs}>
               <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <h1>Developers</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec eros sit amet velit mollis laoreet ut vel est. Praesent porta elementum ante, viverra efficitur mi consectetur quis. Donec luctus condimentum magna vel gravida. Suspendisse lectus massa, vestibulum et nibh at, ultricies finibus enim. Sed sed nunc metus. Vivamus vel elit blandit, fringilla magna a, vestibulum ipsum. Aenean et pretium augue. Donec quis dolor eget ante ultricies posuere at eu turpis. Proin suscipit augue, sed rhoncus massa. Maecenas consequat eu magna non pharetra. Aliquam erat volutpat. Donec lobortis tellus id ornare pulvinar. V
                </Grid>

                <Grid item xs={0} sm={2} />
            </Grid>
           
        </div>
    )

}

export default Home;