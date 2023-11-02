const { createOrientation } = require("../orientation/factory");
const MovementBase = require("./MovementBase");

class MovementMove extends MovementBase {
  run(rover) {
    const orientation = createOrientation(rover.getCurrentOrientation());

    if (orientation) orientation.move(rover);
  }
}

module.exports = new MovementMove();
