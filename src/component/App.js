import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar.js";
import ItemsPage from "./ItemPage.js";
import { getProducts } from "../api.js";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/items"
          element={
            loading ? <div>Loading...</div> : <ItemsPage products={products} />
          }
        />
        <Route path="/additem" element={<div>상품 등록</div>} />
      </Routes>
    </Router>
  );
}

export default App;
