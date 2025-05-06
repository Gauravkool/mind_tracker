import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadMomentsSelector } from "./selectors";
type SadTrackerProps = {};
const SadTracker: FC<SadTrackerProps> = (props) => {
  const sadMoments = useSelector(sadMomentsSelector);
  return (
    <div className="bg-blue-700 text-white text-lg py-2 px-4">
      {sadMoments.map((m, index) => (
        <div key={index}>
          Sadness Intensity: {m.intensity}, When: {new Date(m.when).toLocaleString()}
        </div>
      ))}
    </div>
  );
};

export default memo(SadTracker);
