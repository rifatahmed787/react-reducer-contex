import React, { useReducer } from "react";
import { initialState, reducer } from "./Reducer";

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="card flex-shrink-0 md:w-11/12 sm:w-11/12 lg:w-1/2 mx-auto mt-16  shadow-2xl bg-[#b4c7f7]">
          <div className="card-body mx-auto">
            <div className="flex justify-between space-x-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">FirstName</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  className="input input-bordered"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LastName</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  className="input input-bordered"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
              </div>
              <div className="form-control flex justify-between">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="radio radio-primary mr-2"
                      onClick={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      className="radio radio-primary mr-2"
                      onClick={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="form-control">
                <div className="py-3">
                  <select
                    className="select select-info w-full max-w-xs"
                    name="education"
                    id="education"
                    onChange={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: {
                          name: e.target.name,
                          value: e.target.value,
                        },
                      })
                    }
                  >
                    <option disabled selected>
                      Select education
                    </option>
                    <option>HSC</option>
                    <option>underGrad</option>
                    <option>Graduate</option>
                  </select>
                </div>
                <label className="label">
                  <span className="label-text">Number of PCs</span>
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => dispatch({ type: "DECREASE" })}
                    className="btn"
                  >
                    -
                  </button>
                  <div className="border px-20 py-2 flex justify-center items-center bg-white">
                    <span className="text-lg rounded-md">{state.number}</span>
                  </div>
                  <button
                    onClick={() => dispatch({ type: "INCREASE" })}
                    className="btn"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="term"
                  className="radio radio-primary mr-2"
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE",
                    })
                  }
                />
                accept terms and condition
              </div>
              <div>
                <input disabled={!state.term} type="submit" className="btn" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
