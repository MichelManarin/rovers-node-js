const ExecuteCommander = require("../services/ExecuteCommander");
const MissionRovers = require("../models/MissionRovers");

class MissionRoverController {
  constructor(size) {
    this._mission = new MissionRovers(size);
  }

  addRover(landingPosition) {
    const landingCommand = landingPosition.replace(/\s+/g, "");
    if (landingCommand.length != 3) throw new Error("Invalid Initial Position");

    const [x, y, orientation] = landingCommand;
    this._mission.addRover(x, y, orientation);
  }

  execute(instructions) {
    const instructionsCommand = instructions.replace(/\s+/g, "");
    return ExecuteCommander.run(this._mission, instructionsCommand);
  }
}

module.exports = MissionRoverController;
