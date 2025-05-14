import { AnyAction } from "redux";
import { Moment } from "../store";
import { SAD_BUTTON_CLICKED } from "../action";
import { produce } from "immer";

export type SadState = {
  sadMoments: Moment[];
};
export const initialSadState: SadState = {
  sadMoments: [],
};
const sadnessReducer = (currentState = initialSadState, action: AnyAction) => {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
      return produce(currentState, (draft) => {
        draft.sadMoments.push(action.payload);
      });
    default:
      return currentState;
  }
};
export default sadnessReducer;
