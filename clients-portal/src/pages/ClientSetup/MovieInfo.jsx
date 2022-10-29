import React from 'react'

export default function MovieInfo({details, setDetails, handleChange}) {

  return (
    <div id="movieInfo">
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
              value={details.distributionType}
              onChange={handleChange}
            >
              <option disabled selected value="">
                Please select category
              </option>
              <option value="sales">Sales Only</option>
              <option value="distribution">Distribution Only</option>
              <option value="sales_distribution">Sales & Distribution</option>
            </select>
            </div>
  )
}
