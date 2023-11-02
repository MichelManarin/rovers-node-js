class Plateau {
  constructor(size) {
    this._width = size;
    this._height = size;
  }

  validate(rover) {
    const { x: xRover, y: yRover } = rover.getCurrentPosition() || {};

    if (yRover > this._height) {
      throw new Error("Abort! Rover is out of area");
    }

    if (xRover > this._width) {
      throw new Error("Abort! Rover is out of area");
    }
  }
}

module.exports = Plateau;
