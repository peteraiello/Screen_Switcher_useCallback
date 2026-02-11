import React, {useState, useCallback} from 'react';
import { Button } from './Button';
import { Screen } from './Screen';
import "./App.css";

const screenOne = "Screen one";
const screenTwo = "Screen two"; 
const screenThree = "Screen three";
const screenFour = "Screen four";
 
const screens = [screenOne, screenTwo, screenThree, screenFour];

function App() {

  const [activeScreen, setActiveScreen] = useState("");

  /*
  const handleButtonClickWithoutCallback = (screenId: string) => {
    console.log('button clicked without callback! ', screenId);
    setActiveScreen(screenId);
  }
  */

  const handleButtonClick = useCallback((screenId: string) => {
    console.log('button clicked! ', screenId);
    setActiveScreen(screenId);
  }, []); 

  return (
    <div>
      {screens && Boolean(screens.length > 0) &&
        <>
          {screens.map((screen, index) => {
            return (
              <Button key={index} text={screen} buttonClicked={handleButtonClick} isActive={activeScreen === screen} />
            )
          })}
        </>
      }

      {screens && Boolean(screens.length > 0) &&
        <div>
          {screens.map((screen, index) => {
            return (
              <Screen key={index} screenId={screen} activeScreen={activeScreen === screen} />
            )
          })}
        </div>
      }

    </div>
  );
}

export default App;
