import React from 'react';
import Card from './Card';
class RecentExperience extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="row col-12 justify-content-center d-flex">
                <div className="col-4">
                    <Card></Card>
                </div>
                <div className="col-4">
                    <Card></Card>
                </div>
                <div className="col-4">
                    <Card></Card>
                </div>
            </div>
        );
    }
} 
        
export default RecentExperience;