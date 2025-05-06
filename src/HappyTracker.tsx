import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyMomentsSelector } from "./selectors";
type HappyTrackerProps = {};
const HappyTracker: FC<HappyTrackerProps> = (props) => {
  const happyMoments = useSelector(happyMomentsSelector);
  return (
    <div className="bg-orange-700 text-white text-lg py-2 px-4">
      {happyMoments.map((m, index) => (
        <div key={index}>
          Happyness Intensity: {m.intensity}, When: {new Date(m.when).toLocaleString()}
        </div>
      ))}
    </div>
  );
};

export default memo(HappyTracker);
