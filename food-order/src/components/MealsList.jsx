import { use } from 'react';

import { MealsContext } from '../store/meals-context.jsx';
import MealItem from './MealItem.jsx';

export default function MealsList() {
  const { meals } = use(MealsContext);

  return (
    <ul id="meals">
      {meals &&
        meals.map((meal) => (
          <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            image={meal.image}
          />
        ))}
    </ul>
  );
}
