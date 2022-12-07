import { FormControl, FormLabel, TextField } from '@mui/material'
import React from 'react'

export default function Date({details, setDetails, handleChange}) {
  return (
      <>
          <FormControl fullWidth  sx={{ gridColumn: "span 2" }}>
            <FormLabel id='dates'>Effective Date</FormLabel>
            <TextField
              type="date"
              name="effectiveDate"
              value={details.effectiveDate}
              onChange={handleChange}
              variant="filled"
            />
          </FormControl>

          <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
            <FormLabel id="dates">Date of Signature</FormLabel>
            <TextField
              type="date"
              name="dateSignature"
              value={details.dateSignature}
              onChange={handleChange}
              variant="filled"
            />
          </FormControl>

          <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
            <FormLabel id="dates">Renewal Date</FormLabel>
            <TextField
              type="date"
              name="renewalDate"
              value={details.renewalDate}
              onChange={handleChange}
              variant="filled"
            />
          </FormControl>

          <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
            <FormLabel id="dates">Term Expiration</FormLabel>
            <TextField
              type="date"
              name="renewalExpiration"
              value={details.renewalExpiration}
              onChange={handleChange}
              variant="filled"
            />
          </FormControl>
      </>
  )
}
