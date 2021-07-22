const args = process.argv.slice(2);

let reverse = function(strings) {
  let result = "";
  for (let x = 0; x < strings.length; x++) {
    for (let y = strings[x].length - 1; y >= 0; y--) {
      result += strings[x][y];
    }
    if (x !== strings.length - 1) {
      result += "\n";
    }
  }
  return result;
};

console.log(reverse(args));
