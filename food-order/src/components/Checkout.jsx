import { useContext } from 'react';

import Modal from './UI/Modal.jsx';
import Input from './UI/Input.jsx';
import CartContext from '../store/cart-context.jsx';
import UserProgressContext from '../store/user-progress-context.jsx';
import Button from './UI/Button.jsx';

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal
      isOpen={userProgressCtx.progress === 'checkout'}
      onClose={handleCloseCheckout}
    >
      <form action="">
        <h2>Checkout</h2>
        <p>Total amount: {cartTotal}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button textOnly onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
