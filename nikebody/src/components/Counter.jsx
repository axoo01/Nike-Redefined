// src/components/Counter.jsx
import { useState, useEffect } from "react";

const Counter = ({ end, suffix = "", duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true); // Start fade-in
      let start;
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => setIsVisible(false); // Cleanup
  }, [end, duration, delay]);

  return (
    <span
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}s ease-in`
      }}
    >
      {count}{suffix}
    </span>
  );
};

export default Counter;