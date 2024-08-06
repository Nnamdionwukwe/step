const steps = [
  "💪Learn React",
  "❤Code Everyday",
  "💼Apply for a Job",
  "🎁Invest your Incomes",
];

function MyApp() {
  const [step, setStep] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div>
      <div className="numbers">
        <div onClick={() => setIsOpen((isOpen) => !isOpen)} className="close">
          ❌
        </div>
      </div>
      {isOpen && (
        <div className="steps">
          <Numbers step={step} />
          <Message step={step} />
          <Button step={step} setStep={setStep} />
        </div>
      )}
    </div>
  );
}

function Numbers({ step }) {
  return (
    <header className="numbers">
      <div className={step >= 1 ? "active" : ""}>1</div>
      <div className={step >= 2 ? "active" : ""}>2</div>
      <div className={step >= 3 ? "active" : ""}>3</div>
      <div className={step >= 4 ? "active" : ""}>4</div>
    </header>
  );
}

function Message({ step }) {
  return (
    <div>
      <div className="message">
        Steps: {step} {steps[step - 1]}
      </div>
    </div>
  );
}

function Button({ setStep, step }) {
  function handleNext() {
    if (step < 4) setStep(step + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div className="buttons">
      <button
        style={{ background: "#7950f2" }}
        onClick={(e) => handlePrevious(e)}
      >
        Previous
      </button>

      <button style={{ background: "#7950f2" }} onClick={(e) => handleNext(e)}>
        next
      </button>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
