// app/components/button.tsx
export default async function Button() {
  console.time("ServerFetch");

  const res = await fetch(
    "https://fakerapi.it/api/v1/products?_quantity=10000"
  ); // 1000개 정도 테스트
  const json = await res.json();
  const products = json.data;

  console.timeEnd("ServerFetch");

  return (
    <div>
      <h1>Server Component - Complex DOM</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        {products.map((product: any, index: number) => (
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

          </div>
        ))}
      </div>
      <br />
      
    </div>
  );
}
