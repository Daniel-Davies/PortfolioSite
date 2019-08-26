import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  right: {
    textAlign: "right",
    marginRight: theme.spacing(1),
    color: "white"
  },
  left: {
    textAlign: "left",
    marginLeft: theme.spacing(1),
    color: "white"
  }
}));

function IntroText() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid xs={12} item container justify="center" alignItems="center">
        <Grid xs={8} container justify="center" item>
          <Grid xs={6} item>
            <Typography
              data-aos="fade-up"
              className={classes.right}
              variant="h4"
            >
              The bigger the challenge, the bigger the learning curve...the
              bigger the fun!
            </Typography>
          </Grid>
          <Grid xs={6} item>
            <Typography data-aos="fade-up" className={classes.left}>
              Hi, I'm Daniel, an award winning CS student who has a passion for
              delivering high quality products that bring value to the people
              that use them. Building cool projects one little, maintable, clean
              building block at a time, is the reason I fell in love with
              Computer Science, and the biggest source of satisfaction from
              everything I build. <br />
              <br />I hope to one day use my skills for empowering my wider
              community with Technolgy, to make the world a better place to
              live.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default IntroText;
