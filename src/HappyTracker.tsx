import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyCountSelector } from "./selectors";
type HappyTrackerProps = {};
const HappyTracker: FC<HappyTrackerProps> = (props) => {
  const happyCount = useSelector(happyCountSelector);
  return (
    <div className="bg-orange-700 text-white text-lg py-2 px-4">
      You are happy {happyCount} times
    </div>
  );
};

export default memo(HappyTracker);
