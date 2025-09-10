
import './App.css'
import React, { useState } from "react";

export default function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  // Handle number input
  const handleNumber = (num) => {
    setCurrentValue((prev) =>
      prev === "0" || prev === "Error" ? num : prev + num
    );
  };

  // Handle decimal
  const handleDecimal = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue((prev) => prev + ".");
    }
  };

  // Handle clear
  const handleClear = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
  };

  // Handle backspace
  const handleBackspace = () => {
    setCurrentValue((prev) =>
      prev.length > 1 ? prev.slice(0, -1) : "0"
    );
  };

  // Handle operator (+, -, ×, ÷)
  const handleOperator = (op) => {
    setPreviousValue(currentValue);
    setCurrentValue("0");
    setOperator(op);
  };

  // Handle calculation
  const handleEqual = () => {
    if (!operator || previousValue === null) return;
    let result = 0;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);

    switch (operator) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "×":
        result = prev * curr;
        break;
      case "÷":
        result = curr !== 0 ? prev / curr : "Error";
        break;
      case "%":
        result = prev % curr;
        break;
      default:
        return;
    }

    setCurrentValue(result.toString());
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-80">
        {/* Display */}
        <div className="bg-black text-white text-right text-2xl rounded-lg p-4 mb-4 h-16 flex items-center justify-end overflow-x-auto">
          {currentValue}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear} className="bg-red-500 text-white p-4 rounded-lg">C</button>
          <button onClick={handleBackspace} className="bg-yellow-500 text-white p-4 rounded-lg">⌫</button>
          <button onClick={() => handleOperator("%")} className="bg-gray-600 text-white p-4 rounded-lg">%</button>
          <button onClick={() => handleOperator("÷")} className="bg-blue-500 text-white p-4 rounded-lg">÷</button>

          <button onClick={() => handleNumber("7")} className="bg-gray-700 text-white p-4 rounded-lg">7</button>
          <button onClick={() => handleNumber("8")} className="bg-gray-700 text-white p-4 rounded-lg">8</button>
          <button onClick={() => handleNumber("9")} className="bg-gray-700 text-white p-4 rounded-lg">9</button>
          <button onClick={() => handleOperator("×")} className="bg-blue-500 text-white p-4 rounded-lg">×</button>

          <button onClick={() => handleNumber("4")} className="bg-gray-700 text-white p-4 rounded-lg">4</button>
          <button onClick={() => handleNumber("5")} className="bg-gray-700 text-white p-4 rounded-lg">5</button>
          <button onClick={() => handleNumber("6")} className="bg-gray-700 text-white p-4 rounded-lg">6</button>
          <button onClick={() => handleOperator("-")} className="bg-blue-500 text-white p-4 rounded-lg">−</button>

          <button onClick={() => handleNumber("1")} className="bg-gray-700 text-white p-4 rounded-lg">1</button>
          <button onClick={() => handleNumber("2")} className="bg-gray-700 text-white p-4 rounded-lg">2</button>
          <button onClick={() => handleNumber("3")} className="bg-gray-700 text-white p-4 rounded-lg">3</button>
          <button onClick={() => handleOperator("+")} className="bg-blue-500 text-white p-4 rounded-lg">+</button>

          <button onClick={() => handleNumber("0")} className="col-span-2 bg-gray-700 text-white p-4 rounded-lg">0</button>
          <button onClick={handleDecimal} className="bg-gray-700 text-white p-4 rounded-lg">.</button>
          <button onClick={handleEqual} className="bg-green-500 text-white p-4 rounded-lg">=</button>
        </div>
      </div>
    </div>
  );
}
