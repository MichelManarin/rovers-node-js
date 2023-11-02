const { createOrientation } = require("../orientation/factory");
const MovementBase = require("./MovementBase");

class MovementRevert extends MovementBase {
  run(rover) {
    const orientation = createOrientation(rover.getCurrentOrientation());
    if (orientation) orientation.revert(rover);
  }
}

module.exports = new MovementRevert();
