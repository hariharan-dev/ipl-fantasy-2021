const GAMES = [
  {
    id: 1,
    title: "MI VS RCB",
    "Adangatha Boys": 0,
    "Adangatha Yellow Team": 0,
    "Kodambakkam Sharks": 0,
    "Rocket1 Heroes": 0,
    scores: {
      "Adangatha Boys": 0,
      "Adangatha Yellow Team": 0,
      "Kodambakkam Sharks": 0,
      "Rocket1 Heroes": 0,
    },
  },
  {
    id: 2,
    title: "CSK VS DC",
    "Adangatha Boys": 1,
    "Adangatha Yellow Team": 4,
    "Kodambakkam Sharks": 2,
    "Rocket1 Heroes": 3,
    scores: {
      "Adangatha Boys": 739.5,
      "Kodambakkam Sharks": 696.5,
      "Rocket1 Heroes": 603.5,
      "Adangatha Yellow Team": 476.5,
    },
  },
  {
    id: 3,
    title: "SRH VS KKR",
    "Adangatha Boys": 2,
    "Adangatha Yellow Team": 4,
    "Kodambakkam Sharks": 3,
    "Rocket1 Heroes": 1,
    scores: {
      "Rocket1 Heroes": 582.5,
      "Adangatha Boys": 539,
      "Kodambakkam Sharks": 536.5,
      "Adangatha Yellow Team": 522.5,
    },
  },
  {
    id: 4,
    title: "RR VS PBKS",
    "Adangatha Boys": 4,
    "Adangatha Yellow Team": 1,
    "Kodambakkam Sharks": 2,
    "Rocket1 Heroes": 3,
    scores: {
      "Adangatha Yellow Team": 790,
      "Kodambakkam Sharks": 777.5,
      "Rocket1 Heroes": 580,
      "Adangatha Boys": 556,
    },
  },
  {
    id: 5,
    title: "KKR VS MI",
    "Adangatha Boys": 1,
    "Adangatha Yellow Team": 2,
    "Kodambakkam Sharks": 4,
    "Rocket1 Heroes": 3,
    scores: {
      "Adangatha Boys": 777.5,
      "Adangatha Yellow Team": 722.5,
      "Rocket1 Heroes": 687,
      "Kodambakkam Sharks": 613.5,
    },
  },
  {
    id: 6,
    title: "SRH VS RCB",
    "Adangatha Boys": 4,
    "Adangatha Yellow Team": 3,
    "Kodambakkam Sharks": 2,
    "Rocket1 Heroes": 1,
    scores: {
      "Rocket1 Heroes": 770.5,
      "Kodambakkam Sharks": 650.5,
      "Adangatha Yellow Team": 571,
      "Adangatha Boys": 544,
    },
  },
  {
    id: 7,
    title: "RR VS DC",
    "Adangatha Boys": 1,
    "Adangatha Yellow Team": 3,
    "Kodambakkam Sharks": 2,
    "Rocket1 Heroes": 4,
    scores: {
      "Adangatha Boys": 617.5,
      "Kodambakkam Sharks": 613.5,
      "Adangatha Yellow Team": 453,
      "Rocket1 Heroes": 429,
    },
  },
  {
    id: 8,
    title: "PBKS VS CSK",
    "Adangatha Boys": 4,
    "Adangatha Yellow Team": 3,
    "Kodambakkam Sharks": 1,
    "Rocket1 Heroes": 2,
    scores: {
      "Kodambakkam Sharks": 525,
      "Rocket1 Heroes": 428,
      "Adangatha Yellow Team": 424.5,
      "Adangatha Boys": 397.5,
    },
  },
  {
    id: 9,
    title: "MI VS SRH",
    "Adangatha Boys": 2,
    "Adangatha Yellow Team": 3,
    "Kodambakkam Sharks": 4,
    "Rocket1 Heroes": 1,
    scores: {
      "Rocket1 Heroes": 597,
      "Adangatha Boys": 537,
      "Adangatha Yellow Team": 505,
      "Kodambakkam Sharks": 486,
    },
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
    name: "Adangatha Boys",
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    totalPts: 0,
    totalScore: 0,
  },
  "Adangatha Yellow Team": {
    name: "Adangatha Yellow Team",
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    totalPts: 0,
    totalScore: 0,
  },
  "Kodambakkam Sharks": {
    name: "Kodambakkam Sharks",
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    totalPts: 0,
    totalScore: 0,
  },
  "Rocket1 Heroes": {
    name: "Rocket1 Heroes",
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    totalPts: 0,
    totalScore: 0,
  },
};
const displayTable = [];

calcualePlayerPositions();
calcualeTotalPts();
preparePointsTable();
addHTMLElements();
enableAccordion();

/**
 * Calculates player position counts & total score
 */
function calcualePlayerPositions() {
  GAMES.forEach((game) => {
    Players.forEach((player) => {
      if (game[player]) {
        pointsTable[player][game[player]]++;
        pointsTable[player].totalScore += game.scores[player];
      }
    });
  });
}

/**
 * Calculates total points based on player positions finished
 */
function calcualeTotalPts() {
  Object.keys(pointsTable).forEach((player) => {
    [1, 2, 3, 4].forEach((position) => {
      pointsTable[player]["totalPts"] +=
        (5 - position) * pointsTable[player][position];
    });
  });
}

/**
 * Forms points table data
 */
function preparePointsTable() {
  Object.keys(pointsTable).forEach((player) => {
    displayTable.push(pointsTable[player]);
  });
  displayTable.sort((playerA, playerB) =>
    playerA.totalPts > playerB.totalPts ? -1 : 1
  );
}

function addHTMLElements() {
  displayTable.forEach((player) => {
    const pTableRow = pointsTableTemp.content.cloneNode(true);
    let playerTD = pTableRow.querySelector("#player");
    playerTD.innerHTML = player.name;

    let pos1TD = pTableRow.querySelector("#pos1");
    pos1TD.innerHTML = player[1];
    let pos2TD = pTableRow.querySelector("#pos2");
    pos2TD.innerHTML = player[2];
    let pos3TD = pTableRow.querySelector("#pos3");
    pos3TD.innerHTML = player[3];
    let pos4TD = pTableRow.querySelector("#pos4");
    pos4TD.innerHTML = player[4];

    let points = pTableRow.querySelector("#points");
    points.innerHTML = player["totalPts"];

    let score = pTableRow.querySelector("#score");
    score.innerHTML = player["totalScore"];

    document.getElementById("points-table").appendChild(pTableRow);
  });

  GAMES.forEach((game) => {
    const matchTemplate = match.content.cloneNode(true);
    let matcNo = matchTemplate.querySelector("#match-no");
    matcNo.innerHTML = `Match ${game.id}`;

    Object.keys(game.scores).forEach((player, index) => {
      let playerScore = matchTemplate.querySelector("#p" + (index + 1));
      playerScore.innerHTML = `${index + 1}. ${player} - ${
        game.scores[player]
      }`;
    });

    document.getElementById("match-history").appendChild(matchTemplate);
  });
}

function enableAccordion() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}
