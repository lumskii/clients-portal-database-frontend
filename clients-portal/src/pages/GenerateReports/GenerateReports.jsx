import React, { useState } from 'react';
import { FormControl, InputLabel, Grid } from '@mui/material';
import Header from '../../components/Heading';
import Report from './Report';
import { CustomizedSelect } from './Styled';
import './generateReports.css';
import { types } from './Data';

const STATUS = {
  NONE: 'none',
  SELECT_VIEW: 'select_view',
  REPORT_VIEW: 'report_view',
};

export default function Reports() {
  const [status, setStatus] = useState(STATUS.NONE);
  const [type, setType] = useState();
  const [option, setOption] = useState();
  const [value, setValue] = useState();

  const changeOption = (value) => {
    const option = type?.options.find((type) => type.label === value);
    setOption(option);
    setStatus(STATUS.SELECT_VIEW);
    setValue();
  };

  const changeType = (value) => {
    const type = types.find((type) => type.label === value);
    setType(type);
    changeOption();
  };

  const Selector = option?.selector;

  return (
    <>
      <Header
        title="Generate Reports"
        subtitle="Generate reports based on specified criterias"
      />

      {status === STATUS.REPORT_VIEW ? (
        <>
          <Report
            option={option}
            value={value}
            onClose={() => setStatus(STATUS.SELECT_VIEW)}
          />
        </>
      ) : status === STATUS.NONE ? (
        <button className="submit" type="button" onClick={() => changeType()}>
          Generate
        </button>
      ) : (
        <>
          <button
            className="exp_btn_close"
            type="button"
            onClick={() => {
              changeType();
              setStatus(STATUS.NONE);
            }}
          >
            Close
          </button>

          <Grid container spacing={4} sx={{ mt: 0 }}>
            <Grid item xs={12}>
              <FormControl variant="filled" sx={{ width: '100%' }}>
                <InputLabel>Select type</InputLabel>
                <CustomizedSelect
                  options={types}
                  value={type?.label}
                  setValue={changeType}
                  hasNone
                />
              </FormControl>
            </Grid>

            {type && (
              <Grid item xs={12} md={6}>
                <FormControl variant="filled" sx={{ width: '100%' }}>
                  <InputLabel>Select option</InputLabel>
                  <CustomizedSelect
                    options={type.options}
                    value={option?.label}
                    setValue={changeOption}
                  />
                </FormControl>
              </Grid>
            )}

            {Selector && (
              <Grid item xs={12} md={6}>
                <FormControl variant="filled" sx={{ width: '100%' }}>
                  <Selector value={value} setValue={setValue} />
                </FormControl>
              </Grid>
            )}
          </Grid>

          {value && (
            <button
              type="button"
              className="submit"
              style={{ marginTop: 20 }}
              onClick={() => setStatus(STATUS.REPORT_VIEW)}
            >
              Run Report
            </button>
          )}
        </>
      )}
    </>
  );
}
