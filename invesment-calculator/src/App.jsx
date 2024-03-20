import { useState } from "react";

import UserInput from "./components/UserInput.jsx";

const INVESTMENT_DEFAULT_VALUES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
};

function App() {
  const [investmentValues, setInvestmentValues] = useState(INVESTMENT_DEFAULT_VALUES);

  function handleChangeValues(investmentName, newInvesmentValue) {
    setInvestmentValues(prevInvestmentValues => {
      return {
        ...prevInvestmentValues,
        [investmentName]: newInvesmentValue
      }
    });
  }

  return (
    <main>
      <UserInput
        investmentValues={investmentValues}
        onChangeValues={handleChangeValues}
      />
    </main>
  );
}

export default App;
