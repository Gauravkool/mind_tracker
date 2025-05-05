import { Action, createStore } from "redux";

export type State = {
  sadCount: number;
  happyCount: number;
};
const initialState = {
  sadCount: 0,
  happyCount: 0,
};

const reducer = (currentState: State = initialState, action: Action): State => {
  if (action.type === "happy button clicked") {
    return {
      ...currentState,
      happyCount: currentState.happyCount + 1,
    };
  } else if (action.type === "sad button clicked") {
    return {
      ...currentState,
      sadCount: currentState.sadCount + 1,
    };
  }
  return currentState;
};

export const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
