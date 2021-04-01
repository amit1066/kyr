import React from "react";
import { makeStyles} from '@material-ui/core/styles';

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
        maxHeight: "1rem",
        padding: '0px',
        
    }
}));

const Educ = () => {
    const classes = useStyles();
    return (
        <div>
            That's it for now!
        </div>
    )

}

export default Educ;