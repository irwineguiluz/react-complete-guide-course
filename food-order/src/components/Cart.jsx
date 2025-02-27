import { useContext } from 'react';

import Modal from './UI/Modal';
import CartContext from '../store/cart-context';
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((currentTotalPrice, item) => {
    return currentTotalPrice + item.price * item.quantity;
  }, 0);

  return (
    <Modal className="cart">
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
