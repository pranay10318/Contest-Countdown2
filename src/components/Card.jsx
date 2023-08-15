import React from 'react';

function Card({ contest, duration }) {
    return (
        <div className="card">
            <div className="card-image">
            <img src={`../images/${contest.site}.png`} alt={contest.site} />
            </div>
            <div className="card-details">
                <p className="title-style" style={{ fontSize: "20px", fontWeight: "bold", textDecoration: "none" }}>
                    <a href={contest.url} style={{ fontSize: "150%", fontWeight: "bold", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">{contest.name}</a>
                </p>
                <p>{duration}</p>
            </div>
        </div>
    );
}

export default Card;
