import { AnyAction } from "redux";
import {} from "../action";
import { produce } from "immer";
import { Products } from "../model/products";
import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "../actions/products";

export type State = {
  products: Products[];
  loading: boolean;
};
export const initialHappyState: State = {
  products: [],
  loading: false,
};
const productReducer = (state = initialHappyState, action: AnyAction) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case PRODUCTS_LOADED:
      return produce(state, (draft) => {
        draft.products = action.payload;
        draft.loading = true;
      });
    default:
      return state;
  }
};

export default productReducer;
