import { useEffect } from 'react';
import { announceResult, generateComputerSelection } from '../helpers/helpers';

const Player = (props) => {
  const {playerSelection, compSelection, cheating} = props.state;
  const {setState} = props;
  const options = [
    ['Rock', '⛰️'],
    ['Scissors', '✂️'],
    ['Paper', '📄']
  ];

  useEffect(() => {
    if (playerSelection) {
      // const compSelection = "Rock";
      // Create a function that randomly selects for the computer/AI
      const compSelection = generateComputerSelection(cheating, playerSelection)
      setState(prevState => ({ ...prevState, compSelection }));
    }
    if(playerSelection && compSelection){
      const status = announceResult(playerSelection, compSelection);
      setState(prevState => ({ ...prevState, status }));
    }
  }, [playerSelection, compSelection, setState]);

  const resetState = () => {
    setState(prevState => ({
        ...prevState,
        playerSelection: null,
        compSelection: null,
        status: 'Waiting'
      }
    ));
  };

  const registerPlayerItem = (value, updater) => {
    updater(prevState => ({ ...prevState, playerSelection: value }));
  };

  return (
    <section className="player">
      <span
        role="img"
        aria-label="player"
        onClick={resetState}
      >👤</span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">

          { options.map((option) => {
            const [choice, symbol] = option;
            return (
              <button
                onClick={() => registerPlayerItem(choice, setState)}
                type="button"
                value={choice}
                key={choice}
                data-testid={choice}
              >
                <span
                  role="img"
                  aria-label={choice.toLowerCase()}
                  // data-testid={choice}
                >
                  {symbol}
                </span>
              </button>
            );
          }) }

        </div>
      </div>
    </section>
  );
};

export default Player;