import { useState, useEffect } from "react";
import FormSection from "./components/FormSection/FormSection";
import ResultSection from "./components/ResultSection/ResultSection";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [split, setSplit] = useState("");
  const [error, setError] = useState("");
  const [tipAmount, setTipAmount] = useState("$0.00");
  const [total, setTotal] = useState("$0.00");

  function handleBillChange(e) {
    setBill(e.target.value);
  }

  function handleTipSelect(value) {
    setTip(value.toString());
    setCustomTip("");
  }

  function handleCustomTipChange(e) {
    const value = e.target.value;
    setCustomTip(value);
    setTip(value);
  }

  function handleSplitChange(e) {
    const value = e.target.value;
    const numericValue = parseFloat(value);

    if (value === "") {
      setError("");
    } else if (numericValue === 0) {
      setError("Can't be zero");
    } else if (numericValue <= 0) {
      setError("Above zero");
    } else {
      setError("");
    }

    setSplit(value);
  }

  function calculateTip() {
    const billNum = parseFloat(bill);
    const tipNum = parseFloat(tip);
    const splitNum = parseFloat(split);

    if (isNaN(billNum) || isNaN(tipNum) || isNaN(splitNum) || splitNum <= 0) {
      setTipAmount("$0.00");
      return;
    }

    const result = ((billNum / splitNum) * (tipNum / 100)).toFixed(2);
    setTipAmount(`$${result}`);
  }

  function calculateTotal() {
    const billNum = parseFloat(bill);
    const tipNum = parseFloat(tip);
    const splitNum = parseFloat(split);

    if (isNaN(billNum) || isNaN(tipNum) || isNaN(splitNum) || splitNum <= 0) {
      setTotal("$0.00");
      return;
    }

    const percentage = 1 + tipNum / 100;
    const result = ((billNum * percentage) / splitNum).toFixed(2);
    setTotal(`$${result}`);
  }

  function handleReset() {
    setBill("");
    setTip("");
    setSplit("");
    setCustomTip("");
    setError("");
    setTipAmount("$0.00");
    setTotal("$0.00");
  }

  useEffect(() => {
    calculateTip();
    calculateTotal();
  }, [bill, tip, split]);

  return (
    <>
      <h1 className="title">
        SPLI <br />
        TTER
      </h1>
      <div className="container">
        <FormSection
          bill={bill}
          split={split}
          error={error}
          customTip={customTip}
          onBillChange={handleBillChange}
          onSplitChange={handleSplitChange}
          onTipSelect={handleTipSelect}
          onCustomTipChange={handleCustomTipChange}
        />
        <ResultSection
          tipAmount={tipAmount}
          total={total}
          onReset={handleReset}
        />
      </div>
    </>
  );
}

export default App;
