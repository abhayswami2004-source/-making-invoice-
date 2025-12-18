"use client";
import { useState } from "react";

export default function Home() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const total = quantity * price;

  const invoiceNumber = Math.floor(Math.random() * 100000);
  const invoiceDate = new Date().toLocaleDateString();

  return (
    <>
      {/* Print CSS */}
      <style>{`
        @media print {
          .no-print {
            display: none;
          }
        }
      `}</style>

      <main
        style={{
          padding: "20px",
          fontFamily: "Arial",
          maxWidth: "400px",
          margin: "auto",
          border: "1px solid #ccc",
          borderRadius: "8px"
        }}
      >
        <h1>Simple Invoice</h1>

        <p><strong>Invoice No:</strong> {invoiceNumber}</p>
        <p><strong>Date:</strong> {invoiceDate}</p>

        <hr />

        {/* INPUT SECTION (hidden in print) */}
        <div className="no-print">
          <label>Item Name</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />

          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />

          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        </div>

        {/* INVOICE DISPLAY */}
        <p><strong>Item:</strong> {item}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
        <p><strong>Price:</strong> ₹{price}</p>

        <h3>Total: ₹{total}</h3>

        {/* PRINT BUTTON (hidden in print) */}
        <button
          className="no-print"
          onClick={() => window.print()}
          style={{
            marginTop: "15px",
            padding: "10px",
            width: "100%",
            cursor: "pointer",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "4px"
          }}
        >
          Print Invoice
        </button>
      </main>
    </>
  );
}
