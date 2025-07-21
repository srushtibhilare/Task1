import './CartItem.css';

export default function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image-placeholder">
        <span className="cart-item-image-placeholder-text">Image</span>
      </div>
      
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price}</p>
      </div>
      
      <div className="cart-item-quantity-controls">
        <button 
          className="quantity-btn"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="quantity-display">{item.quantity}</span>
        <button 
          className="quantity-btn"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      
      <button 
        className="remove-btn"
        onClick={() => removeItem(item.id)}
      >
        Remove
      </button>
    </div>
  );
}