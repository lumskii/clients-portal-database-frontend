import React, { useState, useEffect } from "react";
import { DashBoard, PageTemplate } from "../Dashboard/DashboardElements";
import { Header, HeaderTitle } from "./ClientSetupElements";
import axios from "axios";
import "./ClientStyles.css";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";

const initialState = {
  filmName: "",
  producersEmail: "",
  filmsPassword: "",
  filmsCode: "",
  distributionType: "",
  rightSale: "",
  cama: "",
  countryLaw: "",
  stateLaw: "",
  effectiveDate: "",
  dateSignature: "",
  renewalDate: "",
  renewalExpiration: "",
  grossCor: "",
  grossCorRights: "",
  salesFee: "",
  producerPay: "",
  expenseCap: "",
  deliveryFees: "",
  distributionFee: "",
  incomeReserves: "",
  otherExps: "",
  accountingTerms: "",
};

const ClientSetup = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitClientDetails = async () => {
      const submitted = await axios.post("v1/clients", details);

      if (
        submitted &&
        submitted.data.success &&
        submitted.data.status === 200
      ) {
        cogoToast.success("Client added successfully", {
          position: "top-center",
        });
        console.log("submitted", submitted.data);
        setDetails(initialState);
        navigate('/clients');
      } else {
        cogoToast.error("Could not submit client info");
      }
    };

    submitClientDetails();
  };

  useEffect(() => {
    const filmCode = "OMM" + Math.floor(100000 + Math.random() * 900000);
    console.log("filmcode", filmCode);
    setDetails({ ...details, filmsCode: filmCode });
  }, []);

  return (
    <DashBoard>
      <PageTemplate>
        <Header>
          <HeaderTitle>Client Form</HeaderTitle>
        </Header>
        <div className="cap">
          <form className="form_space" onSubmit={handleSubmit}>
            <p>Film name</p>
            <input
              className="text_area"
              type="text"
              name="filmName"
              value={details.filmName}
              onChange={handleChange}
            />
            <p>Producer's Email</p>
            <input
              className="text_area"
              type="email"
              name="producersEmail"
              value={details.producersEmail}
              onChange={handleChange}
            />
            <p>Film's Password</p>
            <input
              className="text_area"
              type="password"
              name="filmsPassword"
              value={details.filmsPassword}
              onChange={handleChange}
            />
            <p>Film's Code</p>
            <input
              className="text_area"
              type="text"
              value={details.filmsCode}
              name="filmsCode"
            />
            <p>Distribution type</p>
            <select
              id="dropdown"
              className="text_area"
              name="distributionType"
              onChange={handleChange}
            >
              <option disabled selected value="">
                Please select category
              </option>
              <option value="sales">Sales Only</option>
              <option value="distribution">Distribution Only</option>
              <option value="sales_distribution">Sales & Distribution</option>
            </select>

            <p>Agreement Information</p>
            <span className="sub_heading">Right of Sale</span>
            <label className="option">
              <input
                className="radio-check"
                type="radio"
                value="yes"
                name="rightSale"
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="option">
              <input
                className="radio-check"
                type="radio"
                value="no"
                name="rightSale"
                onChange={handleChange}
              />
              <span>No</span>
            </label>

            <span className="sub_heading">CAMA Involved</span>
            <label className="option">
              <input
                className="radio-check"
                type="radio"
                value="yes"
                name="cama"
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="option">
              <input
                className="radio-check"
                type="radio"
                value="no"
                name="cama"
                onChange={handleChange}
              />
              <span>No</span>
            </label>

            <span className="sub_heading">Country of Law</span>
            <select
              id="dropdown2"
              className="text_area2"
              name="countryLaw"
              onChange={handleChange}
            >
              <option disabled selected value="">
                Please select category
              </option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
              <option value="uk">UK</option>
              <option value="germany">Germany</option>
              <option value="japan">Japan</option>
              <option value="other">other...</option>
            </select>

            <span className="sub_heading">State of Law</span>
            <select
              id="dropdown3"
              className="text_area2"
              name="stateLaw"
              onChange={handleChange}
            >
              <option disabled selected value="">
                Please select category
              </option>
              <option value="california">California</option>
              <option value="arizona">Arizona</option>
              <option value="other">other...</option>
            </select>

            <span className="sub_heading">Effective Date</span>
            <input
              className="text_area2"
              type="date"
              name="effectiveDate"
              value={details.effectiveDate}
              onChange={handleChange}
            />

            <span className="sub_heading">Date of Signature</span>
            <input
              className="text_area2"
              type="date"
              name="dateSignature"
              value={details.dateSignature}
              onChange={handleChange}
            />

            <span className="sub_heading">Renewal Date</span>
            <input
              className="text_area2"
              type="date"
              name="renewalDate"
              value={details.renewalDate}
              onChange={handleChange}
            />

            <span className="sub_heading">Renewal Expiration</span>
            <input
              className="text_area2"
              type="date"
              name="renewalExpiration"
              value={details.renewalExpiration}
              onChange={handleChange}
            />

            <span className="sub_heading">Gross Corridor %</span>
            <input
              className="text_area2"
              type="number"
              min="1"
              max="100"
              name="grossCor"
              value={details.grossCor}
              onChange={handleChange}
            />

            <span className="sub_heading">Gross Corridor Rights</span>
            <select
              id="dropdown4"
              className="text_area2"
              name="grossCorRights"
              onChange={handleChange}
            >
              <option disabled selected value="">
                Please select category
              </option>
              <option value="tvod">TVOD</option>
              <option value="svod">SVOD</option>
              <option value="avod">AVOD</option>
              <option value="tv">TV</option>
              <option value="sell_thru">Sell through...</option>
            </select>

            <span className="sub_heading">Sales Fee %</span>
            <input
              className="text_area2"
              type="number"
              min="1"
              max="100"
              name="salesFee"
              value={details.salesFee}
              onChange={handleChange}
            />

            <span className="sub_heading">Producer Payment Terms</span>
            <input
              className="text_area2"
              type="text"
              name="producerPay"
              value={details.producerPay}
              onChange={handleChange}
            />

            <span className="sub_heading">Expense Cap</span>
            <input
              className="text_area2"
              type="text"
              placeholder="$"
              name="expenseCap"
              value={details.expenseCap}
              onChange={handleChange}
            />

            <span className="sub_heading">Delivery Fees</span>
            <input
              className="text_area2"
              type="text"
              placeholder="$"
              name="deliveryFees"
              value={details.deliveryFees}
              onChange={handleChange}
            />

            <span className="sub_heading">Distribution Fee %</span>
            <input
              className="text_area2"
              type="number"
              min="1"
              max="100"
              name="distributionFee"
              value={details.distributionFee}
              onChange={handleChange}
            />

            <span className="sub_heading">Income Reserves %</span>
            <input
              className="text_area2"
              type="number"
              min="1"
              max="100"
              name="incomeReserves"
              value={details.incomeReserves}
              onChange={handleChange}
            />

            <span className="sub_heading">Other Expenses Caps Description</span>
            <select
              id="dropdown5"
              className="text_area2"
              name="otherExps"
              onChange={handleChange}
            >
              <option disabled selected value="">
                Please select category
              </option>
              <option value="add_cap">Add Cap</option>
              <option value="anotherExps">Another Expense...</option>
            </select>

            <span className="sub_heading">Accounting Terms</span>
            <select
              id="dropdown6"
              className="text_area2"
              name="accountingTerms"
              onChange={handleChange}
            >
              <option disabled selected value="">
                Please select category
              </option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quaterly</option>
              <option value="bi_annual">Bi-annual</option>
              <option value="none">None</option>
              <option value="other">other...</option>
            </select>

            <button type="submit" id="submit">
              Submit
            </button>
          </form>
        </div>
      </PageTemplate>
    </DashBoard>
  );
};

export default ClientSetup;