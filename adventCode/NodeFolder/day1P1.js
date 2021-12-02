var fs = require("fs");
let listOfGreaterNumber = [];
fs.readFile("./list.txt", function (err, data) {
  if (err) throw err;
  var array = data.toString().split("\n");
  console.log(array.length);

    for (var i = 0; i < array.length - 1; i++) {
      if(array[i] <= array[i+1]){
          listOfGreaterNumber.push(array[i + 1])
      }     
    }
  listOfGreaterNumber.forEach(number => console.log(number))

  console.log(listOfGreaterNumber.length)
 
});

