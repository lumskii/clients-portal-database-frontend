import React, { useState } from "react";
import "./styles.css";
import {
  DashBoard,
  PageTemplate,
  More,
  StatArea,
  StatTemplate,
} from "./DashboardElements";
import Navbar from "../../components/Navbar";
import { dashLinks } from "./DashboardData";
import { NavLink as Links } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpened] = useState(false);
  const [showContents, setShowContents] = useState(false);

  return (
    <DashBoard isOpened={sidebarOpened}>
      <Navbar />
      <PageTemplate>
        <div className="header">
          <p className="header-title">Dashboard Overview</p>
          <div
            className="symbols"
            onClick={() => setShowContents(!showContents)}
          >
            {showContents === true ? "X" : <More />}
          </div>
          {showContents && <StatArea>Statistic Stuffs</StatArea>}
        </div>
        <div className="cards">
          {dashLinks.map((item, index) => {
            return (
              <div className="card">
                <Links key={index} to={item.to} className="links">
                  <div className="card__inner">
                    {item.icon}
                    <span className="text">{item.label}</span>
                  </div>
                </Links>
              </div>
            );
          })}
        </div>
      </PageTemplate>

      {/* .........Statistic Template starts here......... */}

      <StatTemplate></StatTemplate>
    </DashBoard>
  );
};

export default Dashboard;
