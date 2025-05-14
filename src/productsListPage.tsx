import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productLoadedSelector,
  productsLoadingSelector,
} from "./selectors/products";
import { loadProducrsAction, productsLoadedAction } from "./actions/products";
import axios from "axios";
type ProductListPageProps = {};
const ProductListPage: FC<ProductListPageProps> = (props) => {
  const loading = useSelector(productsLoadingSelector);
  const products = useSelector(productLoadedSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducrsAction());
    axios.get("https://myeasykart.codeyogi.io/products").then((res) => {
      return dispatch(productsLoadedAction(res.data.data));
    });
  });
  return (
    <div>
      {loading && (!products || products.length === 0) && <div>Loading...</div>}
      {products && products.map((p) => <div className="text-orange-950 font-semibold" key={p.id}>{p.title} {p.price}</div>)}
    </div>
  );
};
export default memo(ProductListPage);
