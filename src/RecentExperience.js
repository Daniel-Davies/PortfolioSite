import React from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    spaced: {
        //margin: theme.spacing(2)
    }
})

class RecentExperience extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            <Grid xs={12} item container justify="center">
                <Grid lg={4} xs={12} item container className={classes.spaced}>
                    <Card Type={"Job"} Image={"./images/lynch.jpg"} Desc={"Merrill Lynch"} Technologies={[]}></Card>
                </Grid> 
                <Grid lg={4} xs={12} item container className={classes.spaced}>
                    <Card Type={"Job"} Image={"./images/cove.png"} Desc={"UCI Applied Innovation ('The Cove')"} Technologies={[]}></Card>
                </Grid>
                <Grid lg={4} xs={12} item container className={classes.spaced}>
                    <Card Type={"Research"} Image={"./images/brencs.jpg"} Desc={"UCI Dept. of CS"} Technologies={[]}></Card>
                </Grid>
            </Grid>
        );
    }
} 
        

export default withStyles(styles)(RecentExperience);