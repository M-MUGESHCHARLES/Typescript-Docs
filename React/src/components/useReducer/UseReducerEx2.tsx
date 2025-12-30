import { useReducer } from "react";

type StateType = {
    count: number;
}

type IncDec = {
  type: 'INCREMENT' | 'DECREMENT';
  value: number;
};

type Reset = {
  type: "RESET";
};

type ActionType = IncDec | Reset;

const initialState = {count: 0};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count + action.value};
    case "DECREMENT":
      return {count: state.count - action.value};
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const UseReducerEx2 = () => {

  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container d-flex flex-column justify-center align-center gap-2 text-center">
      <h4>Count: {counter.count}</h4>

      <div className="d-flex gap-2">
        <button
          type="button"
          onClick={() => dispatch({ type: "INCREMENT", value: 1 })}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "DECREMENT", value: 1 })}
        >
          Decrement
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
