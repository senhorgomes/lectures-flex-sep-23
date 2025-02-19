import { announceResult, generateComputerSelection } from "../helpers";

describe('Test announceResult function', ()=> {
    let fakeState; 
    beforeEach(()=> {
      fakeState = {
          compSelection: null,
          playerSelection: null,
          status: 'Waiting',
          cheating: false
      }
    })
    // One for winning
    test('returns Won if the player is "Scissors" and the comp is "Paper"', ()=> {
      // Modify state to include the player selection and compSelection
      fakeState.playerSelection = 'Scissors';
      fakeState.compSelection = 'Paper';
      // assert(testingFunction, expectedResult)
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
    })
    // One for losing
    test('returns Lost if the player is "Paper" and the comp is "Scissors"', ()=> {
      // Modify state to include the player selection and compSelection
      fakeState.playerSelection = 'Paper';
      fakeState.compSelection = 'Scissors';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
    })
    // One for a tied game
    test('returns Tied if the player and comp make the same selection', ()=> {
      fakeState.playerSelection = 'Paper';
      fakeState.compSelection = 'Paper';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied')
    })
    test('returns Waiting if the player and comp have not made their selection', ()=> {
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Waiting')
    })

})

describe('Test computer selection', ()=> {
  // TDD-> Our tests should fail first
  // Then we build code in order for our tests to pass
  // Rinse and repeat

  // All of our different tests
  // We're just going to test that the computer can make a selection
  // Rock, Paper, Scissors
  test(', function generates a selection of either Rock, Paper, or Scissors', ()=> {
    const arrayOfChoices = ['Rock', 'Paper', 'Scissors']
    const computerSelectedChoice = generateComputerSelection();
    // Check if the selectedChoice exists within arrayOfChoices

    expect(arrayOfChoices).toContain(computerSelectedChoice);

  })


  // With cheat mode enabled, it will always choose the opposite of what the user selected

  // Cheat mode enabled, user selected Rock and Computer should select Paper
  test(', ensure Player always loses when cheat mode is enabled and user selected Rock.', ()=> {
    // cheatingMode = true/false, playermode
    const cheatingComputerChoice = generateComputerSelection(true, 'Rock');


    expect(cheatingComputerChoice).toBe('Paper');
  })


  // Cheat mode enabled, user selected Paper and Computer should select Scissors

  // Cheat mode enabled, user selected Scissors and Computer should select Rock


})
