// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;let arr = [1, 2, [3, 4], 5, [6], [7, [8, 9,[10]]]];
function flatten(arr, d) {
  let res = [];
  if (d == 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i], d - 1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(flatten(arr,3));