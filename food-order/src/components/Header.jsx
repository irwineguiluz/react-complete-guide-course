import { useContext, useRef } from 'react';

import Button from './UI/Button.jsx';
import Modal from './UI/Modal.jsx';
import CartContext from '../store/cart-context.jsx';
import logoImg from '../assets/logo.jpg';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  const dialog = useRef();

  function handleOpenCart() {
    dialog.current.open();
  }

  return (
    <>
      <Modal ref={dialog}>Hello</Modal>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="A dish" />
          <h1>Food App</h1>
        </div>
        <nav>
          <Button onClick={handleOpenCart} textOnly>
            Cart ({totalCartItems})
          </Button>
        </nav>
      </header>
    </>
  );
}
