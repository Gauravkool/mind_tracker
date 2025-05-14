import { ActionCreator } from "../actions";
import { Products } from "../model/products";
import { Moment } from "./store";

export const LOAD_PRODUCTS = "LOAD_PRODUCTS";

export const loadProducrsAction: ActionCreator = () => {
  return {
    type: LOAD_PRODUCTS,
    payload: undefined,
  };
};

export const PRODUCTS_LOADED = "PRODUCTS_LOADED";

export const productsLoadedAction: ActionCreator<Products[]> = (products: Products[]) => {
  return {
    type: PRODUCTS_LOADED,
    payload: products,
  };
};

