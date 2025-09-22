// app/page.tsx
import Button from "@/src/components/button";
import React from "react";

export default async function Page() {
  

  return (
    <div>
      <h1>Server Component Products</h1>
      <React.Suspense fallback={<div>로딩 중...</div>}>
        <Button/>
      </React.Suspense>
    </div>
  );
}
