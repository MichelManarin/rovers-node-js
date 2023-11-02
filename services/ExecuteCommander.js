const { MOVE, RIGHT, LEFT, SPIN } = require("../constants/movement");

const MovementMove = require("./movements/MovementMove");
const MovementRevert = require("./movements/MovementRevert");
const MovementTurnLeft = require("./movements/MovementTurnLeft");
const MovementTurnRight = require("./movements/MovementTurnRight");

class ExecuteCommander {
  run(mission, instructionsCommand) {
    const instructionsToProcess = instructionsCommand
      .toUpperCase()
      .replaceAll("MLR", SPIN);

    const rover = mission.getLastRover();

    for (const caracter of instructionsToProcess) {
      switch (caracter) {
        case SPIN:
          MovementRevert.run(rover);
          break;
        case MOVE:
          MovementMove.run(rover);
          break;
        case LEFT:
          MovementTurnLeft.run(rover);
          break;
        case RIGHT:
          MovementTurnRight.run(rover);
          break;
      }
    }

    mission.validateOut(rover);
    return rover.getCurrentPositionAsString();
  }
}

module.exports = new ExecuteCommander();
