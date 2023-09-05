import './App.css';
import React, { useState, useEffect } from 'react';
import { Button } from "./components/Button/Button";
import { Key } from "./components/Key/Key";
import { SharpKey } from "./components/SharpKey/SharpKey";

function App() {

    const [activeButton, setActiveButton] = useState("letter-button");
    const [pressedButton, setPressedButton] = useState("");

    const activeButtonHandler = (event) => {
        const newId = event.target.id;
        if (newId !== activeButton) {
            setActiveButton(newId)
        }
    }

    const whiteKeysAttributes = [
        {
            code : "KeyD" ,
            letter : "D" ,
            note : "c" ,
        },
        {
            code : "KeyF" ,
            letter : "F" ,
            note : "d" ,
        },
        { 
            code : "KeyG" ,
            letter : "G" ,
            note : "e" ,
        },
        {
            code : "KeyH" ,
            letter : "H" ,
            note : "f" ,
        },
        { 
            code : "KeyJ" ,
            letter : "J" ,
            note : "g" ,
        },
        {
            code : "KeyK" ,
            letter : "K" ,
            note : "a" ,
        },
        {
            code : "KeyL" ,
            letter : "L" ,
            note : "b" ,
        },
    ]

    const sharpKeysAttributes = [
        {
            code : "KeyR" ,
            letter : "R" ,
            note : "c#" ,
        },
        {
            code : "KeyT" ,
            letter : "T" ,
            note : "d#" ,
        },
        {
            code : "" ,
            letter : "" ,
            note : "" ,
        },
        {
            code : "KeyU" ,
            letter : "U" ,
            note : "f#" ,
        },
        {
            code : "KeyI" ,
            letter : "I" ,
            note : "g#" ,
        },
        {
            code : "KeyO" ,
            letter : "O" ,
            note : "a#" ,
        },
    ]

    const checkPressedKey = (pressedKey) => {
        return whiteKeysAttributes.some(obj => obj.code === pressedKey) || sharpKeysAttributes.some(obj => obj.code === pressedKey);
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.repeat) return; 
            
            const key = e.code;
            if (checkPressedKey(key)) {
                const newAudio = new Audio(`audio/${key}.mp3`);
                newAudio.play();
            }

            setPressedButton(key);
        };

        const handleKeyUp = (e) => {
            setPressedButton("");
        }

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return (
        <div className="app-container">
            <header className="header">
                <h1 className="page-title">Virtual Piano</h1>
            </header>
            <main className="main">
            <div className="buttons">
                <Button 
                    className="notes-button"
                    innerText="Notes"
                    id="notes-button"
                    activeButton={activeButton}
                    onClick={activeButtonHandler}
                />
                <Button 
                    className="letter-button"
                    innerText="Letters"
                    id="letter-button"
                    activeButton={activeButton}
                    onClick={activeButtonHandler}
                />
            </div>
            <div className="keyboard">
                <div className="keys">
                    {whiteKeysAttributes.map( (data, index) => {
                        return <Key 
                            code={data.code} 
                            letter={data.letter}
                            note={data.note}
                            id={index}
                            key={index}
                            pressedButton={pressedButton}
                            className={`key ${activeButton === "notes-button" ? "note" : ""}`}
                        />
                    })}
                </div>
                <div className="sharp-keys">
                    {sharpKeysAttributes.map( (data, index) => {
                        return <SharpKey 
                            code={data.code}
                            letter={data.letter}
                            note={data.note}
                            id={index}
                            key={index}
                            pressedButton={pressedButton}
                            className={`sharp-key ${activeButton === "notes-button" ? "note" : ""}`}
                        />
                    } )}
                </div>
            </div>  
            </main>
        </div>
    );
}

export default App;
