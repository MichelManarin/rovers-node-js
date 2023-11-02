const MissionRoverController = require("../controllers/MissionRoverController");

const makeSut = () => {
  return new MissionRoverController();
};

describe("Voyager examples", () => {
  test("example 1", () => {
    const sut = makeSut();
    sut.addRover("1 2 N");
    const response = sut.execute("LMLMLMLMM");
    expect(response).toBe("1 3 N");
  });
  test("example 2", () => {
    const sut = makeSut();
    sut.addRover("3 3 E");
    const response = sut.execute("MRRMMRMRRM");
    expect(response).toBe("2 3 S");
  });

  test("example 3", () => {
    const sut = makeSut();
    sut.addRover("4 4 S");
    const response = sut.execute("");
    expect(response).toBe("4 4 S");
  });

  test("revert command = M. L and R makes the rover spin 90 degrees ", () => {
    const sut = makeSut();
    sut.addRover("2 2 E");
    const response = sut.execute("MLR");
    expect(response).toBe("2 2 W");
  });

  test("rover out of area throw error", () => {
    const sut = makeSut();
    sut.addRover("4 4 E");
    const executeFunction = () => sut.execute("MMMMM");
    expect(executeFunction).toThrow();
  });
});
