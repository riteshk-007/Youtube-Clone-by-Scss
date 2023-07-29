/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./SuggestionVideoCard.scss";
import { abbreviateNumber } from "js-abbreviation-number";

import VideoLength from "../../video/VideoLength";

function SuggestionVideoCard({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="video-card">
        <span className="position">
          <img className="video-card-img" src={video?.thumbnails[0]?.url} />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </span>
        <div className="flex-box">
          <span className="flex-box-title">{video?.title}</span>
          <span className="title-chennel-name">{video?.author?.title}</span>
          <span>
            <span className="title-chennel-name">{`${abbreviateNumber(
              video?.stats?.views,
              2
            )} views`}</span>
          </span>
          <span>
            <span className="title-chennel-name">
              {video?.publishedTimeText}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default SuggestionVideoCard;
