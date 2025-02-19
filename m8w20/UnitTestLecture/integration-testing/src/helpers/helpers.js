export const announceResult = (playerSelection, compSelection) => {
    const lookup = {
      'Scissors': 'Paper',
      'Paper': 'Rock',
      'Rock': 'Scissors'
    };
    if (!(playerSelection && compSelection)) {
      return 'Waiting';
    }
    // Tree === Tree
    if (lookup[playerSelection] === compSelection) {
      return 'Won';
    }
    if (lookup[compSelection] === playerSelection) {
      return 'Lost';
    }
    return 'Tied';
  };
  


  export const genFeedbackMessage = (status) => {
    const lookup = {
      Waiting: 'Waiting for your choice!',
      Won: 'You win!!',
      Lost: 'Too bad! Better luck next time.',
      Tied: 'Tie game'
    };
    return lookup[status];
  };

  // Create a new helper function to generate the computer selection
  export const generateComputerSelection = (cheatingMode, playerSelection) => {

    if(cheatingMode){
      // Simplify this logic a bit more
      if(playerSelection === "Rock"){
        return "Paper";
      }
      if(playerSelection === "Paper"){
        return "Scissors";
      }
      if(playerSelection === "Scissors"){
        return "Rock";
      }

    }

    const arrayOfChoices = ['Rock', 'Paper', 'Scissors'];
    // Will generate a number between 0-2
    const randomIndex = Math.floor(Math.random() * arrayOfChoices.length);
  
    return arrayOfChoices[randomIndex];

  }