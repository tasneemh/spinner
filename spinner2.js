/*
Refactored Spinner1.js
*/
let time = 0;
const arr = ["|", "-", "\\", "|"];
let j = 0;
while (j < 2) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      process.stdout.write("\r" + arr[i] + " ");
    }, time);
    time += 200;
  }
  j++;
}
