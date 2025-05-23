import useHttp from '../hooks/useHttp.js';
import MealItem from './MealItem.jsx';
import Error from './Error.jsx';

const requestConfig = {};

export default function MealsList() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {meals && meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
