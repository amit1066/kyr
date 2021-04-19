import React from "react";
import { Grid, Typography, InputBase, Paper } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import About from "./about";
import Notification from "./Notification";
import Links from "./Links";
import { makeStyles, createMuiTheme, ThemeProvider, fade } from '@material-ui/core/styles';

import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import mostSearchedArray from '../../data/mostSearched.json'
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import contact from './contact';
import '../../App.css';
import {
    FadeInSectionBottom,
    FadeInSectionLeft,
    FadeInSectionRight,
    FadeInSectionTop,
  } from "../common/fadeIn";


const useStyles2 = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    card: {
        minWidth: 200,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    cardtitle: {
        fontSize: 14,
    },
    tile: {
        maxWidth: "15vw",
    },
    ReadButton: {
        '&:hover': {
            backGroundColor: "#5409bc",
        },
        color: "white",
    },
    tilebar: {
        backgroundColor: "#100a33",

    },
    title: {
        color: theme.palette.primary.light,
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function SingleLineGridList() {
    const classes = useStyles2();
    var i = 1;
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {mostSearchedArray.map((data) => (
                    <GridListTile key={data.id} className={classes.tile}>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Typography className={classes.cardtitle} color="textSecondary" gutterBottom>
                                    #{i++}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {data.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    {data.text}
                                </Typography>
                                <br />
                            </CardContent>
                        </Card>
                        <GridListTileBar
                            className={classes.tilebar}
                            actionIcon={
                                <Button> Read </Button>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}


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
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
        backgroundColor: "white",
    },
    button: {
        display: 'inline-block',
        padding: '0px 4px 0px 4px',
        maxHeight: "70px",

    },
    MostSearched: {
        backgroundColor: "#ECF0FF",
        minHeight: "5rem",
        padding: "1rem",
    },
    Search:{
        backGroundColor: "white",
        marginRight: "10px",
    },
    Contacts: {
        backgroundColor: "#CFD5FA",
        overflow: "visible",
        borderRadius: 3,
        height: 48,
        padding: '0 30px',
      },
}));

const useStylesSearch = makeStyles((theme) => ({
    inputRoot: {
        backgroundColor: "#fff",
        '&:hover': {
            borderRadius: 5,
            borderColor: "#3300CC",
        }
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
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}><About /></Grid>

                <Grid item xs={false} sm={2} />
            </Grid>
            <Grid item container className={classes.MostSearched}>
                <Grid item sm={2} xs={3}>
                    <Autocomplete
                        className={classes.Search}
                        id="free-solo-demo"
                        freeSolo
                        options={mostSearchedArray.map((policy) => policy.title)}
                        renderInput={(params) => (
                            <TextField {...params} label="Search" margin="normal" variant="outlined" />
                        )}
                    />
                </Grid>
                <Grid item sm={10} xs={9}>

                    <SingleLineGridList />
                </Grid>

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
                <Grid item xs={6} >
                    <h1 align='center' font='Calibri' >CONTACT US</h1>
                </Grid>
                <Grid item xs={3} />
            </Grid>
            <Grid item container >
                <Grid item xs={12} sm={6} align='center'><Button className={classes.Contacts}>Mr. X: 999999999</Button></Grid>
                <Grid item xs={12} sm={6} align='center'><Button className={classes.Contacts}>Mr. X: 999999999</Button></Grid>
                <Grid item xs={12} sm={6} align='center'><Button className={classes.Contacts}>Mr. X: 999999999</Button></Grid>
                <Grid item xs={12} sm={6} align='center'><Button className={classes.Contacts}>Mr. X: 999999999</Button></Grid>
                <Grid item xs={12} sm={6} align='center'><Button className={classes.Contacts}>Mr. X: 999999999</Button></Grid>
                <Grid item xs={12} sm={6} align='center'><Button className={classes.Contacts}>Mr. X: 999999999</Button></Grid>
        
        <Grid item  xs={false} sm={2} />
      </Grid>
            <Grid item xs={4}>
            <FadeInSectionRight>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  pt={10}
                  width="100%"
                  pl={5}
                  
                >
                  <Typography variant="h5" className={classes.heading}>
                    Email address:
                  </Typography>
                </Box>
                <Typography variant="body1" className={classes.body}>
                  kyr@gmail.com
                </Typography>
              </Box>
            </FadeInSectionRight>
          </Grid>
            
           
            <Grid item container justify="center" style={{ minHeight: '50vh' }} className={classes.SubscribeNow}>
                <Grid item >
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
                            <Button variant="contained" color="primary" size="small" className={classes.button}>
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