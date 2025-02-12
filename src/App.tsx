import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [waitingForNewInput, setWaitingForNewInput] = useState(false);

  const handleKeypadClick = (value: string) => {
    if (display === "0" || waitingForNewInput) {
      setDisplay(value);
      setWaitingForNewInput(false);
    } else {
      setDisplay(display + value);
    }
  };

  const handleOperatorClick = (op: string) => {
    if (operator && previousValue) {
      calculateResult();
    }
    setOperator(op);
    setPreviousValue(display);
    setWaitingForNewInput(true);
  };

  const calculateResult = () => {
    if (!operator || !previousValue) return;
    const n1 = parseFloat(previousValue);
    const n2 = parseFloat(display);
    let result = 0;

    switch (operator) {
      case "add":
        result = n1 + n2;
        break;
      case "subtract":
        result = n1 - n2;
        break;
      case "multiply":
        result = n1 * n2;
        break;
      case "divide":
        result = n2 !== 0 ? n1 / n2 : NaN;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setOperator(null);
    setPreviousValue(null);
    setWaitingForNewInput(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setOperator(null);
    setPreviousValue(null);
    setWaitingForNewInput(false);
  };

  return (
    <main>
      <h1>Calculator</h1>
      <section className="calculator">
        <div className="display" data-cy="display">
          {display}
        </div>

        <div className="operators">
          <button
            className="orange"
            onClick={() => handleOperatorClick("add")}
            data-cy="btn-add"
          >
            +
          </button>
          <button
            className="orange"
            onClick={() => handleOperatorClick("subtract")}
            data-cy="btn-subtract"
          >
            -
          </button>
          <button
            className="orange"
            onClick={() => handleOperatorClick("multiply")}
            data-cy="btn-multiply"
          >
            x
          </button>
          <button
            className="orange"
            onClick={() => handleOperatorClick("divide")}
            data-cy="btn-divide"
          >
            /
          </button>
        </div>

        <div className="keypad">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
            <button
              key={num}
              onClick={() => handleKeypadClick(num)}
              data-cy={`btn-keypad-${num}`}
              className=""
            >
              {num}
            </button>
          ))}
          <button className="clear" onClick={handleClear} data-cy="btn-clear">
            C
          </button>
          <button
            key={"0"}
            onClick={() => handleKeypadClick("0")}
            data-cy={`btn-keypad-0`}
            className=""
          >
            0
          </button>
          <button
            className="equal"
            onClick={calculateResult}
            data-cy="btn-equal"
          >
            =
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
