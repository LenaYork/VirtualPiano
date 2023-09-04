import React, { useState } from 'react';
import "./SharpKey.css";

export const SharpKey = (props) => {

    const code = props.code;

    const [isActiveKey, setIsKeyActive] = useState(false);

    const sharpKeyDownHandler = () => {
        setIsKeyActive(true);
        playNote(code);
    }

    const sharpKeyUpHandler = () => {
        setIsKeyActive(false);
    }

    const playNote = (note) => {
        let sound = new Audio(`/audio/${note}.mp3`);
        sound.play();
    }

    const sharpKeyClass = isActiveKey ? "sharp-key sharp-key-active" : "sharp-key";

    return(
        <div
            className={sharpKeyClass}
            data-code={props.code}
            data-letter={props.letter} 
            data-note={props.note}
            id={props.id}
            onMouseDown={sharpKeyDownHandler}
            onMouseUp={sharpKeyUpHandler}
        >
        </div>
    )
}