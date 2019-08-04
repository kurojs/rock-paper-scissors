export const actions = [
    { name: 'rock', uri: 'https://www.tynker.com/projects/images/5b650453949b564b1b8b456c/button-blank---bua.png' },
    { name: 'paper', uri: 'https://www.tynker.com/projects/images/5b65045876f29367518b4593/button-blank---bao.png' },
    { name: 'scissors', uri: 'https://www.tynker.com/projects/images/5b65047d949b56701b8b456a/button-blank---keo.png' },
  ];
  
  export function getRoundOutcome(userChoice) {
    const computerChoice = randomComputerChoice().name;
    let result;
  
    if (userChoice === 'rock') {
      result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
      result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
      result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }
  
    if (userChoice === computerChoice) result = 'Tie game!';
    return [result, computerChoice];
  }
  
  const randomComputerChoice = () =>
    actions[Math.floor(Math.random() * actions.length)];
  