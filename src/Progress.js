function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      {/* <span>Question: </span> */}
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      {/* <span>Points: </span>
      <progress max={maxPossiblePoints} value={points} /> */}
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
      <p>
        <strong>{index + 1}</strong>/{numQuestions}
      </p>
    </header>
  );
}

export default Progress;
