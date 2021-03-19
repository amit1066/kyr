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
  const [businessName, setBusinessName] = useState("");
  const [url, setUrl] = useState("");
  const [revenue, setRevenue] = useState("");
  const [updates, setUpdates] = useState(false);
  const [email, setEmail] = useState(initialEmail);
  const isDisabled = useMemo(() => {
    return (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      businessName === "" ||
      url === "" ||
      revenue === ""
    );
  }, [businessName, email, firstName, lastName, revenue, url]);

  const clearForm = useCallback(() => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setBusinessName("");
    setRevenue("");
    setUrl("");
    setUpdates(false);
  }, []);

  const handleSubmit = useCallback(() => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      businessName === "" ||
      url === "" ||
      revenue === ""
    ) {
      return;
    } else {
      const data = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        business_name: businessName,
        url: url,
        annual_revenue: revenue,
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
  }, [businessName, clearForm, email, firstName, lastName, revenue, url]);

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
              Let's chat.
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
                required
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
                required
                id="business-name"
                label="Business Name"
                variant="outlined"
                fullWidth
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Total Annual Revenue *</InputLabel>
                <Select
                  id="revenue"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  fullWidth
                >
                  <MenuItem value={"<50Lakh"} className={classes.formControl}>
                    Less than INR 50 Lakhs
                  </MenuItem>
                  <MenuItem
                    value={"50Lakh-1Cr"}
                    className={classes.formControl}
                  >
                    INR 50 Lakhs - INR 1 Cr
                  </MenuItem>
                  <MenuItem value={"1-2Cr"} className={classes.formControl}>
                    INR 1 Cr - INR 2 Cr
                  </MenuItem>
                  <MenuItem value={"2-3Cr"} className={classes.formControl}>
                    INR 2 Cr - INR 3 Cr
                  </MenuItem>
                  <MenuItem value={">3Cr"} className={classes.formControl}>
                    More than INR 3 Cr
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="url"
                label="Storefront URL"
                variant="outlined"
                fullWidth
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={updates}
                    onChange={(e) => setUpdates(e.target.checked)}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body1" className={classes.body}>
                    Yes, I want to receive content, VIP event invites, and more
                    information from NSS. You can unsubscribe anytime.
                  </Typography>
                }
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
            <Grid item xs={12}>
              <TextField
                required
                id="business-name"
                label="Business Name"
                variant="outlined"
                fullWidth
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel>Total Annual Revenue *</InputLabel>
                <Select
                  id="revenue"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  fullWidth
                >
                  <MenuItem value={"<50Lakh"} className={classes.formControl}>
                    Less than INR 50 Lakhs
                  </MenuItem>
                  <MenuItem
                    value={"50Lakh-1Cr"}
                    className={classes.formControl}
                  >
                    INR 50 Lakhs - INR 1 Cr
                  </MenuItem>
                  <MenuItem value={"1-2Cr"} className={classes.formControl}>
                    INR 1 Cr - INR 2 Cr
                  </MenuItem>
                  <MenuItem value={"2-3Cr"} className={classes.formControl}>
                    INR 2 Cr - INR 3 Cr
                  </MenuItem>
                  <MenuItem value={">3Cr"} className={classes.formControl}>
                    More than INR 3 Cr
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="url"
                label="Storefront URL"
                variant="outlined"
                fullWidth
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={updates}
                    onChange={(e) => setUpdates(e.target.checked)}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body1" className={classes.body}>
                    Yes, I want to receive content and more information from
                    NSS. You can unsubscribe anytime.
                  </Typography>
                }
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
