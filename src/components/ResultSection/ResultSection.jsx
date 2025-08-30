import "./ResultSection.css";

function ResultSection({ tipAmount, total, onReset }) {
  return (
    <div className="result-section">
      <div className="result">
        <label>
          Tip Amount <br />
          <small>/ person</small>
        </label>
        <span>{tipAmount}</span>

        <label>
          Total <br />
          <small>/ person</small>
        </label>
        <span>{total}</span>
      </div>

      <div className="button-wrapper">
        <button type="button" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ResultSection;
