import React from 'react';

class Skill extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <button className="btn btn-dark p-3" style={{border: "4px solid white"}}>
                {this.props.name}
            </button>
        );
    }
} 
        
export default Skill;