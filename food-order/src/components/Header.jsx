import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A dish" />
        <h1>Food App</h1>
      </div>
      <nav>
        <button type="button">Cart()</button>
      </nav>
    </header>
  );
}
