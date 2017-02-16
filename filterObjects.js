let array =  [
  {"id": 0, "hp": 100, "type": "townhall", "level": 2},
  {"id": 1, "hp": 100, "type": "farm", "level": 1},
  {"id": 2, "hp": 80, "type": "mine", "level": 1},
  {"id": 3, "hp": 100, "type": "barracks", "level": 1},
  {"id": 4, "hp": 100, "type": "mine", "level": 1},
  {"id": 5, "hp": 75, "type": "mine", "level": 1},
  {"id": 6, "hp": 100, "type": "farm", "level": 1},
  {"id": 7, "hp": 55, "type": "mine", "level": 2}
]

let isMine = function(building) {
  return building.type === "mine";
};

let mines = array.filter(isMine);
console.log(mines);

// let notMines = array.reject(isMine);
// console.log(notMines);

array.forEach(function(building, index) {
  console.log(`Az ${index+1}. épület ${building.type} `);
});

function isMoreThan(building) {
  return building.hp > 79;
}

let countMine = array.filter(isMoreThan);
console.log(countMine);
