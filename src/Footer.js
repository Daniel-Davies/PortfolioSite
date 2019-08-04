import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  darker:{
    backgroundColor: "#343a40",
    color: "white"
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.darker}>
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