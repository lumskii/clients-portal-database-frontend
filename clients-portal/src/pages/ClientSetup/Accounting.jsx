import React from 'react'

export default function Accounting({details, setDetails, handleChange}) {
  return (
    <div id="accounting">
            <span className="sub_heading">Accounting Terms</span>
            <select
              id="dropdown6"
              className="text_area2"
              name="accountingTerms"
              value={details.accountingTerms}
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
            </div>
  )
}
