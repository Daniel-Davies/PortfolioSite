import React from 'react';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import IntroText from './IntroText';
import RecentExperience from './RecentExperience';
import Languages from './Languages';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

const Section = styled.div`
    padding-top: 10vh;
    padding-bottom: 10vh;
`;

const CodeImg = styled.div`
    height: auto;
    width: 100%;
    background-repeat: no-repeat;
    background-size:contain;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.70)), url(./images/mycode.PNG); 
    padding-top: 5vh;
    padding-bottom: 5vh;
`

const QuickIntro = () => {
    return (
        <Grid alignItems="center" direction="column" item container xs={12} id={"scrollDown"}>
            <Section style={{"backgroundColor": "#343a40"}}>
                <IntroText/>
            </Section>
            <Grid alignItems="center" direction="column" item container lg={8} md={10} xs={12} style={{paddingTop: "5vh", paddingBottom: "5vh"}}>
                <Grid item container lg={8} md={10} xs={12} justify="center">
                    <Typography variant="h5" align="center" style={{opacity: 0.7}}>3 Most Recent Professional Projects</Typography>
                </Grid>
                <RecentExperience/>
                <Grid item container xs={12} justify="center" style={{paddingTop: "5vh", paddingBottom: "3vh"}}>
                    <Button variant="outlined" size="large"  to={'/projects'} component={Link}>See More!</Button>
                </Grid>
            </Grid>
            <CodeImg className="d-flex align-items-center flex-column col-12 px-0">
                <Languages/>        
            </CodeImg>
        </Grid>
            
    );
} 
        
export default QuickIntro;