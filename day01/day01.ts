import { readFileSync } from "fs";

// parse and filter input into an number array
let inputStrings = readFileSync("input.txt", { encoding: "utf-8" }).split("\n");
inputStrings = inputStrings.filter((input) => input);
let inputNumbers = inputStrings.map((input) => Number(input));

function day01Part01(inputs: number[]): number | null {
  for (const inputOne of inputs) {
    for (const inputTwo of inputs) {
      if (inputOne + inputTwo === 2020) {
        return inputOne * inputTwo;
      }
    }
  }
  return null;
}

function day01Part02(inputs: number[]): number | null {
  for (const inputOne of inputs) {
    for (const inputTwo of inputs) {
      for (const inputThree of inputs) {
        if (inputOne + inputTwo + inputThree === 2020) {
          return inputOne * inputTwo * inputThree;
        }
      }
    }
  }
  return null;
}

console.log(`Solution of day 1 part 1: ${day01Part01(inputNumbers)}`);
console.log(`Solution of day 1 part 2: ${day01Part02(inputNumbers)}`);
