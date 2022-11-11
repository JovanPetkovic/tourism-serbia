import React from "react";
import "./Place.css";
const Place = (props) =>
{


    return(
        <div className="place">
            <img src={props.image}/>
            <h2>{props.placeName}</h2>
            <h3>{props.type}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Place;