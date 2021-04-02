import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import About from "./about";
import Notification from "./Notification";
import Links from "./Links";
import { makeStyles, createMuiTheme, ThemeProvider, fade } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    AboutUs: {
        backgroundColor: "#CFD5FA",
    width: "80%",
    marginLeft: "10%",
    margin: "50px",
    padding: "50px",
    },
    Policy: {
        backgroundColor: "#CFD5FA",
        overflow: "visible"
    },
    ReadMoreButton: {
        backgroundColor: "white",
        
        '&:hover': {
            backgroundColor: "#100A33",
            border: "white 0.25rem",
            color: "white"
        },
        'bottom': "-30px",
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
function Policy(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.Policy}>
        <CardContent>
          <Typography className={classes.title} variant="h2" color="textSecondary" style={{textAlign: "center"}} gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="h5" component="h2" color = "textSecondary">
            {props.subtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {props.short_text}
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: "center"}}>
          <Button size="small" variant="outlined" className={classes.ReadMoreButton}> Read More</Button>
        </CardActions>
      </Card>
    );
  }
const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item container >
                <Grid item xs={0} sm={2} />
          <Grid item xs={5} sm={4}  style={{ margin: "20px" }}>
            <Policy title="POLICY #1" subtitle="subtitle" short_text="lorem ipsum" />
                </Grid>
          <Grid item xs={5} sm={4} className={classes.AboutUs} style={{ margin: "20px" }} >
            
            <h1>Policy #2 </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec eros sit amet velit mollis laoreet ut vel est. Praesent porta elementum ante, viverra efficitur mi consectetur quis. Donec luctus condimentum magna vel gravida. Suspendisse lectus massa, vestibulum et nibh at, ultricies finibus enim. Sed sed nunc metus. Vivamus vel elit blandit, fringilla magna a, vestibulum ipsum. Aenean et pretium augue. Donec quis dolor eget ante ultricies posuere at eu turpis. Proin suscipit augue, sed rhoncus massa. Maecenas consequat eu magna non pharetra. Aliquam erat volutpat. Donec lobortis tellus id ornare pulvinar. V
                </Grid>

                <Grid item xs={0} sm={2} />
        </Grid>
        <Grid item container >
                <Grid item xs={0} sm={2} />
          <Grid item xs={5} sm={4} className={classes.AboutUs} style={{ margin: "20px" }}>
            
            <h1>Policy #3 </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec eros sit amet velit mollis laoreet ut vel est. Praesent porta elementum ante, viverra efficitur mi consectetur quis. Donec luctus condimentum magna vel gravida. Suspendisse lectus massa, vestibulum et nibh at, ultricies finibus enim. Sed sed nunc metus. Vivamus vel elit blandit, fringilla magna a, vestibulum ipsum. Aenean et pretium augue. Donec quis dolor eget ante ultricies posuere at eu turpis. Proin suscipit augue, sed rhoncus massa. Maecenas consequat eu magna non pharetra. Aliquam erat volutpat. Donec lobortis tellus id ornare pulvinar. V
                </Grid>
          <Grid item xs={5} sm={4} className={classes.AboutUs} style={{ margin: "20px" }} >
            
            <h1>Policy #4 </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec eros sit amet velit mollis laoreet ut vel est. Praesent porta elementum ante, viverra efficitur mi consectetur quis. Donec luctus condimentum magna vel gravida. Suspendisse lectus massa, vestibulum et nibh at, ultricies finibus enim. Sed sed nunc metus. Vivamus vel elit blandit, fringilla magna a, vestibulum ipsum. Aenean et pretium augue. Donec quis dolor eget ante ultricies posuere at eu turpis. Proin suscipit augue, sed rhoncus massa. Maecenas consequat eu magna non pharetra. Aliquam erat volutpat. Donec lobortis tellus id ornare pulvinar. V
                </Grid>

                <Grid item xs={0} sm={2} />
        </Grid>
           
        </div>
    )

}

export default Home;