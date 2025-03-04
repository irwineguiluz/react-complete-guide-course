import { useContext } from 'react';

import Modal from './UI/Modal.jsx';
import Button from './UI/Button.jsx';
import CartItem from './CartItem.jsx';
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

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      isOpen={userProgressCtx.progress === 'cart'}
      onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
