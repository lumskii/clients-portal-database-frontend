import React from 'react'

export default function Date({details, setDetails, handleChange}) {
  return (
    <div id="dates">
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
            </div>
  )
}
