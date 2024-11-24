import React from "react";

function Products({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}원</p>
      <p>좋아요 {product.addFavorit}</p>
    </div>
  );
}

export default Products;
