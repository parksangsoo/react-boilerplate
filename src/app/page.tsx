"use client";

import Link from "next/link";

export default function App() {
  return (
    <div>
      디폴트 페이지 <br />
      
      <button onClick={() => {
        <Link href="/home"/>
      }}>Home으로 이동</button>
    </div>
  );
}
