  // Product.js
  import { useState, useEffect } from 'react';
  import { useParams } from 'react-router-dom';
  import SearchBar from '../components/SearchBar';
 import './Product.css';

  const allProducts = [
    { 
      id: 1, 
      name: 'Grid King Tee', 
      price: 45, 
      description: 'Black tee with grid pattern inspired by F1 starting grids.',
      image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
      details: '100% cotton, pre-shrunk fabric. Machine wash cold with like colors.'
    },
    { 
      id: 2, 
      name: 'Podium Black Tee', 
      price: 50, 
      description: 'Sleek black tee with podium finish graphic.',
      image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
      details: 'Premium cotton blend, comfortable fit. Imported.'
    },
    { 
      id: 3, 
      name: 'Checkered Flag Tee', 
      price: 48, 
      description: 'White tee with classic checkered flag design.',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
      details: 'Organic cotton, slim fit. Designed for comfort.'
    },
    { 
      id: 4, 
      name: 'Racing Stripes Tee', 
      price: 42, 
      description: 'Racing stripes tee inspired by classic liveries.',
      image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
      details: 'Classic fit, 100% cotton. Machine washable.'
    },
    { 
      id: 5, 
      name: 'Team Colors Tee', 
      price: 55, 
      description: 'Colorful tee representing multiple F1 teams.',
      image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
      details: 'Vibrant colors, premium fabric. Runs true to size.'
    },
    { 
      id: 6, 
      name: 'Finish Line Tee', 
      price: 46, 
      description: 'Tee featuring dramatic finish line graphic.',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80',
      details: 'Breathable fabric, athletic fit. Perfect for race day.'
    },
  ];

  export default function Product() {
    const { id } = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
      const foundProduct = allProducts.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
    }, [id]);

    useEffect(() => {
      if (searchQuery) {
        const filtered = allProducts.filter(p => 
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts([]);
      }
    }, [searchQuery]);

    const handleQuantityChange = (change) => {
      const newQuantity = quantity + change;
      if (newQuantity > 0 && newQuantity < 10) {
        setQuantity(newQuantity);
      }
    };

    if (!product) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
  <div className="product-page">
    <div className="container mx-auto">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {searchQuery && (
        <div className="search-results-container">
          <h2 className="search-results-title">Search Results</h2>
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(p => (
                <Link to={`/product/${p.id}`} key={p.id} className="product-card">
                  <div className="product-card-image-container">
                    <img 
                      src={p.image} 
                      alt={p.name}
                      className="product-card-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-card-info">
                    <h3 className="product-card-name">{p.name}</h3>
                    <p className="product-card-price">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-results-message">
              <p>No products found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      )}

      <div className="product-display">
        <div className="md:flex">
          <div className="product-image-section md:w-1/2">
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="product-details-section md:w-1/2">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">${product.price}</p>
            
            <div className="product-description-container">
              <p className="product-description">{product.description}</p>
              <p className="product-meta">{product.details}</p>
            </div>
            
            <div className="quantity-selector">
              <button 
                onClick={() => handleQuantityChange(-1)}
                className="quantity-button"
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)}
                className="quantity-button"
              >
                +
              </button>
            </div>
            
            <button className="add-to-cart-button">
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
            
            <div className="product-features">
              <h3 className="features-title">Product Details</h3>
              <ul className="feature-list">
                <li className="feature-item">100% Premium Cotton</li>
                <li className="feature-item">Machine Washable</li>
                <li className="feature-item">Imported Fabric</li>
                <li className="feature-item">Designed for Comfort</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  }