import React from "react";

const Banner = ({id, title, source}) =>{
    return(
        <li className="px-4">
            <h2>{title}</h2>
            <img alt={title} src={source} className="rounded-xl mx-auto"/>
        </li>
    )
}

export default Banner