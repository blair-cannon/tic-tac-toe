let btn = document.createElement("button");
btn.onclick = function () {
    btn.innerHTML = "X";
  };
document.body.appendChild(btn);


// const array = [1, 2, 2, 2, 5];

// // checks whether an element is even
// const threeInARow = (array, i) =>
//  array[i] = array[i+1] = array[i+2];


// console.log(array.some(threeInARow));
// // expected output: true

function threeInARow(index, array) {
  return array[index] = array[index+1] = array[index+2];
}

console.log([1, 0, 1, 1, 1].some(threeInARow));  // true.  yet shows up false ??
console.log([0, 1, 0, 1, 0].some(threeInARow)); // false
