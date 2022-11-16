import React from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";

export default function MovieInfo({details, handleChange, checkoutSchema, initialState}) {

  return (
          <>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Film Name"
                  onChange={handleChange}
                  value={details.filmName}
                  name="filmName"
                  errorMesssage="This Should not include any special characters"
                  // error={!!touched.filmName && !!errors.filmName}
                  // helperText={touched.filmName && errors.filmName}
                  sx={{ gridColumn: "span 2" }} 
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
          </>
          
          
  )
}
