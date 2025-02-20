import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';

export default function MealItem({ name, description, price, image }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <div className="meal-item-actions">
          <Button>Add to cart</Button>
        </div>
      </article>
    </li>
  );
}
