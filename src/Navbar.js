import { Link } from "react-router-dom";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

const styles = theme => ({
  extraPadded: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  noBorder: {
    border: "none !important",
    boxShadow: "none"
  }
});

function Navbar({ nowActive, fillColor, classes }) {
  const myScreens = ["Home", "Projects", "Contact"];
  const [value, setValue] = React.useState(myScreens.indexOf(nowActive));

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const renderLinks = myScreens.map(function(v, k) {
    const path = v === "Home" ? "" : "/" + v.toLowerCase();
    return (
      <Tab
        key={"tab" + k}
        label={v}
        to={path}
        component={Link}
        className={classes.extraPadded}
      />
    );
  }, this);

  function goToGit() {
    window.open("https://github.com/Daniel-Davies", "_blank");
  }

  function goToFb() {
    window.open(
      "https://www.facebook.com/profile.php?id=100008902681793",
      "_blank"
    );
  }

  function goToLinkedIn() {
    window.open(
      "https://www.linkedin.com/in/daniel-davies-943668160/",
      "_blank"
    );
  }

  function goToYoutube() {
    window.open(
      "https://www.youtube.com/channel/UCHHE6zzMU4gtG9_rbPgj3bw",
      "_blank"
    );
  }

  return (
    <Grid item container xs={12}>
      <AppBar
        className={classes.noBorder}
        position="static"
        style={{
          background: fillColor,
          paddingLeft: "5vw",
          paddingRight: "5vw"
        }}
      >
        <Toolbar className={classes.noBorder}>
          <Grid
            justify="space-between"
            alignItems="center"
            xs={12}
            item
            container
          >
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "white"
                }
              }}
            >
              {renderLinks}
            </Tabs>
            <div>
              <IconButton onClick={goToGit}>
                <svg
                  style={{ height: "40px", width: "40px", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </IconButton>
              <IconButton onClick={goToLinkedIn}>
                <svg
                  style={{ height: "40px", width: "40px", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                  />
                </svg>
              </IconButton>
              <IconButton onClick={goToFb}>
                <svg
                  style={{ height: "40px", width: "40px", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                  />
                </svg>
              </IconButton>
              <IconButton onClick={goToYoutube}>
                <svg
                  style={{ height: "40px", width: "40px", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  />
                </svg>
              </IconButton>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object,
  nowActive: PropTypes.string,
  fillColor: PropTypes.string
}


export default withStyles(styles)(Navbar);
