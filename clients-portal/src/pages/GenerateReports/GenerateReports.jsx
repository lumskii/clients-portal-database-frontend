import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Grid } from '@mui/material';
import { DashBoard } from '../Dashboard/DashboardElements';
import Header from '../../components/Heading';
import AgeSelector from './selectors/AgeSelector';
import BuyerSelector from './selectors/BuyerSelector';
import ContractExpirationSelector from './selectors/ContractExpirationSelector';
import DateSelector from './selectors/DateSelector';
import GenreSelector from './selectors/GenreSelector';
import MonthSelector from './selectors/MonthSelector';
import PlatformSelector from './selectors/PlatformSelector';
import RuntimeSelector from './selectors/RuntimeSelector';
import TerritorySelector from './selectors/TerritorySelector';
import YearSelector from './selectors/YearSelector';
import Report from './Report';
import { CustomizedSelect } from './Styled';
import './generateReports.css';

const STATUS = {
  NONE: 'none',
  SELECT_VIEW: 'select_view',
  REPORT_VIEW: 'report_view',
};

const types = [
  {
    label: 'Film Report',
    options: [
      { label: 'Film by Buyer', selector: BuyerSelector },
      { label: 'Film by Territory', selector: TerritorySelector },
      { label: 'Film by Age', selector: AgeSelector },
      {
        label: 'Film by Contract Expiration',
        selector: ContractExpirationSelector,
      },
      { label: 'Film by Genre', selector: GenreSelector },
    ],
  },
  {
    label: 'Revenue Report',
    options: [
      { label: 'Revenue by Territory', selector: TerritorySelector },
      { label: 'Revenue by Platform', selector: PlatformSelector },
      { label: 'Revenue by Year', selector: YearSelector },
      { label: 'Revenue by Month', selector: MonthSelector },
    ],
  },
  {
    label: 'Sales Report',
    options: [
      { label: 'Sales by Buyer', selector: BuyerSelector },
      { label: 'Sales by Territory', selector: TerritorySelector },
      { label: 'Sales by Year', selector: YearSelector },
      { label: 'Sales by Runtime', selector: RuntimeSelector },
      { label: 'Sales by Genre', selector: GenreSelector },
    ],
  },
  {
    label: 'Client Report',
    options: [
      { label: 'Client by Birthday', selector: DateSelector },
      { label: 'Client by Territory', selector: TerritorySelector },
      { label: 'Client by Age', selector: AgeSelector },
    ],
  },
];

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
    <DashBoard>
      <Box p="80px 20px 20px 20px">
        <Header
          title="Generate Reports"
          subtitle="Generate a report base on specified criterias"
        />

        {status === STATUS.REPORT_VIEW ? (
          <>
            <Report
              type={type}
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
      </Box>
    </DashBoard>
  );
}
