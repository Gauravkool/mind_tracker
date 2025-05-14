import { State } from "../store";

export const productsLoadingSelector = (state: State) => {
  return state.products.loading;
};
export const productLoadedSelector = (state: State) => {
  return state.products.products;
};
