import Dashboard from "../Dashboard/Index";
import { Sidebar } from "../../Components/Sidebar";

import "./home.css";

const Home = () => {
  return (
    <div className="main">
      <Sidebar className="sidebar" />
      <Dashboard className="dashboard" />
    </div>
  );
};

export default Home;
