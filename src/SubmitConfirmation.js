import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const styles = theme => ({
  buttonWhite: {
    color: "white",
    borderColor: "white",
    margin: theme.spacing(2)
  },
  multiline: {
    color: "white !important"
  },
});

class CardFlag extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          alignItems="center"
          item
          container
          direction="column"
          justify="center"
          style={{ minHeight: "50vh" }}
        >
          <Grid item container justify="center">
            <Typography className={classes.multiline} variant="h3">
              Got it. Thank you!
            </Typography>
          </Grid>
          <Grid item container justify="center">
            <Typography className={classes.multiline} variant="h6">
              It's great you want to talk! I will aim to respond within 24 hours.
            </Typography>
          </Grid>
          <Grid justify="center" xs={12} item container>
            <Button
              variant="outlined"
              color="primary"
              to="/"
              component={Link}
              className={classes.buttonWhite}
              size={"large"}
            >
              Back to homepage
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CardFlag.propTypes = {
  classes: PropTypes.string
}


export default withStyles(styles)(CardFlag);
