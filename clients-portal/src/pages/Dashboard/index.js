import React, { useState } from 'react';
import './styles.css';
import {
  PageTemplate,
  More,
  StatArea,
  PageContainer,
} from './DashboardElements';
import { dashLinks } from './DashboardData';
import { NavLink as Links } from 'react-router-dom';
import WidgetSm from '../../components/widgetSm/WidgetSm';

const Dashboard = () => {
  const [showContents, setShowContents] = useState(false);

  return (
    <PageContainer>
      <PageTemplate>
        <div className="header">
          <span className="header-title">Dashboard Overview</span>
          <div
            className="symbols"
            onClick={() => setShowContents(!showContents)}
          >
            {showContents === true ? 'X' : <More />}
          </div>
          {showContents && <StatArea>Statistic Stuffs</StatArea>}
        </div>
        <div className="cards">
          {dashLinks.map((item, id) => {
            return (
              <div className="card" key={id}>
                <Links to={item.to} className="links">
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
      <WidgetSm />
    </PageContainer>
  );
};

export default Dashboard;
