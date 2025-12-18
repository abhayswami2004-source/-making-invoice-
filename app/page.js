"use client";
import { useState } from "react";

export default function Home() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const total = quantity * price;

  return (
    <main style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px" }}>
      <h1>Simple Invoice App</h1>

      <label>Item Name</label>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <label>Quantity</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <h3>Total: ₹{total}</h3>
    </main>
  );
}
