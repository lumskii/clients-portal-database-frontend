import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function Accounting({details, setDetails, handleChange}) {
  return (
    <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 4" }}>
        <InputLabel id="dropdown">Accounting Terms</InputLabel>
            <Select
              labelId="dropdown6"
              id="dropdown6"
              name="accountingTerms"
              value={details.accountingTerms}
              onChange={handleChange}
            >
                  <MenuItem value="monthly">Monthly</MenuItem>
                  <MenuItem value="quarterly">Quaterly</MenuItem>
                  <MenuItem value="bi_annual">Bi-annual</MenuItem>
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="other">other...</MenuItem>
            </Select>
    </FormControl>
  )
}
