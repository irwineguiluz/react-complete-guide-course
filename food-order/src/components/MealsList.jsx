import { useEffect, useState } from 'react';

import MealItem from './MealItem.jsx';

export default function MealsList() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');

      if (!response.ok) {
        return;
      }

      const meals = await response.json();
      setMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals && meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
