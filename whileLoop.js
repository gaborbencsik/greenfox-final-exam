'use strict';

let number = 4;

function whileLoop (x) {
  while (x > 4) {
    x--;
    console.log(x);
  }
};

function doWhileLoop (x) {
  do {
    x--;
    console.log(x);
  }
  while (x > 4)
};

whileLoop(number);
doWhileLoop(number);
