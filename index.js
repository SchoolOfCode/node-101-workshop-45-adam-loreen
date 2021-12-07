import myCollection from "./collection.js";
import chalk from "chalk";

//console.log(myCollection);

function describeItem(i) {
  let name = i.name;
  let whatILike = i.whatILike;
  let count = i.count;

  if (count === 1) {
    console.log(
      "I have a " +
        chalk.cyan(name) +
        " Here's what I like about it: " +
        chalk.green(whatILike)
    );
  } else {
    console.log(
      "I have " +
        chalk.yellow(count) +
        " " +
        chalk.cyan(name) +
        "s. Here's what I like about them: " +
        chalk.green(whatILike)
    );
  }
}
//describeItem(myCollection[1])
//describeItem(myCollection)

function describeCollection(collection) {
  collection.forEach(describeItem);
}

describeCollection(myCollection);
