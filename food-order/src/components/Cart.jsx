import { useContext } from 'react';

import Modal from './UI/Modal.jsx';
import Button from './UI/Button.jsx';
import CartContext from '../store/cart-context';
import UserProgressContext from '../store/user-progress-context.jsx';
import { currencyFormatter } from '../util/formatting.js';

export default function Cart() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((currentTotalPrice, item) => {
    return currentTotalPrice + item.price * item.quantity;
  }, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" isOpen={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
