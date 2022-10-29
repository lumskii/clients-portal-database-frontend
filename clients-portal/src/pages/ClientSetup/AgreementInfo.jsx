import React from 'react'

export default function AgreementInfo({details, setDetails, handleChange}) {
  return (
    <div id="agreement">
            <span className="sub_heading">Right of Sale</span>
            <label className="option" >
              <input
                className="radio-check"
                type="radio"
                value="yes"
                name="rightSale"
                onChange={(e) => setDetails({ ...details, rightSale: e.target.value})}
              />
              <span>Yes</span>
            </label>
            <label className="option">
              <input
                className="radio-check"
                type="radio"
                value="no"
                name="rightSale"
                onChange={(e) => setDetails({ ...details, rightSale: e.target.value})}
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
                onChange={(e) => setDetails({ ...details, cama: e.target.value})}
              />
              <span>Yes</span>
            </label>
            <label className="option">
              <input
                className="radio-check"
                type="radio"
                value="no"
                name="cama"
                onChange={(e) => setDetails({ ...details, cama: e.target.value})}
              />
              <span>No</span>
            </label>

            <span className="sub_heading">Country of Law</span>
            <select
              id="dropdown2"
              className="text_area2"
              name="countryLaw"
              value={details.countryLaw}
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
              value={details.stateLaw}
              onChange={handleChange}
            >
              <option disabled selected value="">
                Please select category
              </option>
              <option value="california">California</option>
              <option value="arizona">Arizona</option>
              <option value="other">other...</option>
            </select>
            </div>
  )
}
