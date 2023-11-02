class OrientationRuleBase {
  turn(rover, letter) {
    const simpleFactory = {
      L: this._turnLeft,
      R: this._turnRight,
      MR: this._revert,
    };

    const f = simpleFactory[letter];
    if (f) f(rover);
  }

  move(rover) {
    throw new Error("Not implemented");
  }

  revert(rover) {
    throw new Error("Not implemented");
  }

  _turnRight(rover) {
    throw new Error("Not implemented");
  }

  _turnLeft(rover) {
    throw new Error("Not implemented");
  }
}

module.exports = OrientationRuleBase;
