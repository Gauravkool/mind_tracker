import { AnyAction } from "redux";
import { Moment } from "../store";
import { SAD_BUTTON_CLICKED } from "../action";

export type SadState = {
  sadMoments: Moment[];
};
export const initialSadState: SadState = {
  sadMoments: [],
};
const sadnessReducer = (currentState: SadState, action: AnyAction) => {
  switch (action.type) {
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
export default sadnessReducer;
