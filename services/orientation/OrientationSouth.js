const { NORTH, EAST, WEST } = require("../../constants/orientation");
const OrientationRuleBase = require("./OrientationRuleBase");

class OrientationSouth extends OrientationRuleBase {
  move(rover) {
    rover.dicreaseOrdinate();
  }

  revert(rover) {
    rover.changeOrientation(NORTH);
  }

  _turnRight(rover) {
    rover.changeOrientation(WEST);
  }

  _turnLeft(rover) {
    rover.changeOrientation(EAST);
  }
}

module.exports = OrientationSouth;
