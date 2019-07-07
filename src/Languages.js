import React from 'react';
import Skill from './Skill';
import styled from 'styled-components';


const SkillHeader = styled.h1`
    font-size: 25px;
    margin-top: 3rem;
`;

class Languages extends React.Component{
    render(){
        return (
            <div className="col-8 d-flex align-items-start flex-column">
                <p>Hover over any of the buttons to find out my level of experience</p>
                <SkillHeader>Have experience in:</SkillHeader>
                <div className="d-flex justify-content-center col-12">
                    <div className="col-8 d-flex justify-content-between">
                        <Skill name={"Java"}></Skill>
                        <Skill name={"ASP.NET / CORE"}></Skill>
                        <Skill name={"Javascript"}></Skill>
                        <Skill name={"C/C++"}></Skill>
                        <Skill name={"Python"}></Skill>
                    </div>
                </div>
                <SkillHeader>Ask me about:</SkillHeader>
                <div className="d-flex justify-content-center col-12">
                    <div className="col-8 d-flex justify-content-between">
                        <Skill name={"Java"}></Skill>
                        <Skill name={"ASP.NET / CORE"}></Skill>
                        <Skill name={"Javascript"}></Skill>
                        <Skill name={"C/C++"}></Skill>
                        <Skill name={"Python"}></Skill>
                    </div>
                </div>
                <SkillHeader>My platforms:</SkillHeader>
                <div className="d-flex justify-content-center col-12">
                    <div className="col-8 d-flex justify-content-between">
                        <Skill name={"Java"}></Skill>
                        <Skill name={"ASP.NET / CORE"}></Skill>
                        <Skill name={"Javascript"}></Skill>
                        <Skill name={"C/C++"}></Skill>
                        <Skill name={"Python"}></Skill>
                    </div>
                </div>
            </div>
        );
    }
}

export default Languages;