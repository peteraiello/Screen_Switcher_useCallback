import React from "react";

interface ScreenProps {
    activeScreen?: boolean
    screenId?: string
}

export const Screen = React.memo(({
    activeScreen,
    screenId
}: ScreenProps) => {

    console.log("screen ", screenId, "rendered");
    return (
        <div className={ activeScreen ? "screen screen-active" : "screen"}>
            { screenId }
        </div>
    )
})