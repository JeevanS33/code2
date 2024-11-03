import React, { useState, useMemo } from "react";

function factorial(n) {
  if (n <= 0) return 1;
  return n * factorial(n - 1);
}

function UseMemo() {
  const [number, setNumber] = useState(5);

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const factorialResult = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <input type="number" value={number} onChange={handleChange} />
      <p>factorial: {factorialResult}</p>
    </div>
  );
}

export default UseMemo;
