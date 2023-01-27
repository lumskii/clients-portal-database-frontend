import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { server } from '../../constance';
import './widgetLg.css';

const WidgetLg = () => {
  const [numClients, setNumClients] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const res = await axios.get(`${server}/v1/clients`);
        setNumClients(res.data.data.clients.length);
      }
      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">This week's Overview</span>
      <h5 className="subHeading">Clients Added</h5>
      <div className="counterContainer">
        <span className="counter">{numClients}</span>
      </div>
      <div className="divider"></div>
      <h5 className="subHeading">Contracts Signed</h5>
      <div className="counterContainer">
        <span className="counter">5</span>
      </div>
    </div>
  );
};

export default WidgetLg;
