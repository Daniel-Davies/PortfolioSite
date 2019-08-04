import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    right:{
        textAlign: "right",
        marginRight: theme.spacing(1),
        color: "white"
    },
    left:{
        textAlign: "left",
        marginLeft: theme.spacing(1),
        color: "white"
    }
  }));

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

function IntroText() {
    const classes  = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Grid xs={12} item container justify="center" alignItems="center">
                <Grid xs={8} container justify="center" item>
                    <Grid xs={6} item >
                        <Typography  data-aos='fade-up' className={classes.right} variant="h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ans thats that.</Typography>
                    </Grid>
                    <Grid xs={6} item >
                        <Typography  data-aos='fade-up' className={classes.left}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere tortor quis vulputate sodales. 
                            Maecenas pulvinar eget orci ac lobortis. Donec ut lacinia turpis. Vivamus mollis nunc velit, at 
                            iaculis nibh auctor venenatis. Quisque quis felis eget diam tincidunt porta. Donec cursus tempor odio
                            , quis pellentesque sapien aliquet ac. In interdum ligula quis est suscipit, volutpat pharetra enim lobortis.</Typography>
                    </Grid>
                </Grid>
            </Grid>   
        </ThemeProvider>
    );
}
        
export default IntroText;