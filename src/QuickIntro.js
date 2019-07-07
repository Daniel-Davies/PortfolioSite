import React from 'react';
import styled from 'styled-components'
import IntroText from './IntroText';
import Skill from './Skill'
import RecentExperience from './RecentExperience';
import Languages from './Languages';

const Section = styled.div`
    padding-top: 10vh;
    padding-bottom: 10vh;
`;

const CodeImg = styled.div`
    height: auto;
    width: 100vw;
    background-repeat: no-repeat;
    background-size:contain;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(./images/code.png); 
    padding-top: 5vh;
    padding-bottom: 5vh;
`

const QuickIntro = () => {
    return (
        <div className="d-flex align-items-center flex-column col-12 px-0">
            <Section style={{"backgroundColor": "#343a40"}}>
                <IntroText/>
            </Section>
            <div className="col-10 d-flex align-items-center flex-column px-0 mx-0" style={{paddingTop: "5vh", paddingBottom: "5vh"}}>
                <div className="col-8 d-flex justify-content-center mb-4 mx-0 px-0">
                    <p className="h4 text-muted">3 Most Recent Professional Experiences</p>
                </div>
                <RecentExperience/>
                <div className="d-flex justify-content-center col-12" style={{paddingTop: "5vh", paddingBottom: "3vh"}}>
                    <button className="btn btn-outline-dark btn-lg border border-dark">See More!</button>
                </div>
            </div>
            <CodeImg className="d-flex align-items-center flex-column col-12 px-0">
                <Languages/>        
            </CodeImg>
        </div>
            
    );
} 
        
export default QuickIntro;