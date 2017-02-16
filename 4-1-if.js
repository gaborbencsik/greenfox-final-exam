for (let i = 0; i < 10; i++) {
  if (i < 2) {
    console.log(i, "kicsi");
  } else if (i === 2) {
    console.log(i, "2 is kicsi");
  } else if (i > 2 && i <= 6) {
    console.log(i, "közepes");
  } else  if (i > 6){
    console.log(i, "nagy");
  } else {
    console.log(i, "nem irja ki");
  }
};
