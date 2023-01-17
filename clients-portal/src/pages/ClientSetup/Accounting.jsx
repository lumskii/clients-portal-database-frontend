import {
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';

export default function Accounting({ formik }) {
  return (
    <>
      <FormControl fullWidth variant="filled" sx={{ gridColumn: 'span 4' }}>
        <InputLabel id="dropdown">Accounting Terms</InputLabel>
        <Select
          labelId="dropdown6"
          id="dropdown6"
          name="accountingTerms"
          value={formik.values.accountingTerms}
          onChange={formik.handleChange}
        >
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="quarterly">Quaterly</MenuItem>
          <MenuItem value="bi_annual">Bi-annual</MenuItem>
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="other">other...</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Reporting Schedule"
        type="text"
        variant="filled"
        sx={{ gridColumn: 'span 4' }}
        rows={4}
        multiline
        id="multiline"
        name="reportingSchedule"
        value={formik.values.reportingSchedule}
        onChange={formik.handleChange}
        placeholder="Enter Reporting Schedule"
      />

      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <FormLabel id="dates">Semi-Annual Reporting Start Date</FormLabel>
        <TextField
          type="date"
          name="reportingStartDate"
          variant="filled"
          value={formik.values.reportingStartDate}
          onChange={formik.handleChange}
        />
      </FormControl>
    </>
  );
}
