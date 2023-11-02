const { NORTH, EAST, SOUTH } = require("../../constants/orientation");
const OrientationRuleBase = require("./OrientationRuleBase");

class OrientationWest extends OrientationRuleBase {
  move(rover) {
    rover.dicreaseAbscissa();
  }

  revert(rover) {
    rover.changeOrientation(EAST);
  }

  _turnRight(rover) {
    rover.changeOrientation(NORTH);
  }

  _turnLeft(rover) {
    rover.changeOrientation(SOUTH);
  }
}

module.exports = OrientationWest;
