import React, {useState } from 'react';
import "./Key.css";

export const Key = ({code, className, letter, note, id}) => {
    const [isKeyActive, setIsKeyActive] = useState(false);

    const keyDownHandler = (event) => {
        setIsKeyActive(true);
        playNote(code);
    }

    const keyUpHandler = () => {
        setIsKeyActive(false);
    }

    const playNote = (note) => {
        let sound = new Audio(`/audio/${note}.mp3`);
        sound.play();
    }

    const keyClass = isKeyActive ? `${className} key-active` : className;

    return(

        <div
            className={keyClass}
            // data-code={props.code}
            data-code={code}
            data-letter={letter} 
            data-note={note}
            id={id}
            onMouseDown={keyDownHandler}
            onMouseUp={keyUpHandler}
        >
        </div>
    )
}