import "./sidebar.css";
import mask from "../../Image/mask1.png";
import corona from "../../Image/corona.png";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={mask} className="mask" />
      <img src={corona} className="corona" />
    </div>
  );
};
