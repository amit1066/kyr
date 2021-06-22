import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import About from "./about";
import Notification from "./Notification";
import Links from "./Links";
import { makeStyles, withStyles, createMuiTheme, ThemeProvider, fade } from '@material-ui/core/styles';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";


import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import mostSearchedArray from '../../data/mostSearched.json'
import '../../App.css';
import Slide from '@material-ui/core/Slide';
import MostSearchedDialog from "./mostSearchedDialog";

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
        [theme.breakpoints.down('sm')]: {
            minWidth: "180px",
        },

    },
    tilebar: {
        backgroundColor: "#100a33",
        marginBottom: "2px"

    },
    ReadButton: {
        backgroundColor: '#6d08a0',
        textPrimary: 'white',

    },
    
    title: {
        color: theme.palette.primary.light,
    },
}));

const ReadButton = withStyles({
    root: {
        backgroundColor: '#6d08a0',
        color: 'white',
    }
})(Button);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


/*function FullScreenDialog() {
    const [open, setOpen] = React.useState(false);
}
    const handleClickOpen = (thisTab) => {
  
      setOpen(thisTab);
    };
    const classes = useStyles2();
    const handleClose = () => {
      setOpen(false);
    };*/

function SingleLineGridList() {
    const classes = useStyles2();
    var i = 1;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (i) => ( // this function returns a function that opens up a particular full screen dialog
        () => {
            setOpen(i); // 'i' represents the tab number to open up when clicked
        }
    )
        ;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {mostSearchedArray.map((data) => (
                    <GridListTile key={i} className={classes.tile}>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Typography className={classes.cardtitle} color="textSecondary" gutterBottom>
                                    #{i++}
                                </Typography>
                                <Typography >
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
                                <MostSearchedDialog data={data.data} hc={handleClickOpen(i)} open={open === i} handleClose={handleClose} />


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
        padding: "1px 6px",
    },
    // SubscribeNow: {
    //     backgroundColor: "#100a33",
    //     color: "white",
    //     padding: "1.5rem",
    // },
    SubscribeNow: {
        paddingTop: 68,
        paddingBottom: 68,
        backgroundColor: "#100A33",
        borderRadius: 0,
        color: "white",
        [theme.breakpoints.down(800)]: {
          paddingTop: 30,
          paddingBottom: 30,
        },
      },
      navButtons: {
        color: "#ffffff",
        fontWeight: 600,
        fontSize: "20px",
        [theme.breakpoints.down(800)]: {
          lineHeight: "21px",
          fontSize: "12px",
        },
    },
    growButton: {
        "&:hover": {
            backgroundColor: "#FE8500",
        },
        borderRadius: 0,
        border: "1px solid #00ddb6",
        color: "#ffffff",
        textTransform: "none",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 45,
        paddingRight: 45,
        [theme.breakpoints.down(800)]: {
            display: "none",
        },
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
    Search: {
        backgroundColor: "white",
        marginRight: "10px",
        marginLeft: "auto",
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
            <Grid item container >
                <Grid item xs={12} >
                    <Notification />
                </Grid>
                <Grid item xs={false} sm={2} style={{ backgroundColor: "#fc9c31" }} />
                <Grid item xs={12} sm={8} className={classes.AboutUs}><About /></Grid>

                <Grid item xs={false} sm={2} style={{ backgroundColor: "#fc9c31" }} />

            </Grid>
            <Grid item container className={classes.MostSearched}>

                <Grid item sm={12} xs={12}>

                    <SingleLineGridList />
                </Grid>
                <Grid item xs={12} >
                    <Links />
                </Grid>

            </Grid>
            <Grid item container direction="row">
                <Grid item xs={3} />
                <Grid item xs={6} >
                    <h1 align='center' font='Calibri' >IMPORTANT CONTACTS</h1>
                </Grid>
                <Grid item xs={3} />
            </Grid>
            <Grid item container>
                <Grid item xs={12} sm={6} align='center' ><Paper elevation={3}  ><Button className={classes.Contacts}>Mr. X: 999999999</Button></Paper> </Grid>
                <Grid item xs={12} sm={6} align='center'><Paper elevation={3}><Button className={classes.Contacts}>Mr. X: 999999999</Button></Paper> </Grid>
                <Grid item xs={12} sm={6} align='center'><Paper elevation={3} ><Button className={classes.Contacts}>Mr. X: 999999999</Button></Paper> </Grid>
                <Grid item xs={12} sm={6} align='center'><Paper elevation={3}><Button className={classes.Contacts}>Mr. X: 999999999</Button></Paper> </Grid>
                <Grid item xs={12} sm={6} align='center'><Paper elevation={3} ><Button className={classes.Contacts}>Mr. X: 999999999</Button></Paper> </Grid>
                <Grid item xs={12} sm={6} align='center'><Paper elevation={3}><Button className={classes.Contacts}>Mr. X: 999999999</Button></Paper> </Grid>

                <Grid item xs={false} sm={2} />
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
                            <Button
                                variant="outlined"
                                disableElevation
                                className={classes.growButton}
                                endIcon={<ArrowForwardIcon />}

                            >
                                <Typography variant="body1" className={classes.navButtons}>
                                    Subscribe
                                </Typography>
                            </Button>
                        </ThemeProvider>
                    </form>
                </Grid>
            </Grid>
        </div>
    )

}

export default Home;