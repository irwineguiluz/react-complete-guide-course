import { useState } from "react";

import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { calculateInvestmentResults } from "./util/investment.js";

const INVESTMENT_DEFAULT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};

function App() {
  const [investmentValues, setInvestmentValues] = useState(INVESTMENT_DEFAULT_VALUES);
  const invesmentResults = calculateInvestmentResults(investmentValues);

  function handleChangeValues(investmentName, newInvesmentValue) {
    setInvestmentValues(prevInvestmentValues => {
      return {
        ...prevInvestmentValues,
        [investmentName]: +newInvesmentValue
      }
    });
  }

  return (
    <main>
      <UserInput
        investmentValues={investmentValues}
        onChangeValues={handleChangeValues}
      />
      {investmentValues.duration && <Result data={invesmentResults} />}
    </main>
  );
}

export default App;
