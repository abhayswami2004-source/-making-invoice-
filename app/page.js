"use client";
import { useState } from "react";

export default function Home() {
  const [company, setCompany] = useState("");
  const [client, setClient] = useState("");
  const [gstin, setGstin] = useState("");

  const [items, setItems] = useState([
    { name: "", qty: 1, price: 0 }
  ]);

  const invoiceNumber = Math.floor(Math.random() * 100000);
  const invoiceDate = new Date().toLocaleDateString();

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { name: "", qty: 1, price: 0 }]);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const cgst = subtotal * 0.09;
  const sgst = subtotal * 0.09;
  const grandTotal = subtotal + cgst + sgst;

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none; }
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 8px;
        }
        th {
          background: #f2f2f2;
        }
      `}</style>

      <main style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "800px",
        margin: "auto",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}>
        <h1 style={{ textAlign: "center" }}>TAX INVOICE</h1>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p><strong>Invoice No:</strong> {invoiceNumber}</p>
            <p><strong>Date:</strong> {invoiceDate}</p>
          </div>
          <div>
            <p><strong>GSTIN:</strong> {gstin}</p>
          </div>
        </div>

        <hr />

        {/* INPUTS */}
        <div className="no-print">
          <label>Company Name</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} />

          <label>Client Name</label>
          <input value={client} onChange={(e) => setClient(e.target.value)} />

          <label>GSTIN</label>
          <input value={gstin} onChange={(e) => setGstin(e.target.value)} />

          <button onClick={addItem} style={{ marginTop: "10px" }}>
            + Add Item
          </button>
        </div>

        <hr />

        <p><strong>From:</strong> {company}</p>
        <p><strong>Bill To:</strong> {client}</p>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td>
                  <input
                    className="no-print"
                    value={item.name}
                    onChange={(e) => updateItem(i, "name", e.target.value)}
                  />
                  {item.name}
                </td>
                <td>
                  <input
                    className="no-print"
                    type="number"
                    value={item.qty}
                    onChange={(e) => updateItem(i, "qty", Number(e.target.value))}
                  />
                  {item.qty}
                </td>
                <td>
                  <input
                    className="no-print"
                    type="number"
                    value={item.price}
                    onChange={(e) => updateItem(i, "price", Number(e.target.value))}
                  />
                  ₹{item.price}
                </td>
                <td>₹{item.qty * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "right", marginTop: "15px" }}>
          <p>Subtotal: ₹{subtotal}</p>
          <p>CGST (9%): ₹{cgst.toFixed(2)}</p>
          <p>SGST (9%): ₹{sgst.toFixed(2)}</p>
          <h3>Grand Total: ₹{grandTotal.toFixed(2)}</h3>
        </div>

        <button
          className="no-print"
          onClick={() => window.print()}
          style={{
            marginTop: "20px",
            padding: "10px",
            width: "100%",
            background: "black",
            color: "white",
            border: "none"
          }}
        >
          Print / Save PDF
        </button>
      </main>
    </>
  );
}
