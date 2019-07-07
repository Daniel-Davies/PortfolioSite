import React from 'react';

class Skill extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <button className="btn btn-outline-dark text-white p-3" style={{border: "2px solid #5b94f0"}}>
                {this.props.name}
            </button>
        );
    }
} 
        
export default Skill;