function StartScreen({ numQ, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the ReactJs Quiz app!</h2>
      <h3>{numQ} questions</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Go!
      </button>
    </div>
  );
}

export default StartScreen;
