const GAMES = games();
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
  displayTable.sort((playerA, playerB) => {
    if(playerA.totalPts === playerB.totalPts) {
      return playerA.totalScore > playerB.totalScore ? -1 : 1;
    }
    return playerA.totalPts > playerB.totalPts ? -1 : 1;
  }
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
    matcNo.innerHTML = `MATCH ${game.id}<br>(${game.title})`;
    
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
