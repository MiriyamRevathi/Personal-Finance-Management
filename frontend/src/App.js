import React, { useEffect, useState } from "react";
import "./style.css";

const API_URL = "http://localhost:4000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", price: "", inStock: true });

  const loadProducts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, name, price, inStock } = form;

    const payload = { name, price: Number(price), inStock };

    if (id) {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      alert("Product updated!");
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      alert("Product added!");
    }

    setForm({ id: "", name: "", price: "", inStock: true });
    loadProducts();
  };

  const editProduct = (p) => setForm(p);

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadProducts();
  };

  return (
    <div className="container">
      <h1>🛒 Product Inventory</h1>
      <button onClick={loadProducts}>Reload</button>

      <div id="products">
        {products.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>
            <p>Status: {p.inStock ? "In Stock ✅" : "Out of Stock ❌"}</p>
            <button onClick={() => editProduct(p)}>Edit</button>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </div>
        ))}
      </div>

      <h2>{form.id ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={form.inStock}
            onChange={(e) => setForm({ ...form, inStock: e.target.checked })}
          />{" "}
          In Stock
        </label>
        <button type="submit">Save Product</button>
      </form>
    </div>
  );
}

export default App;
