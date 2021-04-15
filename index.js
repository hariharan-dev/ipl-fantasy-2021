const GAMES = [
  {
    id: 1,
    title: "MI VS RCB",
    "Adangatha Boys": 0,
    "Adangatha Yellow Team": 0,
    "Kodambakkam Sharks": 0,
    "Rocket1 Heroes": 0,
  },
  {
    id: 2,
    title: "CSK VS DC",
    "Adangatha Boys": 1,
    "Adangatha Yellow Team": 4,
    "Kodambakkam Sharks": 2,
    "Rocket1 Heroes": 3,
  },
  {
    id: 3,
    title: "SRH VS KKR",
    "Adangatha Boys": 2,
    "Adangatha Yellow Team": 4,
    "Kodambakkam Sharks": 3,
    "Rocket1 Heroes": 1,
  },
  {
    id: 4,
    title: "RR VS PBKS",
    "Adangatha Boys": 4,
    "Adangatha Yellow Team": 1,
    "Kodambakkam Sharks": 2,
    "Rocket1 Heroes": 3,
  },
  {
    id: 5,
    title: "KKR VS MI",
    "Adangatha Boys": 1,
    "Adangatha Yellow Team": 2,
    "Kodambakkam Sharks": 4,
    "Rocket1 Heroes": 3,
  },
  {
    id: 6,
    title: "SRH VS RCB",
    "Adangatha Boys": 4,
    "Adangatha Yellow Team": 3,
    "Kodambakkam Sharks": 2,
    "Rocket1 Heroes": 1,
  },
  {
    id: 7,
    title: "RR VS DC",
    "Adangatha Boys": 1,
    "Adangatha Yellow Team": 3,
    "Kodambakkam Sharks": 2,
    "Rocket1 Heroes": 4,
  },
];
const Players = [
  "Adangatha Boys",
  "Adangatha Yellow Team",
  "Kodambakkam Sharks",
  "Rocket1 Heroes",
];
const pointsTable = {
  "Adangatha Boys": {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    total: 0,
  },
  "Adangatha Yellow Team": {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    total: 0,
  },
  "Kodambakkam Sharks": {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    total: 0,
  },
  "Rocket1 Heroes": {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    total: 0,
  },
};

GAMES.forEach((game) => {
  Players.forEach((player) => {
    if (game[player]) {
      pointsTable[player][game[player]]++;
    }
  });
});
Object.keys(pointsTable).forEach((player) => {
  [1, 2, 3, 4].forEach((position) => {
    pointsTable[player]["total"] +=
      (5 - position) * pointsTable[player][position];
  });
});
console.table(pointsTable);

Object.keys(pointsTable).forEach((player) => {
  const pTableRow = pointsTableTemp.content.cloneNode(true);
  let playerTD = pTableRow.querySelector("#player");
  playerTD.innerHTML = player;

  let pos1TD = pTableRow.querySelector("#pos1");
  pos1TD.innerHTML = pointsTable[player][1];
  let pos2TD = pTableRow.querySelector("#pos2");
  pos2TD.innerHTML = pointsTable[player][2];
  let pos3TD = pTableRow.querySelector("#pos3");
  pos3TD.innerHTML = pointsTable[player][3];
  let pos4TD = pTableRow.querySelector("#pos4");
  pos4TD.innerHTML = pointsTable[player][4];

  let playerTotal = pTableRow.querySelector("#total");
  playerTotal.innerHTML = pointsTable[player]["total"];

  document.getElementById("points-table").appendChild(pTableRow);
});
