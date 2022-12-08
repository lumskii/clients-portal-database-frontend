import { Button, FilledInput, FormControl, FormLabel, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { FieldArray } from 'formik';
import React from 'react'
import { useState } from 'react';

export default function ComissionExps({formik}) {
    const [showContents, setShowContents] = useState(false);
    const [price, setPrice] = useState([]);

  return (
    <>
        <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 3", alignItems: "center" }}>
          <FieldArray name="gross">
            {({ push, remove }) => (
              <React.Fragment>
                <FormLabel sx={{ fontWeight: "bold" }}>Add Movie Gross</FormLabel>

                {formik.values.gross.map((_, index) => (
                  <>
                    <TextField 
                      id="filled-end-adornment"
                      value={formik.values.gross.grossCor}
                      onChange={formik.handleChange}
                      InputProps={{endAdornment:<InputAdornment position="end">%</InputAdornment>}}
                      name={`gross.${index}.grossCor`}
                      type="number"
                      variant="filled" 
                      label="Gross Corridor"
                      sx={{ gridColumn: "span 2" }}
                      fullWidth
                    />
                    
                    <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                      <InputLabel id="dropdown4">Gross Corridor Rights</InputLabel>
                      <Select
                        labelId="dropdown4"
                        id="dropdown4"
                        name={`gross[${index}].grossCorRights`}
                        value={formik.values.grossCorRights}
                        onChange={formik.handleChange}
                      >
                        <MenuItem value="tvod">TVOD</MenuItem>
                        <MenuItem value="svod">SVOD</MenuItem>
                        <MenuItem value="avod">AVOD</MenuItem>
                        <MenuItem value="tv">TV</MenuItem>
                        <MenuItem value="sell_thru">SELL THROUGH</MenuItem>
                      </Select>
                    </FormControl>
                    <div className="exp_btn_close" onClick={() => remove(index)}>Delete</div>
                  </>
                ))}
                  <div className="exp_btn" onClick={() => push({ grossCor: '', grossCorRights: 0 })}>
                  Add
                </div>
              </React.Fragment>
            )}
          </FieldArray>
        </FormControl>

        <TextField
          id="filled-end-adornment"
          value={formik.values.distributionFee}
          onChange={formik.handleChange}
          InputProps={{endAdornment:<InputAdornment position="end">%</InputAdornment>}}
          name="distributionFee"
          type="number"
          sx={{ gridColumn: "span 2" }}
          variant="filled" 
          fullWidth
          label="Distribution Fee"
        />

        <TextField
          id="filled-end-adornment"
          value={formik.values.incomeReserves}
          onChange={formik.handleChange}
          InputProps={{endAdornment:<InputAdornment position="end">%</InputAdornment>}}
          name="incomeReserves"
          type="number"
          sx={{ gridColumn: "span 2" }}
          variant="filled" 
          fullWidth
          label="Income Reserves"
        />
    </>
  )
}

 {/* <div
              className={showContents ? "exp_btn_close" : "exp_btn"}
              onClick={() => setShowContents(!showContents)}
            >
              {showContents === true ? "Close" : "Add"}
            </div> */}
            {/* {showContents && (
              <div className="dropDown">
                <span className="sub_heading">Please Choose Expense Type</span>
                <div className="selectorContainer">
                  <select
                    id="dropdown5"
                    className="text_area2"
                    name="expenseCap"
                    value={details.expenseCap}
                    onChange={handleChange}
                  >
                    <option disabled selected value="">
                      Please select category
                    </option>
                    <option value="Distribution Expense">
                      Distribution Expense
                    </option>
                    <option value="Delivery Expense">Delivery Expense</option>
                    <option value="Sales Expense">Sales Expense</option>
                  </select> */}
                  {/* <div className="exp_btn2 adjust" type='submit'>add</div> */}
                {/* </div>

                <span className="sub_heading">Or Add Customized Details</span>
                <textarea
                  className="text_area2 adjust2"
                  type="text"
                  placeholder="Enter your description here"
                  name="customExp"
                  value={details.customExp}
                  onChange={handleChange}
                />

                <span className="sub_heading">Or Enter the Amount</span>
                <input
                  className="text_area2"
                  type="number"
                  placeholder="$"
                  min="0"
                  name="expense"
                  value={details.expense}
                  onChange={handleChange}
                />
              </div>
            )} */}
