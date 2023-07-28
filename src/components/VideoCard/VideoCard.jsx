/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

import "./VideoCard.scss";
import VideoLength from "../../video/VideoLength";
function VideoCard({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="card">
        <span className="img">
          <img src={video?.thumbnails[0]?.url} alt="" />
          {video.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </span>
        <div className="avatar">
          <img src={video?.author?.avatar[0]?.url} alt="avatar" />
          <p>{video?.title}</p>
        </div>
        <span className="verified">
          {video?.author?.title}
          {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
            <BsFillCheckCircleFill className="CheckCircle" />
          )}
        </span>
        <div className="views">
          <span className="view-time">{`${abbreviateNumber(
            video?.stats?.views,
            2
          )} views`}</span>
          <span className="view-time dot">.</span>
          <span className="view-time">{video?.publishedTimeText}</span>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
