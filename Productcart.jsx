import React from 'react';
import '../src/home.css';

function ProductCard({ name, image, price,onAddToCart, onAddToWishlist }) {
  const originalPrice = price * 2; 
  const discountPrice = price;

  return (
    <div className="product-card card p-3 text-center shadow-sm">
      

      <img
        src={image}
        alt={name}
        className="card-img-top mb-2"
        style={{ height: "150px", objectFit: "cover" }}
        /*Fit to hole container i.e cover all space */
      />

      <h3 className="h5">{name}</h3>
      <div className="mb-2">
        <span className="text-muted text-decoration-line-through me-2">
          ₹{originalPrice}
        </span>
        <span className="text-danger fw-bold">₹{discountPrice}</span>
        {/*classname = text-danger that from bootstarp make price scratch */}
        <span className="badge bg-success ms-2">50% OFF</span>
      </div>

      <div className="d-flex justify-content-center gap-2 mt-2">
        {/*margin-top : 0.5rm */}
        <button className="btn btn-success btn-sm" onClick={onAddToCart}>ADD</button>
        {/*btn-success : green button */}
        <button className="btn btn-success text-white">BUY</button>
        <button className="btn btn-danger btn-lg" onClick={onAddToWishlist}> ♥️ </button>
      </div>
    </div>
  );
}

export default ProductCard;
