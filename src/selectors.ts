import { State } from "./store";

export const happyMomentsSelector = (state: State)=>{
    return state.happyMoments;
}
export const sadMomentsSelector = (state: State)=>{
    return state.sadMoments;
}