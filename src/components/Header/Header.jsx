import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Header.scss";
import Loader from "../../Shared/Loader";
import { Context } from "../../Context/ContextApi";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
function Header() {
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const searchQueryHandler = (e) => {
    if (
      (e?.key === "Enter" || e === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`searchResult/${searchQuery}`);
    }
  };
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  return (
    <div className="header">
      {loading && <Loader />}
      <div className="menuBtn">
        {pageName !== "video" && (
          <div className="menu" onClick={mobileMenuToggle}>
            {mobileMenu ? (
              <CgClose className="btn" />
            ) : (
              <SlMenu className="btn" />
            )}
          </div>
        )}
      </div>

      <div onClick={() => navigate("/")}>
        <img src="yt-lg.png" alt="logo" className="logo" />
        <img src="yt-sm.png" alt="logo" className="logo2" />
      </div>

      <div className="input-filed">
        <span className="search-icon first">
          <IoIosSearch />
        </span>
        <input
          type="text"
          className="input"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
        />
        <span
          className="search-icon second"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch />
        </span>
      </div>

      <div className="loginInfo">
        <RiVideoAddLine className="icon" />
        <FiBell className="icon" />
        <img
          src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
          alt=""
          className="img"
        />
      </div>
    </div>
  );
}

export default Header;
