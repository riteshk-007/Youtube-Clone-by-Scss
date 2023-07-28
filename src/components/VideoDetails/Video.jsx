import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import SuggestionVideoCard from "../SeachResultVideoCard/SeachResultVideoCard";
import "./Video.scss";
import { Context } from "../../Context/ContextApi";
import { FetchApiData } from "../../utils/api";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

function Video() {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { setLoading } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    FetchApiData(`video/details/?id=${id}`).then((res) => {
      setVideo(res);
      setLoading(false);
    });
  };
  const fetchRelatedVideos = () => {
    setLoading(true);
    FetchApiData(`video/related-contents/?id=${id}`).then((res) => {
      setRelatedVideos(res);
      setLoading(false);
    });
  };
  return (
    <div className="container">
      <div className="player">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width="100%"
          height="80%"
          style={{ backgroundColor: "#00000" }}
          playing={true}
        />
        <div className="title">{video?.title}</div>
        <div className="video-creator">
          <span className="badge">
            <img
              src={video?.author?.avatar[0]?.url}
              alt="avatar"
              className="video-creator-img"
            />
            <span className="title-name">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="badge-icon" />
              )}
              <span>{video?.author?.stats?.subscribersText}</span>
            </span>
          </span>
          <span className="btn-icon">
            <span className="btn-like">
              <AiOutlineLike className="" />
              {`${abbreviateNumber(video?.stats?.views, 2)} Likes`}
            </span>
            <span className="btn-like">
              {" "}
              {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
            </span>
          </span>
        </div>
      </div>
      <div className="more-video">
        {relatedVideos?.contents?.map((item, index) => {
          if (item?.type !== "video") return false;
          return <SuggestionVideoCard key={index} video={item?.video} />;
        })}
      </div>
    </div>
  );
}

export default Video;
