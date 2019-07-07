import React, { Component } from 'react';
import styled from 'styled-components'
import { Navbar } from './Navbar';
import QuickIntro from './QuickIntro';
import Footer from './Footer';
const LeadingGreeting = styled.p`
    color: white;
    font-size: 3rem;
`;

const SubText = styled.span`
    color: white;
    font-size: 1.2rem;
    margin-top: 40px;
`;

const AboutImg = styled.div`
    height: 100vh;
    width: 99.1vw;
    background-repeat: no-repeat;
    background-size:contain;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(./images/palms.png); 
`

export class About extends React.Component {
    render() {
        return (
            <div>
                <AboutImg>
                    <Navbar />
                    <div className="align-items-center justify-content-center col-12 d-flex" style={{ height: '70%' }} >
                        <div className="col-6 text-center">
                            <LeadingGreeting className="text-white ">Hello! I'm Daniel, a Masters' student at the University of Bristol.</LeadingGreeting><br />
                            <SubText className="text-white">Use this website to find out more about my professional interests, experience, and projects!</SubText><br />
                            <div className="col-12 d-flex justify-content-center mt-5">
                                <button className="btn btn-lg text-white border border-white px-4 mx-2" style={{ background: "none" }}>Projects</button>
                                <button className="btn btn-lg text-white border border-white px-4 mx-2" style={{ background: "none" }}>Contact</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-white col-12 d-flex justify-content-center" style={{position: "absolute", bottom: "3%"}}>
                        Or <span className="text-success px-2">See Below</span> for a quick intro to me 
<svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="white" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
                    </div>
                </AboutImg>
                <QuickIntro />
                <Footer />
            </div>

        );
    }
}

