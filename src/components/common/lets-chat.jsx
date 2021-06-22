import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  createStyles,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: 40,
      [theme.breakpoints.down(800)]: {
        padding: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
      },
    },
    title: {
      color: "#000000",
      fontWeight: 700,
      [theme.breakpoints.down(800)]: {
        fontSize: "20px",
      },
    },
    body: {
      color: "#000000",
      fontWeight: 400,
      [theme.breakpoints.down(800)]: {
        fontSize: "12px",
      },
    },
    grid: {
      paddingTop: 32,
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    grid2: {
      paddingTop: 24,
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
    },
    formControl: {
      width: "100%",
    },
    growWithUs: {
      color: "#ffffff",
      fontWeight: 600,
      [theme.breakpoints.down(800)]: {
        fontSize: "16px",
      },
    },
    growButton: {
      marginTop: 51,
      textTransform: "none",
      borderRadius: 0,
      border: "0px",
      backgroundColor: "#00ddb6",
      color: "#ffffff",
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 36,
      paddingRight: 36,
      maxWidth: 264,
      [theme.breakpoints.down(800)]: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 24,
      },
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
      "&:disabled": {
        color: "#ffffff",
      },
    },
    growButton2: {
      marginTop: 24,
      textTransform: "none",
      borderRadius: 0,
      border: "0px",
      backgroundColor: "#00ddb6",
      color: "#ffffff",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 91,
      paddingRight: 91,
      maxWidth: 264,
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
      "&:disabled": {
        color: "#ffffff",
      },
    },
  })
);

const LetsChat = ({
  isOpen,
  handleClose,
  emailID,
}) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const initialEmail = useMemo(() => {
    return emailID ?? "";
  }, [emailID]);
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  
  
  const [crux, setCrux] = useState("");
  const [email, setEmail] = useState(initialEmail);
  const isDisabled = useMemo(() => {
    return (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      crux === ""
      
    )
  }, [phone, email, firstName, lastName, crux]);

  const clearForm = useCallback(() => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    
  }, []);

  const handleSubmit = useCallback(() => {
    if (
      firstName === "" ||
      lastName === "" ||
      
      phone === ""
      
      
    ) {
      return;
    } else {
      const data = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        crux: crux,
        
      };
      fetch("https://random.com/lets_talk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.status === 200) {
          clearForm();
        } else {
          console.log(response);
        }
      });
    }
  }, [phone, clearForm, email, firstName, lastName, url]);

  useEffect(() => {
    setEmail(initialEmail);
  }, [initialEmail]);

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="lg">
      <Container maxWidth="xl" className={classes.root}>
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center"
          >
            <Typography variant="h2" className={classes.title}>
              Contact Us
            </Typography>
            <Box textAlign="left" display="flex" flexDirection="row-reverse">
              <IconButton onClick={handleClose} size="medium">
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" className={classes.body}>
              Please fill out the form below and a NSS team member will get
              back to you within 24 hours. We’re looking forward to hearing
              about your business.
            </Typography>
          </DialogContentText>
          <Grid container spacing={4} className={classes.grid}>
            <Grid item xs={6}>
              <TextField
                required
                id="first-name"
                label="First Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="last-name"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                
                id="email"
                label={"Email Address"}
                variant="outlined"
                fullWidth
                value={email === "" ? initialEmail : email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                
                id="url"
                label="Crux of what you want to communicate"
                variant="outlined"
                fullWidth
                value={crux}
                onChange={(e) => setCrux(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                
                id="url"
                label="Phone"
                variant="outlined"
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            
          </Grid>
          <Grid container spacing={2} className={classes.grid2}>
            <Grid item xs={12}>
              <TextField
                required
                id="first-name"
                label="First Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="last-name"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                label={"Email Address"}
                variant="outlined"
                fullWidth
                value={email === "" ? initialEmail : email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            
          </Grid>
        </DialogContent>
        <Box textAlign="left" display="flex" flexDirection="row-reverse">
          <Button
            variant="contained"
            disableElevation
            className={classes.growButton}
            endIcon={<ArrowForwardIcon />}
            disabled={isDisabled}
            onClick={handleSubmit}
          >
            <Typography variant="h6" className={classes.growWithUs}>
              Submit
            </Typography>
          </Button>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            disableElevation
            className={classes.growButton2}
            endIcon={<ArrowForwardIcon />}
            disabled={isDisabled}
            onClick={handleSubmit}
          >
            <Typography variant="h6" className={classes.growWithUs}>
              Submit
            </Typography>
          </Button>
        </Box>
      </Container>
    </Dialog>
  );
};

export default LetsChat;
