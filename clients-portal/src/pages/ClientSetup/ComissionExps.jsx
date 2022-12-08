import { Button, FormControl, FormLabel, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import {  FieldArray, Formik } from 'formik';
import React from 'react'
import { useState } from 'react';

const ComissionExps = ({ formik }) => {
  return (
    <>
      <Formik initialValues={formik.values}>
        <FormControl
          fullWidth
          variant="filled"
          sx={{ gridColumn: "span 3", alignItems: "center" }}
        >
          <FieldArray
            name="gross"
            handleChange={formik.handleChange}
            values={formik.values}
            render={arrayHelpers => (
              <React.Fragment>
                <FormLabel sx={{ fontWeight: "bold" }}>
                  Add Movie Gross
                </FormLabel>

                {formik.values.gross.map((_, index) => (
                  <>
                    <TextField
                      key={index}
                      id="filled-end-adornment"
                      value={formik.values["gross"][index]["grossCor"]}
                      onChange={formik.handleChange}
                      // onChange={(e) => {
                      //   if (formik) {
                      //     formik.setFieldValue(
                      //       `gross.${index}.grossCor`,
                      //       e.target.value
                      //     );
                      //     formik.validate(`gross.${index}.grossCor`);
                      //   }
                      // }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">%</InputAdornment>
                        ),
                      }}
                      name={`gross.${index}.grossCor`}
                      type="number"
                      variant="filled"
                      label="Gross Corridor"
                      sx={{ gridColumn: "span 2" }}
                      fullWidth
                    />

                    <FormControl
                      fullWidth
                      variant="filled"
                      sx={{ gridColumn: "span 2" }}
                    >
                      <InputLabel id="dropdown4">
                        Gross Corridor Rights
                      </InputLabel>
                      <Select
                        labelId="dropdown4"
                        id="dropdown4"
                        name={`gross[${index}].grossCorRights`}
                        value={formik.values["gross"][index]["grossCorRights"]}
                        onChange={formik.handleChange}
                      >
                        <MenuItem value="tvod">TVOD</MenuItem>
                        <MenuItem value="svod">SVOD</MenuItem>
                        <MenuItem value="avod">AVOD</MenuItem>
                        <MenuItem value="tv">TV</MenuItem>
                        <MenuItem value="sell_thru">SELL THROUGH</MenuItem>
                      </Select>
                    </FormControl>
                    <Button
                      type="button"
                      className="exp_btn_close"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      Delete
                    </Button>
                  </>
                ))}
                <div
                  className="exp_btn"
                  onClick={() =>
                    arrayHelpers.push({ grossCor: 0, grossCorRights: "" })
                  }
                >
                  Add
                </div>
              </React.Fragment>
            )}
          />
        </FormControl>
      </Formik>

      <TextField
        id="filled-end-adornment"
        value={formik.values.distributionFee}
        onChange={formik.handleChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
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
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        name="incomeReserves"
        type="number"
        sx={{ gridColumn: "span 2" }}
        variant="filled"
        fullWidth
        label="Income Reserves"
      />
    </>
  );
};

export default ComissionExps;

// export default function ComissionExps({formik}) {
//   const [showContents, setShowContents] = useState(false);
//   const [price, setPrice] = useState([]);

//   return (
    

// <>
  

// </>
//        );
//      }

{
  /* <div
              className={showContents ? "exp_btn_close" : "exp_btn"}
              onClick={() => setShowContents(!showContents)}
            >
              {showContents === true ? "Close" : "Add"}
            </div> */
}
{
  /* {showContents && (
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
                  </select> */
}
{
  /* <div className="exp_btn2 adjust" type='submit'>add</div> */
}
{
  /* </div>

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
            )} */
}
