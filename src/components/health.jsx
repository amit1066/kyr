import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { GridList } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Rajiv Gandhi Shilpi Swasthya Bima Yojna
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            Rajiv Gandhi Shilpi Swasthya Bima Yojna
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              explore another policy
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem >
            <ListItemText primary="ABOUT:" secondary=" The scheme comes under the National Handicrafts Development Programme under
the section Ambedkar Hastshilp Vikas Yojna." />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="AIM:" secondary=" Rajiv Gandhi Shilpi Swasthya Bima Yojana is aimed towards providing financial aid to the
artisan community to access the best of healthcare facilities in the country." />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="ELIGIBILITY:" secondary="  All Craft persons( Handicraft artisans) whether male or female, between the age
group of one day to 80 years are eligible to avail the scheme." />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="BENEFITS OF SCHEME:" secondary="  table." />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="Pattern of Financial Assistance: "  secondary=" " xs={12}></ListItemText>
            <Divider/>
            <ListItemText>
<ol><li> GOI share = 75% of the total premium (90% in case of J and K and NER States) </li>
<li> *State’s share = 25% of the total premium (10% in case of J and K and NER States)
</li><li> Artisan’s share = Rs.30/- for registration</li>
*In case of non-consenting states, the State share will also be contributed by GOI.
(NOTE: Except for OPD, the scheme shall align with *RSBY in respect of remaining parameters
such as IP treatment and final limits decided per package for IP treatment by Ministry of Health
and Family Welfare (MoHFW).
</ol>
*RSBY- Rashtriya Swasthya Bima Yojana )" 
</ListItemText>
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="How to apply?: " secondary="

1. The artisans seeking enrollment under the scheme has to register with the Office of the
Development Commissioner (Handicrafts) for issuance of Identity Card.
2. If not registered as yet, then the artisan can file an application for issuance of I-Card to
the nearest Handicrafts Marketing & Service Extension Centre and can mention “Applied
For” in the application for enrollment under the Scheme.
3. Registration Fee of Rs. 30 to be paid by the artisan." />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="Planned hospitalization: " secondary="

a) A patient can go to any empanelled hospital/nursing homes of his/her choice. A list of such
hospitals will
be provided by insurance company.
b) The name of the patient/policy No./nature of ailment /the name of the hospital is to be
communicated to
insurance company or its representatives by the concerned empanelled hospitals/nursing
homes. A list of
insurance company's representatives (TPA)/ contact persons shall be provided by the insurance
company.
c) ID Cards to the artisans will be issued by the insurance company to the insured persons to
avail the
cashless facility. The details of insurance company or its representatives, phone numbers, help
line
numbers shall also be mentioned in the I.D. cards for ease of reference. Additionally the
empanelled
hospitals shall also fax an authorization form to the insurance company or its representatives on
their own.
insurance company or its representatives would give approval with 12 hours.
d) Patient would take the treatment, sign the bill and get discharged. No payment is to be made." />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="Emergency hospitalization: " secondary="
            
a) The patient can be rushed to any empanelled hospital.
b) ID card is to be produced to the hospital and the patient can avail the treatment.
Simultaneously, the
family can contact the of insurance company or its representatives (TPA) over help line and
submit
the pre-authorization form. The Insurance company or its authorized representatives (TPA) has
to fax
the approval to the hospital immediately.
c) Patient would take the treatment, sign the bill and get discharged. No payment is to be made.
NOTE: The beneficiary is also paid by the hospital Rs. 100 as transportation expense at the
time of the discharge. However, total transportation assistance cannot exceed Rs. 1000/- per
year.r enrollment under the Scheme.
3. Registration Fee of Rs. 30 to be paid by the artisan." />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary="Links: " secondary="

Official Website of Development Commissioner: http://handicrafts.nic.in/schemes.aspx
Official Website of Ministry of Textiles: http://texmin.nic.in/
Website to avail all the contact and address details related to Development Commmisioner and
Regional Offices & Handicrafts Service Center (HSC) :
http://www.handicrafts.gov.in/contactus.aspx
Official Website for RSBY information : http://www.rsby.gov.in/how_works.html" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
