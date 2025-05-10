import { AnyAction } from "redux";
import { Moment } from "../store";
import { HAPPY_BUTTON_CLICKED } from "../action";

export type HappyState = {
  happyMoments: Moment[];
};
export const initialHappyState: HappyState = {
  happyMoments: [],
};
const happinessReducer = (currentState: HappyState, action: AnyAction) => {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return {
        ...currentState,
        happyMoments: [
          ...currentState.happyMoments,
          { intensity: action.payload.count, when: action.payload.when },
        ],
      };
    default:
      return currentState;
  }
};

export default happinessReducer;
