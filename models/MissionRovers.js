const Plateau = require("./Plateau.js");
const Rover = require("./Rover.js");

class MissionRovers {
  constructor(plateauSize) {
    this._plateau = new Plateau(plateauSize, plateauSize);
    this._rovers = [];
  }

  addRover(initialX, initialY, currentOrientation) {
    const newRover = new Rover(initialX, initialY, currentOrientation);
    this._rovers.push(newRover);
    return newRover;
  }

  getLastRover() {
    return this._rovers[this._rovers.length - 1];
  }

  validateOut(rover) {
    this._plateau.validate(rover);
  }


}

module.exports = MissionRovers;
