import { State } from "./store";

export const happyCountSelector = (state: State)=>{
    return state.happyCount;
}
export const sadCountSelector = (state: State)=>{
    return state.sadCount;
}