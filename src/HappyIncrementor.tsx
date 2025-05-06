import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./action";
type HappyIncrementorProps = {};
const HappyIncrementor: FC<HappyIncrementorProps> = (props) => {
  const [quantity, setQuanity] = useState(0);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(happyButtonClicked(quantity, new Date()));
    console.log("HappyIncrementor refreshed");
  };
  return (
    <div>
      <h3 className="text-lg">Are you happy?</h3>
      <input
        type="number"
        className="border-1 rounded-md py-1 px-2"
        onChange={(e) => setQuanity(+e.target.value)}
        value={quantity}
      />
      <button
        className="bg-orange-700 text-white border-2 rounded-md py-1 px-4 cursor-pointer"
        onClick={increment}
      >
        Yes
      </button>
    </div>
  );
};

export default memo(HappyIncrementor);
