import { Route, Routes } from "react-router-dom";
import "../App.scss";

import Header from "./components/Header/Header";
import Feed from "./components/feed/Feed";
import SearchResults from "./components/searchResults/SearchResult";
import Video from "./components/VideoDetails/Video";

function App() {
  return (
    <div className="app">
      <Header className="navbar" />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/searchResult/:searchQuery" element={<SearchResults />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
