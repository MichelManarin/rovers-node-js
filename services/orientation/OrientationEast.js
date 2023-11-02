const { SOUTH, NORTH, WEST } = require("../../constants/orientation");
const OrientationRuleBase = require("./OrientationRuleBase");

class OrientationEast extends OrientationRuleBase {
  move(rover) {
    rover.increaseAbscissa();
  }

  revert(rover) {
    rover.changeOrientation(WEST);
  }

  _turnRight(rover) {
    rover.changeOrientation(SOUTH);
  }

  _turnLeft(rover) {
    rover.changeOrientation(NORTH);
  }
}

module.exports = OrientationEast;
