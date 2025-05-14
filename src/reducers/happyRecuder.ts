import { AnyAction } from "redux";
import { Moment } from "../store";
import { HAPPY_BUTTON_CLICKED } from "../action";
import { produce } from "immer";

export type HappyState = {
  happyMoments: Moment[];
};
export const initialHappyState: HappyState = {
  happyMoments: [],
};
const happinessReducer = (
  currentState = initialHappyState,
  action: AnyAction
) => {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
      return produce(currentState, (draft) => {
        draft.happyMoments.push(action.payload);
      });
    default:
      return currentState;
  }
};

export default happinessReducer;
