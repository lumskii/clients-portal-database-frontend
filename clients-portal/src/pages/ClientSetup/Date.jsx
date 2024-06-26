import { FormControl, FormLabel, TextField } from '@mui/material';
import React from 'react';

export default function Date({ formik }) {
  return (
    <>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <FormLabel id="dates">Effective Date</FormLabel>
        <TextField
          type="date"
          name="effectiveDate"
          value={formik.values.effectiveDate}
          onChange={formik.handleChange}
          variant="filled"
          onBlur={formik.handleBlur}
          error={
            !!formik.touched.effectiveDate && !!formik.errors.effectiveDate
          }
          helperText={
            formik.touched.effectiveDate && formik.errors.effectiveDate
          }
        />
      </FormControl>

      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <FormLabel id="dates">Date of Signature</FormLabel>
        <TextField
          type="date"
          name="dateSignature"
          value={formik.values.dateSignature}
          onChange={formik.handleChange}
          variant="filled"
        />
      </FormControl>

      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <FormLabel id="dates">Renewal Date</FormLabel>
        <TextField
          type="date"
          name="renewalDate"
          value={formik.values.renewalDate}
          onChange={formik.handleChange}
          variant="filled"
        />
      </FormControl>

      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <FormLabel id="dates">Term Expiration</FormLabel>
        <TextField
          type="date"
          name="renewalExpiration"
          value={formik.values.renewalExpiration}
          onChange={formik.handleChange}
          variant="filled"
        />
      </FormControl>
    </>
  );
}
