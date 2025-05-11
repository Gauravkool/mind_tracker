import { combineReducers, createStore } from "redux";
import sadnessReducer from "./reducers/sadReducer";
import happinessReducer from "./reducers/happyRecuder";
export type Moment = {
  intensity: number;
  when: Date;
};


const reducer = combineReducers({
  sad: sadnessReducer,
  happy: happinessReducer,
})

export type State = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
