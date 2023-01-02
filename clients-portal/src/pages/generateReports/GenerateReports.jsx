import React, { useEffect, useState } from 'react'
import { DashBoard } from '../Dashboard/DashboardElements'
import { components } from 'react-select';
import './generateReports.css'
import { server } from '../../constance';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  // TextField,
  useMediaQuery,
} from "@mui/material";
import Header from '../../components/Heading';
import { DateRangePicker } from 'react-date-range';
import { CustomSelect } from './Styled';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { addDays } from 'date-fns';

export default function Reports() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedFilm, setSelectedFilm] = useState('');
  const [selectedRevenue, setSelectedRevenue] = useState('');
  const [selectedSales, setSelectedSales] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  const [button, setButton] = useState(false);
  const [runButton, setRunButton] = useState(false);
  const [titles, setTitles] = useState([]);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  const CustomInput = (inputProps) => {
    const { maxLength } = inputProps.selectProps;
    const inputPropsWithMaxLength = { ...inputProps, maxLength };

    return <components.Input {...inputPropsWithMaxLength} />;
  };

  const MSelect = ({ options, maxLength, ...props }) => (
      <CustomSelect
        options={options}
        components={{ Input: CustomInput }}
        className="select"
        classNamePrefix="select"
        inputId="custom-select"
        {...props}
      />
  );

    const valuetext = (value) => {
      return `${Number(value)}°C`;
    };

    const marks = [
      {
        value: 1,
        label: 'year',
      },
      {
        value: 10,
        label: 'years',
      },
      {
        value: 20,
        label: 'years',
      },
      {
        value: 30,
        label: 'years',
      },
    ];

      useEffect(() => {
        const callBackendAPI = () => {
          console.log("fetching...");
          fetch(`${server}/v1/clients`)
            .then((res) => res.json())
            .then((res) => {
              if (res.status === 200) {
                console.log("res", res.data.clients);
                let allTitles = res.data.clients.map((client) => ({
                  label: client.filmName,
                  value: client.filmName,
                  key: client._id,
                }));
    
                setTitles(allTitles);
              } else {
                console.log("unable to fetch");
              }
            });
        };
    
        callBackendAPI();
      }, []);

  return (
    <DashBoard>
      <Box m="80px 20px 20px 20px">
        <Header
          title="Generate Reports"
          subtitle="Generate a report base on specified criterias"
        />
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <div
            sx={{
              alignItems: "center",
              width: "500px",
              backgroundColor: "#000",
              height: "3px",
            }}
          >
            <button
              className={button ? "exp_btn_close" : "submit"}
              type="button"
              onClick={() => setButton(!button)}
            >
              {button === true ? "Close" : "Generate"}
            </button>
          </div>

          {button && (
            <>
              <FormControl
                style={{ width: "100%" }}
                variant="filled"
                sx={{ gridColumn: "span 4" }}
              >
                <InputLabel id="dropdown">Select type</InputLabel>
                <Select
                  name="reportType"
                  value={selectedOption}
                  onChange={(event) => {
                    setSelectedOption(event.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="film report">Film Report</MenuItem>
                  <MenuItem value="revenue report">Revenue Report</MenuItem>
                  <MenuItem value="sales report">Sales Report</MenuItem>
                  <MenuItem value="client report">Client Report</MenuItem>
                </Select>
              </FormControl>

              {selectedOption === "film report" && (
                <>
                  {
                    <>
                      <FormControl
                        style={{ width: "100%" }}
                        variant="filled"
                        sx={{ gridColumn: "span 2" }}
                      >
                        <InputLabel id="dropdown2">Select option</InputLabel>
                        <Select
                          name="titleReport"
                          value={selectedFilm}
                          onChange={(event) => {
                            setSelectedFilm(event.target.value);
                            setRunButton(true);
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="film by buyer">
                            Film by Buyer
                          </MenuItem>
                          <MenuItem value="film by territory">
                            Film by Territory
                          </MenuItem>
                          <MenuItem value="film by age">Film by Age</MenuItem>
                          <MenuItem value="film by contract">
                            Film by Contract Expiration
                          </MenuItem>
                          <MenuItem value="film by genre">
                            Film by Genre
                          </MenuItem>
                        </Select>
                      </FormControl>

                      {selectedFilm === "film by buyer" && (
                        <FormControl
                          style={{ width: "100%" }}
                          variant="filled"
                          sx={{ gridColumn: "span 2" }}
                        >
                          <MSelect options={titles} maxLength="4" />
                        </FormControl>
                      )}

                      {selectedFilm === "film by territory" && (
                        <FormControl
                          style={{ width: "100%" }}
                          variant="filled"
                          sx={{ gridColumn: "span 2" }}
                        >
                          <MSelect options={titles} maxLength="4" />
                        </FormControl>
                      )}

                      {selectedFilm === "film by age" && (
                        <FormControl
                          style={{ width: "100%" }}
                          variant="filled"
                          sx={{ gridColumn: "span 2" }}
                        >
                          <Slider
                            aria-label="Years"
                            defaultValue={1}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks={marks}
                            min={1}
                            max={30}
                          />
                        </FormControl>
                      )}

                      {selectedFilm === "film by genre" && (
                        <FormControl
                          variant="filled"
                          sx={{ gridColumn: "span 2" }}
                          style={{ width: "100%" }}
                        >
                          <InputLabel id="dropdown">Movie Genre</InputLabel>
                          <Select name="genre">
                            <MenuItem value="action">Action</MenuItem>
                            <MenuItem value="comedy">Comedy</MenuItem>
                            <MenuItem value="drama">Drama</MenuItem>
                            <MenuItem value="fantasy">Fantasy</MenuItem>
                            <MenuItem value="horror">Horror</MenuItem>
                            <MenuItem value="mystery">Mystery</MenuItem>
                            <MenuItem value="romance">Romance</MenuItem>
                            <MenuItem value="thriller">Thriller</MenuItem>
                            <MenuItem value="western">Western</MenuItem>
                          </Select>
                        </FormControl>
                      )}
                    </>
                  }
                </>
              )}
              {selectedOption === "revenue report" && (
                <>
                  {
                    <FormControl
                      style={{ width: "100%" }}
                      variant="filled"
                      sx={{ gridColumn: "span 2" }}
                    >
                      <InputLabel id="dropdown3">Select option</InputLabel>
                      <Select
                        name="revenueReport"
                        value={selectedRevenue}
                        onChange={(event) =>
                          setSelectedRevenue(event.target.value)
                        }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="revenue by territory">
                          Revenue by Territory
                        </MenuItem>
                        <MenuItem value="revenue by platform">
                          Revenue by Platform
                        </MenuItem>
                        <MenuItem value="revenue by year">
                          Revenue by Year
                        </MenuItem>
                        <MenuItem value="revenue by month">
                          Revenue by Month
                        </MenuItem>
                      </Select>
                    </FormControl>
                  }
                </>
              )}
              {selectedOption === "sales report" && (
                <>
                  {
                    <FormControl
                      style={{ width: "100%" }}
                      variant="filled"
                      sx={{ gridColumn: "span 2" }}
                    >
                      <InputLabel id="dropdown2">Select option</InputLabel>
                      <Select
                        name="salesReport"
                        value={selectedSales}
                        onChange={(event) =>
                          setSelectedSales(event.target.value)
                        }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="sales by buyer">
                          Sales by Buyer
                        </MenuItem>
                        <MenuItem value="sales by territory">
                          Sales by Territory
                        </MenuItem>
                        <MenuItem value="sales by year">Sales by Year</MenuItem>
                        <MenuItem value="sales by runtime">
                          Sales by Runtime
                        </MenuItem>
                        <MenuItem value="sales by genre">
                          Sales by Genre
                        </MenuItem>
                      </Select>
                    </FormControl>
                  }
                </>
              )}
              {selectedOption === "client report" && (
                <>
                  {
                    <FormControl
                      style={{ width: "100%" }}
                      variant="filled"
                      sx={{ gridColumn: "span 2" }}
                    >
                      <InputLabel id="dropdown2">Select option</InputLabel>
                      <Select
                        name="clientReport"
                        value={selectedClient}
                        onChange={(event) =>
                          setSelectedClient(event.target.value)
                        }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="client by birthday">
                          Client by Birthday
                        </MenuItem>
                        <MenuItem value="client by location">
                          Client by Territory
                        </MenuItem>
                        <MenuItem value="client by age">Client by Age</MenuItem>
                      </Select>
                    </FormControl>
                  }
                </>
              )}
            </>
          )}
        </Box>

        {selectedFilm === "film by contract" && (
          <FormControl
            style={{ width: "100%" }}
            variant="filled"
            sx={{ gridColumn: "span 2" }}
          >
            <DateRangePicker
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
            />
          </FormControl>
        )}

        {runButton && (
          <button
            type="button"
            className="submit"
            style={{ margin: "20px 0 0 0" }}
            // disabled={MSelect}
          >
            Run Report
          </button>
        )}
      </Box>
    </DashBoard>
  );
}
