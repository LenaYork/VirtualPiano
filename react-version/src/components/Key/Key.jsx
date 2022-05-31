import React from 'react';
import "./Key.css";

export const Key = (props) => {
    return(
        <div
            className="key"
            data-code={props.code}
            data-letter={props.letter} 
            data-note={props.note}
            id={props.id}
            onClick={props.onClick}
        >
        </div>
    )
}