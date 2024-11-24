import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import App from "./App.js";
import Products from "./Products.js";
//import "./ItemsPage.css";

function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("latest");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://panda-market-api.vercel.app/docs/api/products"
        );
        const products = Array.isArray(response.data.products)
          ? response.data.products
          : [];
        setSortedProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setSortedProducts([]);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (order) => {
    setSortOrder(order);
    const sorted = [...products].sort((a, b) => {
      if (order === "favorit") {
        return b.favorit - a.favorit;
      } else {
        return new Date(b.recent) - new Date(a.recent);
      }
    });
    setSortedProducts(sorted);
  };

  const handleAddItem = () => {
    navigate("/additem");
  };

  return (
    <div className="items-page">
      <button className="add-item-btn" onClick={handleAddItem}>
        상품 등록하기
      </button>
      <select
        className="sort-dropdown"
        value={sortOrder}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="latest">최신순</option>
        <option value="favorit">좋아요순</option>
      </select>
      <h2>베스트 상품</h2>
      <div className="best-products">
        {sortedProducts.slice(0, 4).map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
      <h2>전체 상품</h2>
      <div className="all-products">
        {sortedProducts.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ItemsPage;
