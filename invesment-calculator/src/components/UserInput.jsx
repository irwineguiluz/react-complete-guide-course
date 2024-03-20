export default function UserInput({investmentValues, onChangeValues}) {
  const {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  } = investmentValues;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invesment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(event) => onChangeValues('initialInvestment', event.target.value)}
          />
        </p>
        <p>
          <label>Annual Invesment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={(event) => onChangeValues('annualInvestment', event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(event) => onChangeValues('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={duration}
            onChange={(event) => onChangeValues('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}