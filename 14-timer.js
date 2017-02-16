function logText () {
  console.log("I'm delayed");
}
function logTextInterval () {
  console.log("I'm always delayed");
}

console.log("start");
setTimeout(logText, 2000);
setInterval(logTextInterval, 2000);
