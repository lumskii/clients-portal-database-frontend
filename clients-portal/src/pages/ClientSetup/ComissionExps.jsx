import { FilledInput, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';

export default function ComissionExps({details, handleChange}) {
    const [showContents, setShowContents] = useState(false);
    const [price, setPrice] = useState([]);

  return (
    <>
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

              <TextField
                id="filled-end-adornment"
                value={details.grossCor}
                onChange={handleChange}
                InputProps={{endAdornment:<InputAdornment position="end">%</InputAdornment>}}
                name="grossCor"
                type="number"
                sx={{ gridColumn: "span 2" }}
                variant="filled" 
                fullWidth
                label="Gross Corridor"
              />

              <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                <InputLabel id="dropdown">Gross Corridor Rights</InputLabel>
                <Select
                  labelId="dropdown4"
                  id="dropdown4"
                  name="grossCorRights"
                  value={details.grossCorRights}
                  onChange={handleChange}
                >
                  <MenuItem value="tvod">TVOD</MenuItem>
                  <MenuItem value="svod">SVOD</MenuItem>
                  <MenuItem value="avod">AVOD</MenuItem>
                  <MenuItem value="tv">TV</MenuItem>
                  <MenuItem value="sell_thru">SELL THROUGH</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="filled-end-adornment"
                value={details.distributionFee}
                onChange={handleChange}
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
                value={details.incomeReserves}
                onChange={handleChange}
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
