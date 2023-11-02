const { createOrientation } = require("../orientation/factory");
const MovementBase = require("./MovementBase");

class MovementTurnLeft extends MovementBase {
  run(rover) {
    const orientation = createOrientation(rover.getCurrentOrientation());
    if (orientation) orientation.turn(rover, "L");
  }
}

module.exports = new MovementTurnLeft();
