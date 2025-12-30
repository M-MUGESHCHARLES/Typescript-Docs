import { useReducer } from "react";

type StateType = {
    count: number;
}

const initialState = {count: 0};

const reducer = (state: StateType, action: string) => {
  switch (action) {
    case "INCREMENT":
      return {count: state.count + 1};
    case "DECREMENT":
      return {count: state.count - 1};
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const UseReducerEx1 = () => {

  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container d-flex flex-column justify-center align-center gap-2 text-center">
      <h4>Count: {counter.count}</h4>

      <div className="d-flex gap-2">
        <button type="button" onClick={() => dispatch("INCREMENT")}>Increment</button>
        <button type="button" onClick={() => dispatch("DECREMENT")}>Decrement</button>
        <button type="button" onClick={() => dispatch("RESET")}>Reset</button>
      </div>
    </div>
  );
};
