export default function MealItem({ name, description, price, image }) {
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <h3>{name}</h3>
        <span className="meal-item-price">{price}</span>
        <p className="meal-item-description">{description}</p>
        <div className="meal-item-actions">
          <button>Add to cart</button>
        </div>
      </article>
    </div>
  );
}
