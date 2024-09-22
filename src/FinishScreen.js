function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const persentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPossiblePoints} ({Math.ceil(persentage)}
        %)
      </p>
      <p className="highscore">Highscore: ({highscore})</p>
    </>
  );
}

export default FinishScreen;
