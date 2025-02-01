import { useState, useEffect, useLayoutEffect } from 'react';

// Mount (initial render) -> updates (re-render) -> unmount

export default function CounterWithEffects() {
  const [counter, setCounter] = useState(0);
  const [bool, setBool] = useState(false);

  useLayoutEffect(() => {
    if (counter === 3) {
      setCounter(4);
    }
  }, [counter]);

  useEffect(() => {
    console.log('render');
  });

  const startTime = new Date();
  while (new Date() - startTime < 100) {}

  return (
    <div className="counter">
      <button onClick={() => setBool(!bool)}>Re-Render</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p>Count: {counter}</p>
    </div>
  );
}
