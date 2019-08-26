import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";
import Navbar from "./Navbar";
import QuickIntro from "./QuickIntro";
import Footer from "./Footer";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  root: {
    color: "white",
    textAlign: "center",
    marginBottom: theme.spacing(6)
  },
  lowerSpace: {
    color: "white",
    textAlign: "center",
    marginBottom: theme.spacing(2)
  },
  button: {
    color: "white",
    borderColor: "white",
    margin: theme.spacing(1)
  },
  paperContainer: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.48),rgba(0, 0, 0, 0.48)), url(./images/landing_pi.jpg)",
    minHeight: "100vh",
    width: "auto",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
  fab: {
    marginBottom: theme.spacing(5)
  }
}));

function userScroll() {
  window.location = "#scrollDown";
}

function About() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.paperContainer} style={{ borderRadius: 0 }}>
        <Slide direction="down" in={true}>
          <div>
            <Navbar fillColor={"none"} nowActive="Home" />
          </div>
        </Slide>
        <Grid item container alignItems="center" justify="center" xs={12}>
          <Grid item container xs={6}>
            <Grow
              in={true}
              mountOnEnter
              unmountOnExit
              {...(true ? { timeout: 2000 } : {})}
            >
              <Typography
                className={classes.lowerSpace}
                variant="h3"
                color="inherit"
              >
                Hello! I'm Daniel, a Masters' student at the University of
                Bristol.
              </Typography>
            </Grow>
            <Grow
              in={true}
              mountOnEnter
              unmountOnExit
              {...(true ? { timeout: 2500 } : {})}
            >
              <Typography className={classes.root} variant="h6">
                Use this website to find out more about my professional
                interests, experience, and projects!
              </Typography>
            </Grow>
            <Grow
              in={true}
              mountOnEnter
              unmountOnExit
              {...(true ? { timeout: 2500 } : {})}
            >
              <Grid xs={12} justify="center" item container>
                <Button
                  variant="outlined"
                  size="large"
                  className={classes.button}
                  to={"/projects"}
                  component={Link}
                >
                  Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className={classes.button}
                  to={"/contact"}
                  component={Link}
                >
                  Contact
                </Button>
              </Grid>
            </Grow>
          </Grid>
        </Grid>
        <Slide direction="up" in={true}>
          <Grid item container xs={12} justify="center">
            <Fab
              color="default"
              aria-label="Add"
              className={classes.fab}
              onClick={userScroll}
            >
              <KeyboardArrowDown fontSize="large" />
            </Fab>
          </Grid>
        </Slide>
      </div>
      <QuickIntro />
      <Footer backgroundColor="#343a40" color="white" />
    </ThemeProvider>
  );
}

export default About;
