import React from 'react';
import Navbar from './Navbar';
import DarkFooter from './DarkFooter';
import Card from './Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
    spaced:{
    }
});

class Projects extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Navbar fillColor={"#343a40"} nowActive="Projects"/>
                <Grid alignItems="center" direction="column" item container xs={12}>
                    <Grid alignItems="center" direction="column" xs={12} md={10} lg={8} sm={9} item container style={{paddingTop: "5vh", paddingBottom: "5vh"}}>
                        <Fade in={true} {...(true ? { timeout: 1000 } : {})}>
                            <Grid xs={12} item container justify="center">
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Side Project"} 
                                        Image={"./images/thissite.jpg"} 
                                        Title={"This Site"} 
                                        Technologies={["React", "Material-UI", "Node Express"]} 
                                        Link={"https://github.com/Daniel-Davies/PortfolioSite.git"}
                                        Description={"A website from scratch to showcase my recent projects jobs"} 
                                        Gif={"./images/thissite.gif"}
                                    />
                                </Grid>
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
                                    >
                                    </Card>
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
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Hackathon"} 
                                        Image={"./images/hacksc.jpg"} 
                                        Link={"https://devpost.com/software/align-f4o103"}
                                        Title={"HackSC 2019 Winner (USC)"} 
                                        Gif={"./images/hacksc.gif"}
                                        Description={"Won Best Web/Mobile app at USC's annual hackathon for an app that connected people suffering with similar diseases such as MS onto a platform that would let them find support from people in a similar situation"} 
                                        Technologies={["React", "React Native", "AWS Cloud 9", "AWS S3", "AWS Cognito"]}/>
                                </Grid> 
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Hackathon"} 
                                        Image={"./images/treehacks.jpg"} 
                                        Gif={"./images/stanford.gif"}
                                        Link={"https://devpost.com/software/treehacks-pejm73"}
                                        Title={"TreeHacks 2019 Winner (Stanford University)"}
                                        Description={"Won category of Most Creative App for a machine learning project that focussed on identifying whether a patient had a viral or bacterial infection based on GEO2R samples (collection from blood sample of patient etc)"} 
                                        Technologies={["Django", "Bootstrap", "SKLearn", "Highcharts"]}
                                    />
                                </Grid> 
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Hackathon"} 
                                        Image={"./images/philan.PNG"} 
                                        Link={"https://devpost.com/software/philanthropoints"}
                                        Title={"SLOHacks 2019 Winner (Cal Poly SLO)"} 
                                        Gif={"./images/calpoly.gif"}
                                        Technologies={["Flask", "Bootstrap"]}
                                        Description={"Build a platform available for Web and IOS that leveraged company sponsorship connections to promote volunteering in the local community. Won Best Hack for Social Good, and Best Use of Hathway Corporate Connections"}
                                    />
                                </Grid>
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Team Project"} 
                                        Link={"https://github.com/Daniel-Davies/13-RoboFarm"}
                                        Image={"./images/robofarm.PNG"} 
                                        Title={"RoboFarm- Microsoft Malmo AI Project"}
                                        Description={"Microsoft Malmo provides an API over the popular game minecraft to leverage a gaming environment for training AI/ML algorithms. We used a genetic algorithm in the game to optimse planting locations for wheat seeds."} 
                                        Technologies={["Malmo", "Python"]}
                                    />
                                </Grid> 
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Job"} 
                                        Image={"./images/socgen.jpg"} 
                                        Title={"SG Markets- Trade Execution Platform"} 
                                        Description={"Formed part of the Exection Platform demo team. Built a demo version of a sales-trader platform, in a hackathon style, to demo to senior members of the bank. Also worked intensely with newer technolgies at the bank such as Chatbots connected to trader's desks, and machine learning on trading data."} 
                                        Technologies={["Flask", "Bootstrap", "SKLearn"]}
                                    />
                                </Grid> 
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Team Project"} 
                                        Image={"./images/bristol.jpg"} 
                                        Link={"https://github.com/Daniel-Davies/Bristol-Surplus-Food"}
                                        Title={"Bristol Surplus Food"} 
                                        Description={"Formed part of a team that made a website for a charity in Bristol that helps connect supermarkets with surplus food to those in need of food, such as struggling families and the homeless"} 
                                        Technologies={["Java", "Java Play", "Bootstrap"]}
                                    />
                                </Grid> 
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Hackathon"} 
                                        Image={"./images/hex.jpg"} 
                                        Link={"https://devpost.com/software/angryfacesinblockchain"}
                                        Title={"Hex Hack 2018 Winner"} 
                                        Description={"I was on the winning team for an innovative application that first captures any security events using a camera, classifies the event as a security threat, then adds any threats to a global blockchain that can be used to track global threat alerts"} 
                                        Technologies={["Ethereum Library","Bootstrap", "Azure cloud services", "OpenCV"]}
                                    />
                                </Grid> 
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Hackathon"} 
                                        Image={"./images/oxford.png"} 
                                        Link={"https://github.com/cjdudley1/ACDC.git"}
                                        Title={"OxHack 2017 Winner- University of Oxford"} 
                                        Description={"I was on the winning team for University of Oxford's hackathon, in which we built an app for the healthcare industry to use a webcam to monitor a patient's emotions, and on signal of any of any discomfort or pain, would trigger an email to alert a doctor."} 
                                        Technologies={["Flask", "Microsoft Cognitive Services"]}
                                    />
                                </Grid> 
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Research"} 
                                        Image={"./images/cardiffUni.jpg"} 
                                        Title={"Cardiff University dept. of Physics"} 
                                        Description={"I completed a research project at Cardiff University investigating the use of the earth's magnetic field as a replacement/ aid to the electromagnets used in MRI scannr's at hospitals "} 
                                        Technologies={["Matlab"]}></Card>
                                </Grid> 
                            </Grid>
                        </Fade>
                        {/* <Fade in={true} {...(true ? { timeout: 3000 } : {})}>
                            <Grid xs={12} item container justify="center">
                                
                            </Grid>
                        </Fade>
                        <Fade in={true} {...(true ? { timeout: 5000 } : {})}>
                            <Grid xs={12} item container justify="center">
                                
                            </Grid>
                        </Fade>
                        <Fade in={true} {...(true ? { timeout: 7000 } : {})}>
                            <Grid xs={12} item container justify="center">
                                
                            </Grid>
                        </Fade>
                        <Fade in={true} {...(true ? { timeout: 9000 } : {})}>
                            <Grid xs={12} item container justify="center">
                                <Grid lg={4} md={6} xs={12} item container className={classes.spaced}>
                                    <Card 
                                        Type={"Research"} 
                                        Image={"./images/cardiffUni.jpg"} 
                                        Title={"Cardiff University dept. of Physics"} 
                                        Description={"I completed a research project at Cardiff University investigating the use of the earth's magnetic field as a replacement/ aid to the electromagnets used in MRI scannr's at hospitals "} 
                                        Technologies={["Matlab"]}></Card>
                                </Grid> 
                            </Grid>
                        </Fade> */}
                    </Grid>
                </Grid>
                <DarkFooter/>
            </div>
        );
    }
}

export default withStyles(styles)(Projects);