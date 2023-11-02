const { createOrientation } = require("../services/orientation/factory");
const OrientationWest = require("../services/orientation/OrientationWest");
const OrientationEast = require("../services/orientation/OrientationEast");
const OrientationNorth = require("../services/orientation/OrientationNorth");
const OrientationSouth = require("../services/orientation/OrientationSouth");

const makeSut = () => {
  return createOrientation;
};

describe("Factory orientation test", () => {
  test("OrientationWest", () => {
    const sut = makeSut();
    const response = sut("W");

    expect(response instanceof OrientationWest).toBe(true);
  });
  test("OrientationEast", () => {
    const sut = makeSut();
    const response = sut("E");

    expect(response instanceof OrientationEast).toBe(true);
  });

  test("OrientationNorth", () => {
    const sut = makeSut();
    const response = sut("N");

    expect(response instanceof OrientationNorth).toBe(true);
  });

  test("OrientationSouth", () => {
    const sut = makeSut();
    const response = sut("S");

    expect(response instanceof OrientationSouth).toBe(true);
  });

  test("Invalid Orientation", () => {
    const sut = makeSut();
    const response = sut("S");

    expect(response).toEqual({});
  });
});
