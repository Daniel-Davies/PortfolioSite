import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';

function Footer({ backgroundColor, color }) {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="default"
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        <Toolbar>
          <Grid item container xs={12} justify="center">
            <Typography variant="h6" color="inherit">
              Daniel Davies 2019
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string
}

export default Footer;