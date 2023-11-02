const readline = require("readline");

const MissionRoverController = require("./controllers/MissionRoverController");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = () => {
  rl.question(
    "[Y] to continue with the next rover or any other key to abort:",
    (option) => {
      if (option !== "Y") {
        rl.write("closing...");
        return rl.close();
      }
      rl.question(
        "Type a landing position (example: 1 2 N): ",
        (landingPosition) => {
          rl.question(
            "Type a instructions (example: LMLMLMLMM): ",
            (instructions) => {
              try {
                const missionController = new MissionRoverController();
                missionController.addRover(landingPosition);
                console.log(
                  "Result Position: ",
                  missionController.execute(instructions)
                );
                menu();
              } catch (error) {
                rl.write(error.message);
                return rl.close();
              }
            }
          );
        }
      );
    }
  );
};

const main = () => {
  rl.question(
    "Enter an integer to define the plateau size (example: 5): ",
    (size) => {
      size = Number(size);
      menu(rl);
    }
  );
};

main();
