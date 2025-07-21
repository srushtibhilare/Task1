import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import './Home.css'; // Assuming your CSS file is named Home.css

const categories = [
  { id: 1, name: 'Tees', slug: 'tees', active: true },
  { id: 2, name: 'Jackets', slug: 'jackets', active: false },
  { id: 3, name: 'Caps', slug: 'caps', active: false },
  { id: 4, name: 'Accessories', slug: 'accessories', active: false },
  { id: 5, name: 'Limited', slug: 'limited', active: false },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">F1 STREETWEAR</h1>
        <p className="text-xl mb-8">Race-inspired apparel for the streets</p>
        <Link 
          to="/category/tees" 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded"
        >
          View All
        </Link>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              active={category.active} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}