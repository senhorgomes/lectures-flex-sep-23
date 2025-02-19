const Computer = (props) => {
  const { state, setState } = props;

  return (
    <section className="computer">
      <span
        role="img"
        aria-label="robot"
        data-testid="robot-icon"
        className={state.cheating ? "cheating" : ""}
        // modify the state.cleaning to be true/false
        onClick={()=> setState((prev) => ({...prev, cheating: !prev.cheating}))}
      >
        🤖
      </span>
      <div>
        <h1>Good game to you</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="rock">
              {state.compSelection === "Rock" ? "⛰️" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="scissors">
              {state.compSelection === "Scissors" ? "✂️" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="paper">
              {state.compSelection === "Paper" ? "📄" : " ? "}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Computer;
