import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div className="card" style={{width: "100%"}}>
                <div className="d-flex justify-content-end col-12 px-0" style={{zIndex: "1000", position:"absolute"}}>
                    <p className="text-white bg-dark px-4 h5">Job</p>
                </div>
                <img className="card-img-top p-2" src="./images/lynch.jpg" alt="Card image cap" style={{height: "17vh"}}/>
                <div className="card-body d-flex p-3">
                    <div className="col-6 p-0">
                        <h5 className="card-title">Card title</h5>
                        <span className="badge badge-pill badge-secondary m-1">Secondary</span>
                        <span className="badge badge-pill badge-secondary m-1">JS</span>
                        <span className="badge badge-pill badge-secondary m-1">Secondary</span>
                    </div>
                    <div className="col-6 p-0 d-flex flex-row align-items-end justify-content-end">
                        <a href="#" className="btn btn-primary btn-sm mx-2">Animate!</a>
                        <a href="#" className="btn btn-primary btn-sm">Check it out!</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;