"use strict"
const nums = [0, 2, 4, 8];

let concatenated = "";
for (let i = 0; i < nums.length; i++) {
  concatenated += nums[i].toString();
}
alert( concatenated);