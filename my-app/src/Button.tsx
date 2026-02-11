import React from "react";

interface ButtonProps {
    buttonClicked: (screenId: string) => void,
    text: string,
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