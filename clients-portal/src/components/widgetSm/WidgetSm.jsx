import Chart from "../chart/Chart";
import WidgetLg from "../widgetLg/WidgetLg";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetContainer">
    <div className="widgetSm">
      <span className="widgetSmTitle">Customer activity</span>
      <Chart />
    </div>
      <WidgetLg />
    </div>
  );
}