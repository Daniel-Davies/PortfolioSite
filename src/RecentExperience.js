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
                    <Card Type={"Job"} Image={"./images/lynch.jpg"} Desc={"Merrill Lynch"} Technologies={['JS', 'Something', 'ASP.NET ']}></Card>
                </div> 
                <div className="col-4">
                    <Card Type={"Hackathon"} Image={"./images/uci.jpg"} Desc={"Merrill Lynch"} Technologies={['JS', 'Something', 'ASP.NET ']}></Card>
                </div>
                <div className="col-4">
                    <Card Type={"Research"} Image={"./images/cove.png"} Desc={"Merrill Lynch"} Technologies={['JS', 'Something', 'ASP.NET ']}></Card>
                </div>
            </div>
        );
    }
} 
        
export default RecentExperience;