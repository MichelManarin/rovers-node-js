const readline = require("readline");

const MissionRoverController = require("./controllers/MissionRoverController");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = (controller) => {
  rl.question(
    "[Y] to continue with the next rover or any other key to abort:",
    (option) => {
      if (option.toUpperCase() !== "Y") {
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
                controller.addRover(landingPosition);
                console.log(
                  "Result Position: ",
                  controller.execute(instructions)
                );
                menu(controller);
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
      try {
        const missionController = new MissionRoverController(Number(size));
        menu(missionController);
      } catch (error) {
        console.log(error.message);
        return rl.close();
      }
    }
  );
};

main();
