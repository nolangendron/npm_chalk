var chalk = require("chalk");

var message = chalk.bgGreen(chalk.white("Hello ") + chalk.red.underline("World"));
console.log(message);