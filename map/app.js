// Array.map()
// The map() method of Array  creates a new array.
// It calls a provided callbackFn for each element in an array.

const numbers = [1, 3, 5, 7];

const add = numbers.map((num) => {
  return num + 2;
});

// console.log(add);
// console.log(numbers);

const fruits = ["apple", "orange", "banana"];

const printFruit = fruits.map((fruit) => {
  //   return console.log(`I like ${fruit}`);
});

// use index with map
const printIndex = numbers.map((num, index) => {
  //   return console.log(index);
});

const findNumber = (array) => {
  let bigNumber = [];
  array.map((num, index) => {
    if (index > 2) {
      bigNumber.push(num);
    }
  });
  return bigNumber;
};

// console.log(findNumber(numbers));

// Change array from strings to numbers

const stringArray = ["1", "2", "3"];

const numbersArray = stringArray.map((item) => {
  console.log(Number(item));
  //   console.log(item);
});
