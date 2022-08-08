import React from "react";
import './NGOCard.css';

const NGOCard = (props) => {
    return (
        <div className="card">
            <div className="imageDiv">
                <img src={props.imgSrc} alt={props.imgAlt} className="image"/>
            </div>
            <div className="description">
                <p className="imageDescription">{props.imgDescription}</p>
            </div>
        </div>
    );
}

export default NGOCard;