import React from "react";
import Skill from "./Skill";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import { PLs, frameworks, platforms, dbs } from "./utils/languagesStore";

const styles = theme => ({
  root: {
    color: "white",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1)
  }
});

class Languages extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        alignItems="center"
        direction="column"
        xs={12}
        item
        container
        data-aos="fade-up"
      >
        <Grid alignItems="center" direction="column" xs={8} item container>
          <Typography variant="h3" className={classes.root}>
            Technologies
          </Typography>
        </Grid>
        <Grid xs={8} item container alignItems="flex-start" direction="column">
          <Typography className={classes.root} variant="body1">
            I've put my keyboard to a lot of use on these languages...
          </Typography>
          <Grid item container justify="center" xs={12}>
            <Grid justify="flex-start" xs={8} item container>
              {PLs.map((v, k) => {
                return <Skill key={k} name={v}></Skill>;
              })}
            </Grid>
          </Grid>
          <Typography className={classes.root} variant="body1">
            Ask me about these frameworks...
          </Typography>
          <Grid item container justify="center" xs={12}>
            <Grid justify="flex-start" xs={8} item container>
              {frameworks.map((v, k) => {
                return <Skill key={k} name={v}></Skill>;
              })}
            </Grid>
          </Grid>
          <Typography className={classes.root} variant="body1">
            And I can tell you my opinion on these platforms...
          </Typography>
          <Grid item container justify="center" xs={12}>
            <Grid justify="flex-start" xs={8} item container>
              {platforms.map((v, k) => {
                return <Skill key={k} name={v}></Skill>;
              })}
            </Grid>
          </Grid>
          <Typography className={classes.root} variant="body1">
            Last but not least, Databases
          </Typography>
          <Grid item container justify="center" xs={12}>
            <Grid justify="flex-start" xs={8} item container>
              {dbs.map((v, k) => {
                return <Skill key={k} name={v}></Skill>;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Languages);
