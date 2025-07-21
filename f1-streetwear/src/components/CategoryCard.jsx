import { Link } from 'react-router-dom';
import './CategoryCard.css';

export default function CategoryCard({ category, active }) {
  return (
    <div className="category-card">
      {active ? (
        <Link to={`/category/${category.slug}`} className="category-link">
          <h3 className="category-title">{category.name}</h3>
        </Link>
      ) : (
        <div className="inactive-category">
          <h3 className="inactive-title">{category.name}</h3>
          <p className="coming-soon">Coming Soon</p>
        </div>
      )}
    </div>
  );
}