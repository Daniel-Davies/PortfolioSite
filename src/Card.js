import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card" style={{width: "100%"}}>
                <div className="d-flex justify-content-end col-12 px-0" style={{zIndex: "1000", position:"absolute"}}>
                    <p className="text-white bg-dark px-4 h5">{this.props.Type}</p>
                </div>
                <img className="card-img-top p-2" src={this.props.Image} alt="Card image cap" style={{height: "18vh"}}/>
                <div className="card-body d-flex p-3 py-1">
                    <div className="col-6 p-0">
                        <h5 className="card-title">{this.props.Desc}</h5>
                        {this.props.Technologies.map(te => <span className="badge badge-pill badge-secondary m-1">{te}</span>)} 
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