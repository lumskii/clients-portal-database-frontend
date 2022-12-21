import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export default function AgreementInfo({formik, isToggled, setIsToggled, comment, setComment}) {

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
          helpertext={formik.touched.rightSale && formik.errors.rightSale}
        >
          <FormControlLabel
            value="yes"
            onClick={() => {setIsToggled(false) || setComment(false)}}
            control={<Radio />}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            onClick={() => setIsToggled(true)}
            control={<Radio />}
            label="No"
          />
          {isToggled && (
            <FormControl fullWidth variant="filled">
              <InputLabel id="dropdown4">Choose an option</InputLabel>
              <Select
                labelId="dropdown4"
                id="dropdown4"
                name="rightSaleOpt"
                value={formik.values.rightSaleOpt}
                onChange={formik.handleChange}
              >
                <MenuItem value="above 'low' in estimates" onClick={() => setComment(false)}>Above "Low" in Estimates</MenuItem>
                <MenuItem value="mexico" onClick={() => setComment(false)}>Producer - With Time Restraint</MenuItem>
                <MenuItem value="uk" onClick={() => setComment(false)}>Producer</MenuItem>
                <MenuItem value="other" onClick={() => setComment(true)}>Other</MenuItem>
              </Select>
            </FormControl>
          )}
          {comment && (
            <TextField
              id="filled-multiline-static"
              label="Comment"
              name="comment"
              multiline
              value={formik.values.comment}
              onChange={formik.handleChange}
              rows={4}
              type="text"
              placeholder="Give details..."
              onBlur={formik.handleBlur}
              error={!!formik.touched.comment && !!formik.errors.comment}
              helpertext={formik.touched.comment && formik.errors.comment}
              variant="filled"
            />
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
        >
          <MenuItem value="usa">USA</MenuItem>
          <MenuItem value="canada">Canada</MenuItem>
          <MenuItem value="mexico">Mexico</MenuItem>
          <MenuItem value="uk">UK</MenuItem>
          <MenuItem value="germany">Germany</MenuItem>
          <MenuItem value="japan">Japan</MenuItem>
          <MenuItem value="other">Other</MenuItem>
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
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
