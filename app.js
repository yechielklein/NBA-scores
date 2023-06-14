const makeChart = (games, targetTeam) => {
	const ulParent = document.createElement('ol');

	for (let game of games) {
		const gameLi = document.createElement('li');
		gameLi.innerHTML = getScoreLine(game)
		gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');

		ulParent.appendChild(gameLi);
	};
	return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
	const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
	return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;

  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  };

  return `${teamNames} ${scoreLine}`;
};

const chart1 = makeChart(warriorsGames, 'Golden State');
document.body.prepend(chart1);