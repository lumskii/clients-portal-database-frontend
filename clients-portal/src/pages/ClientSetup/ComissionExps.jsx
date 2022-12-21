import {
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";

const ComissionExps = ({
  formik,
  showContents,
  setShowContents,
  GrossFieldArray,
}) => {

  return (
    <>
      <Grid fullWidth sx={{ gridColumn: "span 4" }}>
        <div
          className={showContents ? "exp_btn_close" : "exp_btn"}
          onClick={() => setShowContents(!showContents)}
        >
          {showContents === true ? "Close" : "Add"}
        </div>

        {showContents && (
          <div className="dropDown">
            <GrossFieldArray />
          </div>
        )}
      </Grid>

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

      <TextField
        sx={{ gridColumn: "span 2" }}
        variant="filled"
        fullWidth
        label="Ingestion Fee (flat)"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              $
            </InputAdornment>
          ),
        }}
        id="filled-start-adornment"
        value={formik.values.ingestionFee}
        onChange={formik.handleChange}
        name="ingestionFee"
        type="number"
      />

      <TextField 
        sx={{ gridColumn: "span 2" }}
        variant="filled"
        fullWidth
        label="Marketing Cap"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              $
            </InputAdornment>
          ),
        }}
        id="filled-start-adornment"
        value={formik.values.marketingCap}
        onChange={formik.handleChange}
        name="marketingCap"
        type="number"
      />

      <TextField
        sx={{ gridColumn: "span 2" }}
        variant="filled"
        fullWidth
        label="Film Market Cost (flat)"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              $
            </InputAdornment>
          ),
        }}
        id="filled-start-adornment"
        value={formik.values.filmMarketCost}
        onChange={formik.handleChange}
        name="filmMarketCost"
        type="number"
      />
    </>
  );
};

export default ComissionExps;
    
