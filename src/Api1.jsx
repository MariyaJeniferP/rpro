import { useEffect, useState } from 'react';
import ProductCard from './File3';
function Mainn() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products
    .filter(p => category === "all" || p.category === category)
    .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Product Store</h2>

      {/* Filter Dropdown */}
      <select onChange={e => setCategory(e.target.value)} style={{ marginRight: "10px" }}>
        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>

      {/* Sort Dropdown */}
      <select onChange={e => setSortOrder(e.target.value)}>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>

      {/* Product List */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Mainn;