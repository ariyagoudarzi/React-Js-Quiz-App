function ResetBtn({ dispatch }) {
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "reset" })}>
      Reset
    </button>
  );
}

export default ResetBtn;
