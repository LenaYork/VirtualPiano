import React, { useState } from 'react';
import "./Button.css";

export const Button = (props) => {

    const isActive = props.activeButton === props.id;

    return(
        <div 
            className={`button ${props.className} ${isActive ? "active-button" : ""}`}
            id={props.id}
            onClick={props.onClick}
        >
            {props.innerText}
        </div>
    )
}