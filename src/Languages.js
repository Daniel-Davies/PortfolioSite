import React from 'react';
import Skill from './Skill';
import styled from 'styled-components';


const SkillHeader = styled.h1`
    font-size: 18px;
    margin-top: 1rem;
    padding: 1vh;
`;

class Languages extends React.Component{
    render(){
        return (
            <div className="d-flex align-items-center flex-column col-12 px-0">
                <div className="col-8 d-flex align-items-center flex-column text-white">
                    <p className="h3 text-white" style={{borderBottom: "2px solid #5b94f0"}}>Technologies</p>
                </div>
                <div className="col-8 d-flex align-items-start flex-column text-white">
                    <SkillHeader>I've put my keyboard to a lot of use on these languages...</SkillHeader>
                    <div className="d-flex justify-content-center col-12">
                        <div className="col-8 d-flex justify-content-between">
                            <Skill name={"Java"}></Skill>
                            <Skill name={"ASP.NET / CORE"}></Skill>
                            <Skill name={"Javascript"}></Skill>
                            <Skill name={"C/C++"}></Skill>
                            <Skill name={"Python"}></Skill>
                        </div>
                    </div>
                    <SkillHeader>Ask me about these frameworks...</SkillHeader>
                    <div className="d-flex justify-content-center col-12">
                        <div className="col-8 d-flex justify-content-between">
                            <Skill name={"Java"}></Skill>
                            <Skill name={"ASP.NET / CORE"}></Skill>
                            <Skill name={"Javascript"}></Skill>
                            <Skill name={"C/C++"}></Skill>
                            <Skill name={"Python"}></Skill>
                        </div>
                    </div>
                    <SkillHeader>And I can tell you my opionion on these platforms...</SkillHeader>
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
            </div>
        );
    }
}

export default Languages;