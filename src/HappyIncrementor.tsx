import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./action";
type HappyIncrementorProps = {};
const HappyIncrementor: FC<HappyIncrementorProps> = (props) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(happyButtonClicked);
    console.log("HappyIncrementor refreshed")
  };
  return (
    <div>
      <h3 className="text-lg">Are you happy?</h3>
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
