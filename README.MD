**HiHello coding challenge!**

Here I'll document my steps taken to replicating the calculator app with basic add, subtract, multiply, and divide functionality.

_Steps:_

- Ran Expo init and chose the minimal Typescript template
- Began working on the UI
  - Started with the result container vs the buttons container - used flex to get the right height
  - Broke the screen up between the different button functions - used views and flex to do so
  - Started with the numbers 0-9 and displaying them through a FlatList on the screen before estimating their width and height
  - Repeated the process for each of the functional/arithmetic buttons
  - Thought about edgecases - adding more than one '.' -> how to add commas to values in the thousands
- Began working on the functionality
  - useState is holding our "result" value
  - Needed another useState for a "current" value
  - Created a reset function to clear state values
  - Created an arithmetic function to change UI colors and created an arithmetic value state
  - Realized it's clearer to have previous, current, and result state values
  - Created a compute function w/ a switch based on the arithmetic operation
  - Minor logical work to get multiple arithmetic operations working
  - Minor refactors to make the component more legible

If I had more time:
Install the correct fonts for the numbers
Get the decimal point working
