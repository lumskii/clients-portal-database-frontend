import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export default function AgreementInfo({formik, isToggled, setIsToggled}) {

  // const handleRadioChange = (e) => {
  //   setDetails({ ...details, rightSale: e.target.value});
  // };
  return (
    <>
      <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
        <FormLabel id="agreement">Right of Sale</FormLabel>
        <RadioGroup
          aria-labelledby="agreement"
          name="rightSale"
          value={formik.values.rightSale}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!formik.touched.rightSale && !!formik.errors.rightSale}
          helperText={formik.touched.rightSale && formik.errors.rightSale}
        >
          <FormControlLabel
            value="yes"
            onClick={() => setIsToggled(false)}
            control={<Radio />}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            onClick={() => setIsToggled(true)}
            control={<Radio />}
            label="No"
          />
          {isToggled ? (
            <TextField
              id="filled-multiline-static"
              label="Comment"
              name="descri"
              multiline
              value={formik.values.descri}
              onChange={formik.handleChange}
              rows={4}
              type="text"
              placeholder="Give details..."
              onBlur={formik.handleBlur}
              error={!!formik.touched.descri && !!formik.errors.descri}
              helperText={formik.touched.descri && formik.errors.descri}
              variant="filled"
            />
          ) : (
            <></>
          )}
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
        <FormLabel id="agreement">CAMA Involved</FormLabel>
        <RadioGroup
          aria-labelledby="agreement"
          name="cama"
          value={formik.values.cama}
          // onChange={(e) => setDetails({ ...details, cama: e.target.value })}
          onChange={formik.handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
        <InputLabel id="dropdown2">Country of Law</InputLabel>
        <Select
          labelId="dropdown2"
          id="dropdown2"
          name="countryLaw"
          value={formik.values.countryLaw}
          onChange={formik.handleChange}
          label="Country of Law"
        >
          <MenuItem value="usa">USA</MenuItem>
          <MenuItem value="canada">Canada</MenuItem>
          <MenuItem value="mexico">Mexico</MenuItem>
          <MenuItem value="uk">UK</MenuItem>
          <MenuItem value="germany">Germany</MenuItem>
          <MenuItem value="japan">Japan</MenuItem>
          <MenuItem value="other">other...</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
        <InputLabel id="dropdown3">State of Law</InputLabel>
        <Select
          labelId="dropdown3"
          id="dropdown3"
          name="stateLaw"
          value={formik.values.stateLaw}
          onChange={formik.handleChange}
          label="State of Law"
        >
          <MenuItem value="california">California</MenuItem>
          <MenuItem value="arizona">Arizona</MenuItem>
          <MenuItem value="other">other...</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
