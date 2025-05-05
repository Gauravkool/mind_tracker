import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./action";
type SadIncrementorProps = {};
const SadIncrementor: FC<SadIncrementorProps> = (props) => {
  const dispatch = useDispatch();
  const increement = () => {
    dispatch(sadButtonClicked);
    console.log("SadIncrementor refreshed")
  };
  return (
    <div>
      <h3 className="text-lg">Are you sad?</h3>
      <button
        className="bg-blue-700 text-white border-2 rounded-md py-1 px-4 cursor-pointer"
        onClick={increement}
      >
        Yes
      </button>
    </div>
  );
};

export default memo(SadIncrementor);
