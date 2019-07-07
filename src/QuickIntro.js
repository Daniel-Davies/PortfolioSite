import React from 'react';
import styled from 'styled-components'
import IntroText from './IntroText';
import Skill from './Skill'
import RecentExperience from './RecentExperience';
import Languages from './Languages';

const SkillHeader = styled.h1`
    font-size: 25px;
    margin-top: 3rem;
`;

const QuickIntro = () => {
    return (
        <div className="d-flex align-items-center flex-column col-12">
            <IntroText/>
            <div className="col-10 d-flex align-items-center flex-column">
                <div className="col-8 d-flex justify-content-center">
                    <p className="display-3">Most Recent Experience</p>
                </div>
                <RecentExperience/>
            </div>
            <Languages/>
        </div>
            
    );
} 
        
export default QuickIntro;