import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center mt-48">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-5">{count}</h2>

          <div className="card-actions justify-end">
            <button
              onClick={() => setCount(count - 1)}
              className="btn btn-primary"
            >
              Decrease
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="btn btn-primary"
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
