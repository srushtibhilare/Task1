import { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Nike Air Max', 
      price: 125, 
      quantity: 1, 
      image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 2, 
      name: 'Adidas Ultraboost', 
      price: 180, 
      quantity: 2, 
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 3, 
      name: 'Puma RS-X', 
      price: 110, 
      quantity: 1, 
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' 
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-container">
      <div className="cart-content">
        <h1 className="cart-title">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="empty-cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="empty-cart-message">Your cart is empty</p>
            <button className="continue-shopping-btn">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-items-container">
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image-container">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="cart-item-image"
                    />
                  </div>
                  
                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-detail">Size: M</p>
                    <p className="cart-item-detail">Color: Black</p>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="remove-item-btn"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="quantity-controls">
                    <div className="quantity-selector">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="cart-item-price">
                    <p className="item-total-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="order-summary">
              <h2 className="summary-title">Order summary</h2>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span className="summary-label">Subtotal</span>
                  <span className="summary-value">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span className="summary-label">Shipping</span>
                  <span className="summary-value">${shipping.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span className="summary-label">Tax</span>
                  <span className="summary-value">${tax.toFixed(2)}</span>
                </div>
                
                <div className="summary-row total-row">
                  <span className="total-label">Total</span>
                  <span className="total-value">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="checkout-btn-container">
                <button className="checkout-btn">
                  Checkout
                </button>
              </div>
              
              <div className="continue-shopping-container">
                <p>
                  or{' '}
                  <button className="continue-shopping-link">
                    Continue Shopping
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;