import React, { useReducer } from "react";

const Counter2 = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "Decrease") {
      return state - action.payload.count;
    } else if (action.type === "Increase") {
      return state + action.payload.count;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex justify-center mt-48">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-5">{state}</h2>

          <div className="card-actions justify-end">
            <button
              onClick={() =>
                dispatch({ type: "Decrease", payload: { count: 5 } })
              }
              className="btn btn-primary"
            >
              Decrease
            </button>
            <button
              onClick={() =>
                dispatch({ type: "Increase", payload: { count: 5 } })
              }
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

export default Counter2;
