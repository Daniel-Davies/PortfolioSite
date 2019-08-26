import React from "react";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  label: {
    color: "white",
    fontSize: "1.3rem",
    padding: theme.spacing(2.5),
    margin: theme.spacing(1)
  },
  button: {
    border: "2px solid"
  }
});

class Skill extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Chip
        label={this.props.name}
        color="primary"
        className={classes.label}
        variant="outlined"
      />
    );
  }
}

export default withStyles(styles)(Skill);
