const { SOUTH, EAST, WEST } = require("../../constants/orientation");
const OrientationRuleBase = require("./OrientationRuleBase");

class OrientationNorth extends OrientationRuleBase {
  move(rover) {
    rover.increaseOrdinate();
  }

  revert(rover) {
    rover.changeOrientation(SOUTH);
  }

  _turnRight(rover) {
    rover.changeOrientation(EAST);
  }

  _turnLeft(rover) {
    rover.changeOrientation(WEST);
  }
}

module.exports = OrientationNorth;
