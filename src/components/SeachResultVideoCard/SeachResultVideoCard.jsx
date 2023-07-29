/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./SeachResultVideoCard.scss";
import { abbreviateNumber } from "js-abbreviation-number";

import VideoLength from "../../video/VideoLength";
import "./SeachResultVideoCard.scss";

function SeachResultVideoCard({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="video-card1">
        <span className="position1">
          <img className="video-card-img1" src={video?.thumbnails[0]?.url} />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </span>
        <div className="flex-box1">
          <span className="flex-box-title1">{video?.title}</span>
          <span className="title-chennel-name1">{video?.author?.title}</span>
          <span>
            <span className="title-chennel-name1">{`${abbreviateNumber(
              video?.stats?.views,
              2
            )} views`}</span>
          </span>
          <span>
            <span className="title-chennel-name1">
              {video?.publishedTimeText}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default SeachResultVideoCard;
