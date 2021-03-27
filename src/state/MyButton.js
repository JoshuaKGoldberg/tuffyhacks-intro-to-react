import { useState } from "react";

export default function MyButton({ className, children }) {
  const [count, setCount] = useState(0);

  return (
    <button className={className} onClick={() => setCount(count + 1)}>
      {children} {count}
    </button>
  );
}
