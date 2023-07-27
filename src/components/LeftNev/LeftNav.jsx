import React, { useContext } from "react";
import { Context } from "../../Context/ContextApi";
import { categories } from "../../utils/Constants";
import LeftNavMenuItem from "../LeftNavMenuItem/LeftNavMenuItem";
import "./LeftNav.scss";
import { useNavigate } from "react-router-dom";
function LeftNav() {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);
  const navigate = useNavigate();

  const ClickHandle = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;

      default:
        break;
    }
  };
  return (
    <div className={`menus${mobileMenu ? " active" : ""}`}>
      {categories?.map((item) => {
        return (
          <React.Fragment key={item.name}>
            <LeftNavMenuItem
              key={item.type}
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => {
                ClickHandle(item.name, item.type);
                navigate("/");
              }}
              className={`${
                selectCategories === item.name ? " menu-item" : ""
              } `}
            />
            {item.divider && <hr className="hr" />}
          </React.Fragment>
        );
      })}
      <hr className="hr" />
      <div className="name">Clone by: Ritesh</div>
    </div>
  );
}

export default LeftNav;
