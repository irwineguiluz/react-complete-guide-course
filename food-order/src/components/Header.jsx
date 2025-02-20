import logo from '/logo.jpg?url';

export default function Header() {
  return (
    <header id="main-header">
      <h1 id="title">
        <img src={logo} alt="A dish" />
        Food App
      </h1>
      <button type="button">Cart()</button>
    </header>
  );
}
