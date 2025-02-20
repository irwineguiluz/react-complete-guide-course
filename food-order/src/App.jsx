import { MealsContextProvider } from './store/meals-context';

import Header from './components/Header';
import MealsList from './components/MealsList';

function App() {
  return (
    <>
      <Header />
      <main>
        <MealsContextProvider>
          <MealsList />
        </MealsContextProvider>
      </main>
    </>
  );
}

export default App;
