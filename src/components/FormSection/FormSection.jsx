import TipSelector from "../TipSelector/TipSelector";
import "./FormSection.css";

function FormSection({
  bill,
  split,
  error,
  customTip,
  onBillChange,
  onSplitChange,
  onTipSelect,
  onCustomTipChange,
}) {
  return (
    <div className="form-section">
      <label>Bill</label>
      <input
        type="number"
        placeholder="0"
        value={bill}
        onChange={onBillChange}
      />

      <label>Select Tip %</label>
      <TipSelector
        onSelectTip={onTipSelect}
        customTip={customTip}
        onCustomTipChange={onCustomTipChange}
      />
      <label>
        Number Of People {error && <span className="error">{error}</span>}
      </label>
      <input
        type="number"
        placeholder="0"
        value={split}
        onChange={onSplitChange}
      />
    </div>
  );
}

export default FormSection;
