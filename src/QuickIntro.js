import React from "react";
import Grid from "@material-ui/core/Grid";
import IntroText from "./IntroText";
import RecentExperience from "./RecentExperience";
import Languages from "./Languages";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: "#343a40"
  },
  codeImg: {
    height: "auto",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.70)), url(./images/mycode.PNG)",
    paddingTop: "5vh",
    paddingBottom: "5vh"
  }
});

const QuickIntro = ({ classes }) => {
  return (
    <Grid
      alignItems="center"
      direction="column"
      item
      container
      xs={12}
      id={"scrollDown"}
    >
      <div className={classes.section}>
        <IntroText />
      </div>
      <Grid
        alignItems="center"
        direction="column"
        item
        container
        lg={8}
        md={10}
        xs={12}
        style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
      >
        <Grid item container lg={8} md={10} xs={12} justify="center">
          <Typography variant="h5" align="center" style={{ opacity: 0.7 }}>
            3 Most Recent Professional Projects
          </Typography>
        </Grid>
        <RecentExperience />
        <Grid
          item
          container
          xs={12}
          justify="center"
          style={{ paddingTop: "5vh", paddingBottom: "3vh" }}
        >
          <Button
            variant="outlined"
            size="large"
            to={"/projects"}
            component={Link}
          >
            See More!
          </Button>
        </Grid>
      </Grid>
      <div className={classes.codeImg}>
        <Languages />
      </div>
    </Grid>
  );
};

export default withStyles(styles)(QuickIntro);
