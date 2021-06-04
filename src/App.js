import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import Header from "./components/common/header";
import Tabs from "./Tabs";
import Footer from "./components/common/footer";
import PolicyPage from "./components/policy_page";
import cyrb53 from "./components/common/hash";

import HealthArray from './data/health_data.json';
import MiscArray from './data/misc_data.json';
import EducArray from './data/education_data.json';
import EmploymentArray from './data/employment_data.json';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Policy from "./components/policy";



const useStyles = makeStyles((theme) => ({
  AboutUs: {
    backgroundColor: "#fc9c31",
    color: "white",
  },
  root: {
    height: "100vh",
    width: "100%"
  }
}));



const App = () => {
  const classes = useStyles();
 
  return (
    <Box flexDirection="column" display="flex" className={classes.root}>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Router>

              <Switch>
                {HealthArray.map((data, i) => (
                  <Route key={i} path={`/sandbox/Player/${cyrb53(data.title, 42)}`}>
                    <PolicyPage {...data} />
                  </Route>
                ))}
                {EmploymentArray.map((data, i) => (
                  <Route key={i+100} path={`/sandbox/Player/${cyrb53(data.title, 42)}`}>
                    <PolicyPage {...data} />
                  </Route>
                ))}
                {MiscArray.map((data, i) => (
                  <Route key={i+200} path={`/sandbox/Player/${cyrb53(data.title, 42)}`}>
                    <PolicyPage {...data} />
                  </Route>
                ))}
                {EducArray.map((data, i) => (
                  <Route key={i+300} path={`/sandbox/Player/${cyrb53(data.title, 42)}`}>
                    <PolicyPage {...data} />
                  </Route>
                ))}
                <Route path="*">
                  <Tabs />
                </Route>
              </Switch>
            </Router>

          </Grid>
        </Grid>
      </Box>
      <Box flexGrow={1} />
      <Box>
        <Footer style={{ width: '100vw' }} />
      </Box>
    </Box>
  );
};

export default App;
