import "./TipSelector.css";

function TipSelector({ onSelectTip, customTip, onCustomTipChange }) {
  const options = [5, 10, 15, 25, 50];

  return (
    <div className="tip-selector">
      {options.map((value) => (
        <button type="button" key={value} onClick={() => onSelectTip(value)}>
          {value}%
        </button>
      ))}
      <input
        type="number"
        placeholder="Custom"
        value={customTip}
        onChange={onCustomTipChange}
        className="custom-input"
      />
    </div>
  );
}

export default TipSelector;
