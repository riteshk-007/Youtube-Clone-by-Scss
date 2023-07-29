import { useEffect, useState } from "react";
import "./SearchResult.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/ContextApi";
import { FetchApiData } from "../../utils/api";
import LaftNav from "../LeftNev/LeftNav";
import SearchResultVideoCard from "../SeachResultVideoCard/SeachResultVideoCard";
function SearchResult() {
  const { setLoading } = useContext(Context);
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResult();
  }, [searchQuery]);

  const fetchSearchResult = () => {
    setLoading(true);
    FetchApiData(`search/?q=${searchQuery}`).then((res) => {
      setResult(res.contents);
      setLoading(false);
    });
  };

  return (
    <div className="search-page">
      <LaftNav />
      <div className="serach-container">
        {result?.map((item, index) => {
          if (item.type !== "video") return false;
          return <SearchResultVideoCard key={index} video={item?.video} />;
        })}
      </div>
    </div>
  );
}

export default SearchResult;
