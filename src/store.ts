import { AnyAction, createStore } from "redux";
import sadnessReducer, { initialSadState, SadState } from "./reducers/sadReducer";
import happinessReducer, { HappyState, initialHappyState } from "./reducers/happyRecuder";
export type Moment = {
  intensity: number;
  when: Date;
};
export type State = {
  sad: SadState;
  happy: HappyState
};
 
const initialState : State ={
  sad: initialSadState,
  happy: initialHappyState,
}

const reducer = (currentState = initialState, action: AnyAction ): State => {
  return{
 sad: sadnessReducer(currentState.sad, action),
 happy: happinessReducer(currentState.happy, action),
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
