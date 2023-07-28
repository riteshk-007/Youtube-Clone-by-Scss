import { useContext } from "react";

import "./Feed.scss";

import LeftNav from "../LeftNev/LeftNav";
import { Context } from "../../Context/ContextApi";
import VideoCard from "../VideoCard/VideoCard";
function Feed() {
  const { loading, searchResult } = useContext(Context);
  return (
    <div className="feed">
      <LeftNav />
      <div className="feed-item">
        {!loading &&
          searchResult?.map((item, index) => {
            if (item.type !== "video") return false;
            return <VideoCard key={index} video={item?.video} />;
          })}
      </div>
    </div>
  );
}

export default Feed;
