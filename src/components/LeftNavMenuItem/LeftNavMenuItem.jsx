import "./LeftNavMenuItem.scss";
/* eslint-disable react/prop-types */
function LeftNavMenuItem({ text, icon, className, action }) {
  return (
    <div className={"leftItem" + className} onClick={action}>
      <span className="menu-icon">{icon}</span>
      {text}
    </div>
  );
}

export default LeftNavMenuItem;
