import { useEffect, useState } from "react";

export default function MyButton({ className, children }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Button ${className} has count: ${count}.`);
  }, [className, count]);

  return (
    <button className={className} onClick={() => setCount(count + 1)}>
      {children} {count}
    </button>
  );
}
