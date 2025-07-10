import React from "react";
import products from "../data/products";

export default function ProductList() {
  return (
    <div className="container">
      <h1 style={{ padding: "20px 0" }}>Mahsulotlar roʻyxati</h1>
      <div className="product-list">
        {products.map((product, i) => (
          <div className="card" key={i}>
            <span className="tag">{product.tag}</span>
            <img src={product.image} alt={product.title} />
            <div className="title">{product.title}</div>
            <div className="rating">
              ⭐ {product.rating} ({product.reviews} sharhlar)
            </div>
            <div className="monthly">{product.monthly}</div>
            <div className="prices">
              {product.oldPrice && (
                <div className="old-price">{product.oldPrice}</div>
              )}
              <div className="new-price">{product.newPrice}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
