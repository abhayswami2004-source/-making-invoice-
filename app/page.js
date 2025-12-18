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
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print {
            display: none;
          }
          body {
            background: white;
          }
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }
        th {
          background: #f2f2f2;
        }
      `}</style>

      <main
        style={{
          padding: "20px",
          fontFamily: "Arial",
          maxWidth: "600px",
          margin: "auto",
          border: "1px solid #ccc",
          borderRadius: "8px"
        }}
      >
        <h1 style={{ textAlign: "center" }}>INVOICE</h1>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p><strong>Invoice No:</strong> {invoiceNumber}</p>
            <p><strong>Date:</strong> {invoiceDate}</p>
          </div>
          <div>
            <p><strong>From:</strong></p>
            <p>Your Company Name</p>
          </div>
        </div>

        <hr />

        {/* INPUT SECTION */}
        <div className="no-print">
          <label>Item Name</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>

        {/* INVOICE TABLE */}
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item}</td>
              <td>{quantity}</td>
              <td>₹{price}</td>
              <td>₹{total}</td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ textAlign: "right", marginTop: "10px" }}>
          Grand Total: ₹{total}
        </h3>

        {/* PRINT BUTTON */}
        <button
          className="no-print"
          onClick={() => window.print()}
          style={{
            marginTop: "20px",
            padding: "10px",
            width: "100%",
            cursor: "pointer",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "4px"
          }}
        >
          Print / Save as PDF
        </button>
      </main>
    </>
  );
}
