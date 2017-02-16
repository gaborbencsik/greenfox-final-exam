let integerArray = [1, 2, 22, 3, 33, 4, 5, 55, 6, 7, 8, 9];
let emptyArray = [];
let counterResult = 0;

for (let i = 0; i < integerArray.length; i++) {
  if (integerArray[i] < 5) {

    console.log(`érték: ${integerArray[i]}, index: ${i}`);

    emptyArray.push(integerArray[i]);

    counterResult++;
  }
}

console.log(emptyArray);
console.log(`Darab: ${counterResult}`);
