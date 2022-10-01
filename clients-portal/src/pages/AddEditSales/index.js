import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Header, HeaderTitle } from '../ClientSetup/ClientSetupElements'
import { DashBoard, PageTemplate } from '../Dashboard/DashboardElements'
import './SalesStyle.css'

const AddEditSales = () => {
    const [details, setDetails] = useState({
        cName: "",
        territory: "",
        salesAmount: "",
        receivedAmount: "",
        dealCD: "",
        dealED: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value};
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
    }

  return (
    <DashBoard>
      <Navbar />
      <PageTemplate>
        <Header>
          <HeaderTitle>Add/Edit Sales Revenue</HeaderTitle>
        </Header>

        <div className="cap">
          <div className="form_wrapper">
            <div className="form_heading">
              <div className="heading_space current">Add Sales Revenue</div>
              <div className="heading_space">Edit Sales Revenue</div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-input">
                <p>Company name</p>
                <input
                  type="text"
                  className="text_area"
                  name="cName"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <p>Territory</p>
                <input
                  type="text"
                  className="text_area"
                  name="territory"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <p>Sales Amount</p>
                <input
                  type="number"
                  className="text_area"
                  name="salesAmount"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <p>Received Amount</p>
                <input
                  type="number"
                  className="text_area"
                  name="receivedAmount"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <p>Deal closed Date</p>
                <input
                  type="date"
                  className="text_area"
                  name="dealCD"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <p>Deal Entered Date</p>
                <input
                  type="date"
                  className="text_area"
                  name="dealED"
                  onChange={handleChange}
                />
              </div>

              <div className="buttons">
                <button type="save" id="submit-button" className="left">
                  Save
                </button>
                <button type="submit" id="submit-button" className="right">
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      </PageTemplate>
    </DashBoard>
  );
}

export default AddEditSales