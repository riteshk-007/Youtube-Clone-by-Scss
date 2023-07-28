/* eslint-disable react/prop-types */
import moment from "moment/moment";
import "./VideoLength.scss";
function VideoLength({ time }) {
  const VideoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return <div className="time">{VideoLengthInSeconds}</div>;
}

export default VideoLength;
