import React, {useState, useCallback} from 'react';
import { Button } from './Button';
import { Screen } from './Screen';
import "./App.css";

/* Create a initial state variable for active screen to an empty string (all screens inactive) */
const initialState = "";

/* Create multiple variables for screens i.e. 'Screen one', 'Screen two' etc */
export const screenOne = "Screen one";
export const screenTwo = "Screen two"; 
export const screenThree = "Screen three";
export const screenFour = "Screen four";

/* Create a type for screen state using union types (can either be 'Screen one', 'Screen two', 'Screen... etc' or an empty string) */
export type screenState = "" | typeof screenOne | typeof screenTwo | typeof screenThree | typeof screenFour;

/* Create an array containing screen strings used to loop through for Screen and Button components */
const screens = [screenOne, screenTwo, screenThree, screenFour];


function App() {
  /* Set up state for active screen and set to a default state of initialState (empty string) */
  const [activeScreen, setActiveScreen] = useState(initialState as screenState);

  /* By wrapping out click handler function inside the useCallback hook, 
     our child components should only rerender when something has changed. 
     Note: the dependency is empty for our callback because 'activeScreen'
     is not used anywhere inside our function. 
  */
  const handleButtonClick = useCallback((screenId: screenState) => {
    console.log('Button clicked! ', screenId);
    setActiveScreen(screenId);
  }, []); 

  return (
    <div>    
      {/* map through screens */}
      {screens && Boolean(screens.length > 0) &&
        <div className="screen-wrapper">
          {screens.map((screen, index) => {
            return (
              <Screen key={index} screenId={screen as screenState} activeScreen={activeScreen === screen} />
            )
          })}
        </div>
      }
      {/* map through buttons */}
      {screens && Boolean(screens.length > 0) &&
        <div className="button-wrapper">
          {screens.map((screen, index) => {
            return (
              <div key={index}>
                {/* buttonClicked calls the handleButtonClick function which returns text of current (i.e. 'Screen one') */}
                <Button text={screen as screenState} buttonClicked={handleButtonClick} isActive={activeScreen === screen} />
              </div>
            )
          })}
        </div>
      }
      <p>{activeScreen === "" ? "No screen actives" : activeScreen + " is active" }</p>
    </div>
  );
}

export default App;
