import { useReducer } from "react";


const initialState = {
  count: 0,
};


type stateProps = {
  count: number,
};

// This is the type of the action props.
// It can be either an `UpdateActionProps` or a `Reset` action.
type actionProps = UpdateActionProps | Reset;

// The `UpdateActionProps` type defines the type of the update actions.
type UpdateActionProps = {
  type: "INCREMENT" | "DECREMENT",
  payload: number,
};


type Reset = {
  type: "RESET",
};

// This is the reducer function. It takes the current state and an action as input, and returns the new state.
const reducer = (state: stateProps, action: actionProps) => {
  // Switch on the action type.
  switch (action.type) {
  // If the action type is "INCREMENT", increment the count by the payload.
  case "INCREMENT": {
    return {
      count: state.count + action.payload,
    };
  }
  // If the action type is "DECREMENT", decrement the count by the payload.
  case "DECREMENT": {
    return {
      count: state.count - action.payload,
    };
  }
  // If the action type is "RESET", reset the count to 0.
  case "RESET": {
    return initialState;
  }
  // If the action type is not recognized, return the current state.
  default:
    return state;
  }
};

// This is the Counter component. It uses the useReducer hook to manage the state of the counter.
const Counter = () => {
  // Get the current state and dispatch function from the useReducer hook.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Return the UI of the counter.
  return (
    <div>
      <button onClick={() => dispatch({type: "INCREMENT", payload: 10})}>increment by 10</button>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({type: "DECREMENT", payload: 10})}>decrement by 10</button>
      <button onClick={() => dispatch({type: "RESET"})}>Reset </button>
    </div>
  );
};

export default Counter;