class Rover {
  constructor(x, y, orientation) {
    this._x = Number(x);
    this._y = Number(y);
    this._orientation = orientation;
  }

  getCurrentPosition() {
    return { x: this._x, y: this._y };
  }

  getCurrentOrientation() {
    return this._orientation;
  }

  getCurrentPositionAsString() {
    return `${this._x} ${this._y} ${this._orientation}`;
  }

  changeOrientation(newOrientation) {
    this._orientation = newOrientation;
  }

  increaseAbscissa() {
    this._x += 1;
  }

  increaseOrdinate() {
    this._y += 1;
  }

  dicreaseAbscissa() {
    this._x -= 1;
  }

  dicreaseOrdinate() {
    this._y -= 1;
  }
}

module.exports = Rover;
