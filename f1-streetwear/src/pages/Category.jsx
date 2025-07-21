// Category.js
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const products = [
  { 
    id: 1, 
    name: 'Grid King Tee', 
    price: 45, 
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80' 
  },
  { 
    id: 2, 
    name: 'Podium Black Tee', 
    price: 50, 
    image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80' 
  },
  { 
    id: 3, 
    name: 'Checkered Flag Tee', 
    price: 48, 
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80' 
  },
  { 
    id: 4, 
    name: 'Racing Stripes Tee', 
    price: 42, 
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80' 
  },
  { 
    id: 5, 
    name: 'Team Colors Tee', 
    price: 55, 
    image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80' 
  },
  { 
    id: 6, 
    name: 'Finish Line Tee', 
    price: 46, 
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80' 
  },
];

export default function Category() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Tees Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="hover:scale-105 transition-transform duration-200">
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}