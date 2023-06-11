import React from "react";
import KatieZaferes from '../images/katie-zaferes.svg';
import Star from '../images/star.svg';

export default function Card(props){
    // const {img, rating, reviewCount, country, title, price, id, openSpots} = props;
    console.log(props);

    let badgeText;
    if (props.openSpots === 0){
        badgeText = "SOLD OUT";
    }
    else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    


    return(
        <section className="card">
            {/* If the statement is TRUE, render: */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={KatieZaferes} alt="card--image" />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="rating icon" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) ● </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </section>
    );
}