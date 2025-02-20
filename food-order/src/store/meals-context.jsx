import { createContext, useEffect, useState } from 'react';

export const MealsContext = createContext({
  meals: null,
});

export function MealsContextProvider({ children }) {
  const [meals, setMeals] = useState();

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');
      const meals = await response.json();
      setMeals(meals);
    }

    fetchMeals();
  }, []);

  const contextValue = {
    meals,
  };

  return <MealsContext value={contextValue}>{children}</MealsContext>;
}
