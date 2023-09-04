import React, {useState } from 'react';
import "./Key.css";

export const Key = (props) => {

    const code = props.code;

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

    const keyClass = isKeyActive ? "key key-active" : "key";

    return(

        <div
            className={keyClass}
            // data-code={props.code}
            data-code={code}
            data-letter={props.letter} 
            data-note={props.note}
            id={props.id}
            onMouseDown={keyDownHandler}
            onMouseUp={keyUpHandler}
        >
        </div>
    )
}