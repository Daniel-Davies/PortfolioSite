import React from 'react';
import Card from './Card';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    spaced: {
        //margin: theme.spacing(2)
    }
})

class RecentExperience extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid data-aos='fade-up' alignItems="center" direction="column" item container xs={12}>
                <Grid alignItems="center" direction="column" xs={12}  item container style={{paddingTop: "5vh", paddingBottom: "5vh"}}>
                    <Fade in={true} {...(true ? { timeout: 1000 } : {})}>
                        <Grid xs={12} item container justify="center">
                            <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                <Card 
                                    Type={"Job"} 
                                    Image={"./images/lynch.jpg"} 
                                    Title={"Merrill Lynch"} 
                                    Description={"Worked mainly in React and Perspective (with complimentary frameworks Material-UI and Redux) to build an analytics tool for Equity Risk data. Also built a Python Flask backend to interface with a KDB/Q Data Store"} 
                                    Technologies={["React", "Redux", "Material-UI", "finos/Perspective", "Flask", "KDB/Q"]}
                                />
                            </Grid>
                            <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                <Card 
                                    Type={"Research"} 
                                    Image={"./images/brencs.jpg"} 
                                    Title={"UCI Dept. of CS"} 
                                    Link={"https://github.com/Daniel-Davies/ResearchProject"}
                                    Description={"Data Analytics research project that tried to uncover the reasons behind the ever rising number of 'frequent flyer' patients in US hospitals, through use of Machine Learning on a large dataset"} 
                                    Technologies={["Python", "Matplotlib", "SKLearn", "Numpy/SciPy", "Jupyter Notebook"]}
                                />
                            </Grid>
                            <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                <Card 
                                    Type={"Job"} 
                                    Image={"./images/portal.PNG"} 
                                    Gif={"./images/cove.gif"}
                                    Title={"UCI Applied Innovation ('The Cove')"} 
                                    Description={"Worked as a paid full stack developer for UC Irvine to build an online portal to enable intuitive searching of faculty for University Partners. Main part of my time focussed on building a search engine module in C#"} 
                                    Technologies={["C#", "ASP.NET Core", "MySQL", "SQL Server", "Bootstrap", "Razor"]}
                                />
                            </Grid>
                        </Grid>
                    </Fade>
                </Grid>
            </Grid>
        );
    }
}


export default withStyles(styles)(RecentExperience);