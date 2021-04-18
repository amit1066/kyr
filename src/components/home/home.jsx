import React from "react";
import { Grid, Typography, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import About from "./about";
import MostSearched from "./mostSearched";
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
    }
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
            <Grid item container className={classes.MostSearched}>
                <Grid item sm={2} />
                <Grid item xs={12} sm={8} ><MostSearched  /></Grid>

                <Grid item   sm={2} />
            </Grid>
            <Grid item container className={classes.AboutUs}>
<<<<<<< HEAD
                <Grid item   sm={2} />
                <Grid item xs={12} sm={8} ><About  /></Grid>

                <Grid item   sm={2} />
=======
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

>>>>>>> 2b412c5c54440661ed536dfb7596e4345e5e36f9
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
<<<<<<< HEAD
                <Grid item xs={6}>
=======
                <Grid item xs={6} >
>>>>>>> 2b412c5c54440661ed536dfb7596e4345e5e36f9
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
<<<<<<< HEAD
            <Grid item container justify="center" style={{minHeight: '50vh'}} className={classes.SubscribeNow}>
                <Grid item  justify="center" a>
=======
            <Grid item container justify="center" style={{ minHeight: '50vh' }} className={classes.SubscribeNow}>
                <Grid item >
>>>>>>> 2b412c5c54440661ed536dfb7596e4345e5e36f9
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