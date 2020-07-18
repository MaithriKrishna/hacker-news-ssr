import React from "react";

export const Description = ({ info }) =>
    <div className="description">
        <span className="highlight">{info.description}</span>
        <span> ({info.source}) by </span>
        <span className="highlight">{info.reporter}</span>
        <span>{info.time} hours ago [</span>
        <span className="highlight clickable" onClick={()=> console.log(info)}> hide </span>
        <span>]</span>
    </div>;