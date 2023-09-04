import React, { useState } from 'react';
import "./SharpKey.css";

export const SharpKey = ({code, className, letter, note, id}) => {
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

    const sharpKeyClass = isActiveKey ? `${className} sharp-key-active` : className;

    return(
        <div
            className={sharpKeyClass}
            data-code={code}
            data-letter={letter} 
            data-note={note}
            id={id}
            onMouseDown={sharpKeyDownHandler}
            onMouseUp={sharpKeyUpHandler}
        >
        </div>
    )
}