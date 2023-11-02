const { createOrientation } = require("../orientation/factory");
const MovementBase = require("./MovementBase");

class MovementTurnRight extends MovementBase {
  run(rover) {
    const orientation = createOrientation(rover.getCurrentOrientation());
    if (orientation) orientation.turn(rover, "R");
  }
}

module.exports = new MovementTurnRight();
