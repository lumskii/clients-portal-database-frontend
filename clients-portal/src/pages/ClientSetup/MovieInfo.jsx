import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";


export default function MovieInfo({formik}) {

  return (
      <>
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Film Name"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.filmName}
        name="filmName"
        error={!!formik.touched.filmName && !!formik.errors.filmName}
        helperText={formik.touched.filmName && formik.errors.filmName}
        sx={{ gridColumn: "span 2" }}
      />

      <TextField
        fullWidth
        variant="filled"
        label="Producer's Email"
        type="email"
        name="producersEmail"
        onBlur={formik.handleBlur}
        value={formik.values.producersEmail}
        onChange={formik.handleChange}
        error={!!formik.touched.producersEmail && !!formik.errors.producersEmail}
        helperText={formik.touched.producersEmail && formik.errors.producersEmail}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        variant="filled"
        label="Film's Code"
        type="text"
        value={formik.values.filmsCode}
        name="filmsCode"
        sx={{ gridColumn: "span 2" }}
      />
      <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
        <InputLabel id="dropdown">Distribution type</InputLabel>
        <Select
          labelId="dropdown"
          id="dropdown"
          name="distributionType"
          value={formik.values.distributionType}
          onChange={formik.handleChange}
          label="Distribution Type"
          error={!!formik.touched.distributionType && !!formik.errors.distributionType}
          helperText={formik.touched.distributionType && formik.errors.distributionType}
        >
          <MenuItem value="North America">North America</MenuItem>
          <MenuItem value="World">World</MenuItem>
          <MenuItem value="World excluding North America">World excluding North America</MenuItem>
          <MenuItem value="International">International - Limited</MenuItem>
        </Select>
      </FormControl>
      </>
  );
}
