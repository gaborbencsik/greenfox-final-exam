(function immediatelyInvoked () {
  let valami = 5;
  console.log(valami);
})();

(function immediatelyInvoked (x) {
  let valami = x;
  console.log(valami);
})(6);

let immediatelyInvoked = (() => {
  let string = "hello bazz";
  return {
      hello: string
  };
})();

console.log(immediatelyInvoked.hello);



// function immediatelyInvoked3 () {
//   let valami = 5;
//   console.log(valami);
// };
//
// immediatelyInvoked3();
