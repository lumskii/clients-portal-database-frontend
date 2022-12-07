import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export default function AgreementInfo({details, setDetails, handleChange}) {
  const [isToggled, setIsToggled] = useState(false);

  const handleRadioChange = (e) => {
    setDetails({ ...details, rightSale: e.target.value});
  };
  return (
      <>
        <FormControl 
        fullWidth
        variant="filled"
        sx={{ gridColumn: "span 2" }}
        >
          <FormLabel id="agreement">Right of Sale</FormLabel>
          <RadioGroup
            aria-labelledby='agreement'
            name="rightSale"
            value={details.rightSale}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="yes" onClick={() => setIsToggled(false)} control={<Radio />} label="Yes" />
            <FormControlLabel value="no" onClick={() => setIsToggled(true)} control={<Radio />} label="No" />
            {isToggled ? <TextField
              id="filled-multiline-static"
              label="Comment"
              multiline
              value={details.descri}
              rows={4}
              placeholder="Give details..."
              // defaultValue="Default Value"
              variant="filled"
            /> : <></>}
          </RadioGroup>
        </FormControl>

        <FormControl 
        fullWidth
        variant="filled"
        sx={{ gridColumn: "span 2" }}
        >
          <FormLabel id="agreement">CAMA Involved</FormLabel>
          <RadioGroup
            aria-labelledby='agreement'
            name="cama"
            value={details.cama}
            onChange={(e) => setDetails({ ...details, cama: e.target.value})}
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
            value={details.countryLaw}
            onChange={handleChange}
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
            value={details.stateLaw}
            onChange={handleChange}
            label="State of Law"
          >
            <MenuItem value="california">California</MenuItem>
            <MenuItem value="arizona">Arizona</MenuItem>
            <MenuItem value="other">other...</MenuItem>
          </Select>
        </FormControl>
      </>
  )
}
