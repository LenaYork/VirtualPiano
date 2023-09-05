import React, {useState, useEffect } from 'react';
import "./Key.css";

export const Key = ({code, className, letter, note, id, pressedButton}) => {
    const [isKeyActive, setIsKeyActive] = useState(pressedButton === code);

    useEffect(() => {
        if (pressedButton === code) {
            setIsKeyActive(true);
        } else setIsKeyActive(false);
    }, [pressedButton]);

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