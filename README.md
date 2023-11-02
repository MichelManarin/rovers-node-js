# Mars Rover in JavaScript 🚀

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.
This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.
A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
In order to control a rover , NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading.
Assume that the square directly North from (x, y) is (x, y 1).

## Input

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover’s position, and the second line is a series of instructions telling the rover how to explore the plateau.
The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.
Each rover will be finished sequentially, which means that the second rover won’t start to move until the first one has finished moving.

## Output

The output for each rover should be its final co-ordinates and heading.

## Rover Data Example

### Example 1

Landing Position: 1 2 N \
Instruction: LMLMLMLMM \
Final Position: 1 3 N

### Example 2
Landing Position: 3 3 E \
Instruction: MRRMMRMRRM \
Final Position: 2 3 S


## What we Expect

The application should allow the user to interact with it to define the plateau size and the rover data.

We will evaluate your code structure, readability, organization, clean code, and of course if the application works as expected.

------------------------------------------------------------------

## How to run

### Prerequisites

```
Node.js bigger than v15
```

(I used the v16.18.0 to development")

### Instalation

```
npm install
```

or 

```
yarn install
```


### Run tests

```
npm test
```

### Run terminal

node index.js


### Help

After running the project, a menu will be displayed to input the information

## External packages

I used the "readline" package to capture user inputs and "Jest" to create tests.

## Tests Results:

![test](https://user-images.githubusercontent.com/6588753/280136101-b7db6226-3965-4656-8e29-1b3faf03dae5.png)


## Operation:
![operation](https://user-images.githubusercontent.com/6588753/280136104-85336527-88c5-47c7-958e-489c614dcaeb.png)

