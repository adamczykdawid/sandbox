const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

/////////////////////////BY MYSELF
// const ulParent = document.createElement("ul"); //tworzę element ul
// for (let game of warriorsGames) {
//   //iteruję, żeby utworzyć odpowiednie elementy li
//   const { homeTeam, awayTeam } = game; // restructuring object to iteration - game.

//   const gameLi = document.createElement("li"); //creating li element every time entering iteration
//   const { team: hTeam, points: hPoints } = homeTeam; //restructuring team names and points to new variables
//   const { team: aTeam, points: aPoints } = awayTeam;
//   const teamNames = `${aTeam} @ ${hTeam}`; //basic listing of the teams with the order
//   let scoreLine; //variable scoreline...
//   if (aPoints > hPoints) {
//     scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
//   } else {
//     scoreLine = `${aPoints} - <b>${hPoints}</b>`;
//   } //bolding the winner

//   const warriors = hTeam === "Golden State" ? homeTeam : awayTeam; //jeśli nazwa drużyny która gra w domu to GSW, to nowa zmienna warriors równa się homeTeam {hteam: 'GSW', hPoints: noi tu punkty} a jeśli tam nie ma GSW to przypisuje to awayTeam. dzięki temu:
//   gameLi.classList.add(warriors.isWinner ? "win" : "loss"); //dodaj classę 'win' do elementu li jeśli GSW is a winner i na odwrót
//   gameLi.innerHTML = `${teamNames} ${scoreLine}`; //wypis to wszystko dla li w danej iteracji
//   ulParent.appendChild(gameLi); //dodaj dziecko ula.
// }

/////////////by Myself
const makeChart = (games, targetTeam) => {
  const parentUl = document.createElement("ul");

  for (let game of games) {
    const { homeTeam, awayTeam } = game;

    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreLine(game);

    isWinner(game, targetTeam);

    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss");

    parentUl.appendChild(gameLi);
  }
  return parentUl;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreBoard;
  if (aPoints > hPoints) {
    scoreBoard = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreBoard = `${aPoints}-<b>${hPoints}</b>`;
  }
  return `${teamNames} ${scoreBoard}`;
};

const gsSection = document.querySelector("#gsw");
const hrSection = document.querySelector("#hr");

const gsChart = makeChart(warriorsGames, "Golden State");

const hrChart = makeChart(warriorsGames, "Houston");
gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);
