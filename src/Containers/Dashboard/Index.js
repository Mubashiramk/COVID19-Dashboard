import CountryChart from "../../Components/CountryChart";
import "./dashboard.css";
import Card from "../../Components/Card/Index";
import DataTable from "../../Components/Table/Index";
import Summary from "../../API/summary";
import { MainChart } from "../../Components/MainChart";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

const Dashboard = () => {
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );

  const summaryData = Summary();
  let totalConfirmed = summaryData.Global.TotalConfirmed;
  let totalDeaths = summaryData.Global.TotalDeaths;
  let totalRecovered = summaryData.Global.TotalRecovered;
  let activeCases = summaryData.Global.NewConfirmed;

  return (
    <div className="dashBoard">
      <div className="first">
        <h1>COVID-19 Tracker</h1>
      </div>
      <div className="top-div">
        <MainChart />
        <Card
          totalConfirmed={totalConfirmed}
          totalDeath={totalDeaths}
          totalRecovered={totalRecovered}
          activeCases={activeCases}
        />
      </div>
      <div className="bottom-div">
        <DataTable item={summaryData} />
        <CountryChart item={summaryData} />
      </div>
    </div>
  );
};

export default Dashboard;
