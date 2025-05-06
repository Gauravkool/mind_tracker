import { AnyAction, createStore } from "redux";
import { HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./action";
export type Moment = {
  intensity: number;
  when: Date;
};
export type State = {
  sadMoments: Moment[];
  happyMoments: Moment[];
};
const initialState = {
  sadMoments: [],
  happyMoments: [],
};

const reducer = (
  currentState: State = initialState,
  action: AnyAction
): State => {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return {
        ...currentState,
        happyMoments: [
          ...currentState.happyMoments,
          { intensity: action.payload.count, when: action.payload.when },
        ],
      };
    case SAD_BUTTON_CLICKED:
      return {
        ...currentState,
        sadMoments: [
          ...currentState.sadMoments,
          { intensity: action.payload.count, when: action.payload.when },
        ],
      };
    default:
      return currentState;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
