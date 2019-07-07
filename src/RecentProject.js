import React from 'react';
import styled from 'styled-components'

const FullContainer = styled.div`
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 100%), url(http://lorempixel.com/output/animals-q-g-500-500-9.jpg) no-repeat;
  height: 100%;
  width: 100%;
  border: solid 1px #000;
  box-sizing: border-box;
  padding-left: 250px;

`;

class RecentProject extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <FullContainer>
                <h1>Title</h1>
                <p>Paragraph</p>
                <a>Link</a>
            </FullContainer>
        );
    }
} 
        
export default RecentProject;