# Screen Switching App using useCallback 

Create an app featuring 4 buttons (screen 1, screen 2, screen 3 and screen 4). Each button activates a screen. When one screen is active, the other screens should turn off. Each button should be a child component, and activate a screen. Use useCallback to avoid callback hell and stop child components from re-rendering when values haven't changed. 

# App behaviour notes without using callback for handleButtonClick 
Component loads: All components rerender
Event: Button one clicked!
All components rerender!
Event: Button two clicked! 
All components rerender! 
Event: Button three clicked! 
All components rerender! 
... etc, etc

# App behaviour notes on order with callback: 
Component mounts
All components render! (button one, button two, button three, button four, screen one, screen two, etc...)
Event: Button one clicked! 
Button one rerenders, screen one rerenders
Event: Button two clicked! 
Button one rerenders, button two rerenders, screen one rerenders, screen two rerenders
Event: Button three clicked! 
Button two rerenders, button three rerenders, screen two rerenders, screen three rerenders
... etc, etc

# Key things two remember
- useCallback should be used to avoid unnecessary rerenders for functions passed from the parent to the child components (component rerendering should only be triggered when something has changed).
- Inline arrow functions break memoization (React thinks it's a new reference). Instead of implementing your function like this `buttonClicked={() => handleButtonClick(screenOne)}` pass a stable function, i.e, `buttonClicked={handleButtonClick}`

# URL
https://screen-switcher-use-callback.vercel.app