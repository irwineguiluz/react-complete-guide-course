import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const toggleCart = useSelector((state) => state.cart.toggleCart);
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch('https://redux-example-5eb32-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
