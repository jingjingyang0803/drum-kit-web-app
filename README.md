# Drum Kit Web App

This is a simple web application that simulates a drum kit.

## How to Use

The drum kit can be played by either clicking on the drum buttons or pressing the corresponding keys on your keyboard.

Each drum button/keypress triggers a drum sound and a brief button animation.

## Code Overview

The JavaScript code for this application includes:

- A loop that attaches a click event listener to each drum button.
- A click event listener that triggers a function to play a sound and animate the button.
- A keypress event listener that does the same as the click event listener but with keyboard keys.
- A function (`makeSound`) that plays a sound based on the button clicked or key pressed.
- A function (`buttonAnimation`) that animates the button when it is pressed (either clicked or keypressed).

## Key Bindings

- "w": Tom-1
- "a": Tom-2
- "s": Tom-3
- "d": Tom-4
- "j": Snare
- "k": Crash
- "l": Kick-bass

Check out the webpage in action in this [YouTube video](https://youtu.be/aYAbjUOV6qY).

Enjoy making beats!
