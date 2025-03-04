import Header from './components/Header';
import MealsList from './components/MealsList';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import { CartContextProvider } from './store/cart-context.jsx';
import { UserProgressContextProvider } from './store/user-progress-context.jsx';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <MealsList />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
