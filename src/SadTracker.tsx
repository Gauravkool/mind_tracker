import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadCountSelector } from "./selectors";
type SadTrackerProps = {};
const SadTracker: FC<SadTrackerProps> = (props) => {
  const sadCount = useSelector(sadCountSelector);
  return (
    <div className="bg-blue-700 text-white text-lg py-2 px-4">
      You are sad {sadCount} times
    </div>
  );
};

export default memo(SadTracker);
