import React from 'react'

export default function Uploads({details, setDetails, handleChange}) {
  return (
            <div id="upload">
            <span className="sub_heading">Upload Film Poster</span>
            <input
              className="pics"
              type="file"
              value={details.avatar}
              onChange={handleChange}
            />
            </div>
  )
}
