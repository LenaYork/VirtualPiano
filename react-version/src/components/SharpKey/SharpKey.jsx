import React from 'react';
import "./SharpKey.css";

export const SharpKey = (props) => {
    return(
        <div
            className="sharp-key"
            data-code={props.code}
            data-letter={props.letter} 
            data-note={props.note}
            id={props.id}
            onClick={props.onClick}
        >
        </div>
    )
}