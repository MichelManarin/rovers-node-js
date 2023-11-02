const { SOUTH, NORTH, WEST, EAST } = require("../../constants/orientation");

const OrientationWest = require("./OrientationWest");
const OrientationEast = require("./OrientationEast");
const OrientationSouth = require("./OrientationSouth");
const OrientationNorth = require("./OrientationNorth");

function createOrientation(character) {
  switch (character) {
    case NORTH:
      return new OrientationNorth();
    case SOUTH:
      return new OrientationSouth();
    case WEST:
      return new OrientationWest();
    case EAST:
      return new OrientationEast();
    default:
      return null;
  }
}

module.exports = { createOrientation };
