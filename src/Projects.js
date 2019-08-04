import React from 'react';
import DarkNavbar from './DarkNavbar';
import DarkFooter from './DarkFooter';
import Card from './Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    spaced:{
        marginBottom: theme.spacing(1)
    }
});

class Projects extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <DarkNavbar fillColor={"#343a40"} nowActive="Projects"/>
                <Grid alignItems="center" direction="column" item container xs={12}>
                    <Grid alignItems="center" direction="column" xs={10} item container style={{paddingTop: "5vh", paddingBottom: "5vh"}}>
                        <Grid xs={12} item container justify="center">
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Side Project"} Image={"./images/thissite.png"} Desc={"This Site"} Technologies={[]}></Card>
                            </Grid>
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Job"} Image={"./images/lynch.jpg"} Desc={"Merrill Lynch"} Technologies={[]}></Card>
                            </Grid> 
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Research"} Image={"./images/brencs.jpg"} Desc={"UCI Dept. of CS"} Technologies={[]}></Card>
                            </Grid>
                        </Grid>
                        <Grid xs={12} item container justify="center">
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Job"} Image={"./images/portal.png"} Desc={"UCI Applied Innovation ('The Cove')"} Technologies={[]}></Card>
                            </Grid>
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Hackathon"} Image={"./images/hacksc.png"} Desc={"HackSC 2019 (Uni. of Southern California"} Technologies={[]}></Card>
                            </Grid> 
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Hackathon"} Image={"./images/stanford.jpg"} Desc={"TreeHacks 2019 (Stanford University"} Technologies={[]}></Card>
                            </Grid> 
                        </Grid>
                        <Grid xs={12} item container justify="center">
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Hackathon"} Image={"./images/calpoly.jpg"} Desc={"SLOHacks 2019 (Cal Poly SLO)"} Technologies={[]}></Card>
                            </Grid>
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Team Project"} Image={"./images/robofarm.png"} Desc={"RoboFarm- Microsoft Malmo AI Project"} Technologies={[]}></Card>
                            </Grid> 
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Job"} Image={"./images/socgen.jpg"} Desc={"SG Markets- Trade Execution Platform"} Technologies={[]}></Card>
                            </Grid> 
                        </Grid>
                        <Grid xs={12} item container justify="center">
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Team Project"} Image={"./images/bristol.png"} Desc={"Bristol Surplus Food"} Technologies={[]}></Card>
                            </Grid> 
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Hackathon"} Image={"./images/hex.jpg"} Desc={"Hex Hack 2018"} Technologies={[]}></Card>
                            </Grid> 
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Hackathon"} Image={"./images/oxford.png"} Desc={"OxHack 2018- University of Oxford"} Technologies={[]}></Card>
                            </Grid> 
                        </Grid>
                        <Grid xs={12} item container justify="center">
                            <Grid lg={4} xs={12} item container className={classes.spaced}>
                                <Card Type={"Research"} Image={"./images/cardiffUni.jpg"} Desc={"Cardiff University dept. of Physics"} Technologies={[]}></Card>
                            </Grid> 
                        </Grid>
                    </Grid>
                </Grid>
                <DarkFooter/>
            </div>
        );
    }
}

export default withStyles(styles)(Projects);