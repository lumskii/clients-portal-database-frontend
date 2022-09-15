import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import './styles.css';
import {
  DashBoard,
  PageTemplate,
  UserPlus,
  UserEdit,
  UsersCog,
  PayMoney,
  PointOfSale,
  DistributeHori,
  More,
} from "./DashboardElements";

const Dashboard = () => {
  return (
    <DashBoard>
      <Header />
      <Navbar />
      <PageTemplate>
        <div className="header">
            <p className='header-title'>Dashboard Overview</p>
            <div className='symbols'><More /></div>
        </div>
        <div class="cards">
          <div class="card">
            <div class="card__inner">
                <UserPlus />
                <span className='text'>Set Up New Client</span>
            </div>
          </div>

          <div class="card">
            <div class="card__inner">
                <UserEdit />
                <span className='text'>Edit a Client</span>
            </div>
          </div>

          <div class="card">
            <div class="card__inner">
                <UsersCog />
                <span className='text'>Bulk Updates</span>
            </div>
          </div>

          <div class="card">
            <div class="card__inner">
                <PayMoney />
                <span className='text'>Add Expenses</span>
            </div>
          </div>

          <div class="card">
            <div class="card__inner">
                <PointOfSale />
                <span className='text'>Add/Edit Sales Revenue</span>
            </div>
          </div>

          <div class="card">
            <div class="card__inner">
                <DistributeHori />
                <span className='text'>Add/Edit Distribution Revenue</span>
            </div>
          </div>
        </div>
      </PageTemplate>
    </DashBoard>
  );
}

export default Dashboard