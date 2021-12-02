var fs = require("fs");
fs.readFile("./positions.txt", function (err, data) {
  if (err) throw err;
  var array = data.toString().split("\n");
  let forward = 0;
  let aim = 0;
  let depth = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i].includes("forward")) {
      let forwardNumber = array[i].replace("forward ", "");
      forward += Number(forwardNumber);
      depth += Number(forwardNumber) * aim;
    }
    if (array[i].includes("down")) {
      let downNumber = array[i].replace("down ", "");
      aim += Number(downNumber);
    }
    if (array[i].includes("up")) {
      let upNumber = array[i].replace("up ", "");
      aim -= Number(upNumber);
    }
  }

  console.log(depth);
  console.log(forward);

  let multiplied = forward * depth;

  console.log(multiplied);
});
