import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Header, HeaderTitle } from '../ClientSetup/ClientSetupElements'
import { DashBoard, PageTemplate } from '../Dashboard/DashboardElements'

const Distribution = () => {
        const [showContents, setShowContents] = useState(false);

        const [details, setDetails] = useState({
            cName: "",
            cType: "",
            rType: "",
            territory: "",
            revenueAmount: "",
            receivedAmount: "",
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
          <HeaderTitle>Add/Edit Distribution Revenue</HeaderTitle>
        </Header>

        <div className="cap">
          <div className="form_wrapper">
            <div className="form_heading">
              <div className="heading_space current">
                Add Distribution Revenue
              </div>
              <div className="heading_space" onClick={() => setShowContents(!showContents)}>
                {showContents === true }Edit Distribution Revenue
                </div>
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
                <p>Company Type</p>
                <select
                  type="dropdown"
                  className="text_area"
                  name="cType"
                  onChange={handleChange}
                >
                  <option disabled selected value="">
                    Please select category
                  </option>
                  <option value="platform">Platform</option>
                  <option value="retail">Retail</option>
                  <option value="miscellaneous">Miscellaneous...</option>
                </select>
              </div>
              <div className="form-input">
                <p>Rights Type</p>
                <select
                  type="dropdown"
                  className="text_area"
                  name="rType"
                  onChange={handleChange}
                >
                  <option disabled selected value="">
                    Please select category
                  </option>
                  <option value="tvod">TVOD</option>
                  <option value="svod">SVOD</option>
                  <option value="tv">TV</option>
                  <option value="avod">AVOD</option>
                  <option value="sellThru">sell Through</option>
                  <option value="miscellaneous">Miscellaneous...</option>
                </select>
              </div>
              <div className="form-input">
                <p>Territory</p>
                <select
                  type="text"
                  className="text_area"
                  name="territory"
                  onChange={handleChange}
                >
                    <option disabled selected value="">
                    Please select category
                    </option>
                    <option value="australia">Australia/NZ</option>
                    <option value="benelux">Benelux</option>
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                    <option value="iceland">Iceland</option>
                    <option value="israel">Israel</option>
                    <option value="italy">Italy</option>
                    <option value="scandinavia">Scandinavia</option>
                    <option value="spain/portugal">Spain/Portugal</option>
                    <option value="turkey">Turkey</option>
                    <option value="poland">Poland</option>
                    <option value="united_kingdom">United Kingdom</option>
                    <option value="russia">Russia</option>
                    <option value="eastern_europe">Eastern Europe(Excluding CIS)</option>
                    <option value="asia_pay_tv">Asia Pay TV</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="philippines">Philippines</option>
                    <option value="thailand">Thailand</option>
                    <option value="singapore">Singapore</option>
                    <option value="japan">Japan</option>
                    <option value="taiwan">Taiwan</option>
                    <option value="Vietnam">South Korea</option>
                    <option value="middle_east">Middle East</option>
                    <option value="latin_america">Latin America</option>
                    <option value="south_africa">South Africa</option>
                    <option value="ancillary">Ancillary</option>
                </select>
              </div>
              <div className="form-input">
                <p>Revenue Amount</p>
                <input
                  type="number"
                  className="text_area"
                  name="revenueAmount"
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

export default Distribution