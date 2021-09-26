import { match } from "assert";
import { log } from "console";
import { readFileSync } from "fs";

// parse and filter input into an number array
let inputLines = readFileSync("input.txt", { encoding: "utf-8" }).split("\n");
// regex capturing four groups
// group 1 - min # appearances of letter
// group 2 - highest # appearances of letter
// group 3 - letter in question
// group 4 - password in plaintext
const re = /^(\d+)-(\d+) (.): (.+)$/;

// matches each lines and keeps only the groups
const groups = inputLines
  .map((input) => input.match(re) || [])
  .map((matches) => matches.slice(1, 5) as [number, number, string, string]);

// solution for part 1 and 2 in one for loop
let partOneCounter = 0;
let partTwoCounter = 0;
for (const [min, max, letter, pw] of groups) {
  // g flag means letter gets matched multiple times
  const matches = pw.match(new RegExp(letter, "g")) || [];
  // validation scheme for part1
  if (matches.length >= min && matches.length <= max) {
    partOneCounter += 1;
  }
  // validation scheme for part 2
  if ((pw[min - 1] === letter) != (pw[max - 1] === letter)) {
    partTwoCounter += 1;
  }
}

console.log(`Part 1 solution: ${partOneCounter}`);
console.log(`Part 2 solution: ${partTwoCounter}`);
