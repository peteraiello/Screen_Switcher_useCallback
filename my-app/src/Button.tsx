import React from "react";
import {screenState} from "./App";

interface ButtonProps {
    buttonClicked: (screenId: screenState) => void,
    text: screenState,
    isActive: boolean
}

export const Button = React.memo(({
    text,
    buttonClicked,
    isActive
}:ButtonProps) => {

    const handleClick = () => {
      buttonClicked(text)
    }
    console.log("button ", text, "rendered");

    return (
        <>
            {text &&
                <button onClick={handleClick} 
                className={isActive ? 'button button-active': 'button'}>{text}</button>
            }
        </>
    )
});