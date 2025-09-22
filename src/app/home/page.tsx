"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://fakerapi.it/api/v1/products?_quantity=10000"
      ); // 1000개 정도로 테스트
      const data = await res.json();
      setProducts(data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Client Component - Complex DOM</h1>

      {products === null ? (
        "로딩 중..."
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
              }}
            >
              <h3 style={{ fontSize: "16px", marginBottom: "4px" }}>{product.name}</h3>
              <p style={{ fontSize: "14px", marginBottom: "4px" }}>Price: ${product.price}</p>
              <p style={{ fontSize: "12px", color: "#666" }}>Description: {product.description}</p>
              <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => alert(`Clicked ${product.name}`)}>Buy</button>
                <button onClick={() => alert(`Details ${product.name}`)}>Details</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <br />
      <button onClick={() => alert("클라이언트 버튼 클릭")}>페이지 버튼</button>
    </div>
  );
}
