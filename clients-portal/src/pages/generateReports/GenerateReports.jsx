import React, { useEffect, useState } from 'react'
import { DashBoard } from '../Dashboard/DashboardElements'
import { components } from 'react-select';
import './generateReports.css'
import { server } from '../../constance';
import {
  Box,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
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
  const [filmTerritory, setFilmTerritory] = useState('');
  const [selectedSalesRuntime, setSelectedSalesRuntime] = useState('');
  const [selectedSalesGenre, setSelectedSalesGenre] = useState('');
  const [selectedRevTerritory, setSelectedRevTerritory] = useState('');
  const [selectedRevPlatform, setSelectedRevPlatform] = useState('');
  const [selectedSalesTerritory, setSelectedSalesTerritory] = useState('');
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
                          <InputLabel id="territory">
                            Select territory
                          </InputLabel>
                          <Select
                            name="territory"
                            value={filmTerritory}
                            onChange={(e) => {
                              setFilmTerritory(e.target.value);
                            }}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="australia">Australia/NZ</MenuItem>
                            <MenuItem value="benelux">Benelux</MenuItem>
                            <MenuItem value="france">France</MenuItem>
                            <MenuItem value="germany">Germany</MenuItem>
                            <MenuItem value="iceland">Iceland</MenuItem>
                            <MenuItem value="israel">Israel</MenuItem>
                            <MenuItem value="italy">Italy</MenuItem>
                            <MenuItem value="scandinavia">Scandinavia</MenuItem>
                            <MenuItem value="spain/portugal">
                              Spain/Portugal
                            </MenuItem>
                            <MenuItem value="turkey">Turkey</MenuItem>
                            <MenuItem value="poland">Poland</MenuItem>
                            <MenuItem value="united_kingdom">
                              United Kingdom
                            </MenuItem>
                            <MenuItem value="russia">Russia</MenuItem>
                            <MenuItem value="eastern_europe">
                              Eastern Europe(Excluding CIS)
                            </MenuItem>
                            <MenuItem value="asia_pay_tv">Asia Pay TV</MenuItem>
                            <MenuItem value="india">India</MenuItem>
                            <MenuItem value="china">China</MenuItem>
                            <MenuItem value="malaysia">Malaysia</MenuItem>
                            <MenuItem value="philippines">Philippines</MenuItem>
                            <MenuItem value="thailand">Thailand</MenuItem>
                            <MenuItem value="singapore">Singapore</MenuItem>
                            <MenuItem value="japan">Japan</MenuItem>
                            <MenuItem value="taiwan">Taiwan</MenuItem>
                            <MenuItem value="Vietnam">South Korea</MenuItem>
                            <MenuItem value="middle_east">Middle East</MenuItem>
                            <MenuItem value="latin_america">
                              Latin America
                            </MenuItem>
                            <MenuItem value="south_africa">
                              South Africa
                            </MenuItem>
                            <MenuItem value="ancillary">Ancillary</MenuItem>
                          </Select>
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
                    <>
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
                          <MenuItem value="" onClick={() => setSelectedRevTerritory(null)}>
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

                      {selectedRevenue === "revenue by territory" && (
                        <FormControl
                          style={{ width: "100%" }}
                          variant="filled"
                          sx={{ gridColumn: "span 2" }}
                        >
                          <InputLabel id="dropdown4">
                            Select territory
                          </InputLabel>
                          <Select
                            name="revTerritory"
                            value={selectedRevTerritory}
                            onChange={(event) =>
                              setSelectedRevTerritory(event.target.value)
                            }
                          >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="australia">Australia/NZ</MenuItem>
                            <MenuItem value="benelux">Benelux</MenuItem>
                            <MenuItem value="france">France</MenuItem>
                            <MenuItem value="germany">Germany</MenuItem>
                            <MenuItem value="iceland">Iceland</MenuItem>
                            <MenuItem value="israel">Israel</MenuItem>
                            <MenuItem value="italy">Italy</MenuItem>
                            <MenuItem value="scandinavia">Scandinavia</MenuItem>
                            <MenuItem value="spain/portugal">
                              Spain/Portugal
                            </MenuItem>
                            <MenuItem value="turkey">Turkey</MenuItem>
                            <MenuItem value="poland">Poland</MenuItem>
                            <MenuItem value="united_kingdom">
                              United Kingdom
                            </MenuItem>
                            <MenuItem value="russia">Russia</MenuItem>
                            <MenuItem value="eastern_europe">
                              Eastern Europe(Excluding CIS)
                            </MenuItem>
                            <MenuItem value="asia_pay_tv">Asia Pay TV</MenuItem>
                            <MenuItem value="india">India</MenuItem>
                            <MenuItem value="china">China</MenuItem>
                            <MenuItem value="malaysia">Malaysia</MenuItem>
                            <MenuItem value="philippines">Philippines</MenuItem>
                            <MenuItem value="thailand">Thailand</MenuItem>
                            <MenuItem value="singapore">Singapore</MenuItem>
                            <MenuItem value="japan">Japan</MenuItem>
                            <MenuItem value="taiwan">Taiwan</MenuItem>
                            <MenuItem value="Vietnam">South Korea</MenuItem>
                            <MenuItem value="middle_east">Middle East</MenuItem>
                            <MenuItem value="latin_america">
                              Latin America
                            </MenuItem>
                            <MenuItem value="south_africa">
                              South Africa
                            </MenuItem>
                            <MenuItem value="ancillary">Ancillary</MenuItem>
                          </Select>
                        </FormControl>
                      )}

                      {selectedRevenue === "revenue by platform" && (
                        <FormControl
                          style={{ width: "100%" }}
                          variant="filled"
                          sx={{ gridColumn: "span 2" }}
                        >
                          <InputLabel id="dropdown5">
                            Select platform
                          </InputLabel>
                          <Select
                            name="revPlatform"
                            value={selectedRevPlatform}
                            onChange={(event) =>
                              setSelectedRevPlatform(event.target.value)}
                          >
                            <MenuItem value="all">All Platforms</MenuItem>
                            <MenuItem value="amazon">Amazon</MenuItem>
                            <MenuItem value="apple">Apple</MenuItem>
                            <MenuItem value="google">Google</MenuItem>
                            <MenuItem value="hulu">Hulu</MenuItem>
                            <MenuItem value="netflix">Netflix</MenuItem>
                            <MenuItem value="vudu">Vudu</MenuItem>
                            <MenuItem value="youtube">YouTube</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </Select>
                        </FormControl>
                      )}

                      {selectedRevenue === "revenue by year" && (
                        <FormControl
                          style={{ width: "100%" }}
                          variant="filled"
                          sx={{ gridColumn: "span 2" }}
                        >
                          {/* <FormLabel id="dates">Select year</FormLabel> */}
                          <TextField
                            name="revYear"
                            type="date"
                          />
                        </FormControl>
                      )}

                      {selectedRevenue === "revenue by month" && (
                        <FormControl
                          style={{ width: "100%" }}
                          variant="filled"
                          sx={{ gridColumn: "span 2" }}
                        >
                          <TextField
                            name="revMonth"
                            type="date"
                          />
                        </FormControl>

                      )}
                    </>
                  }
                </>
              )}
              {selectedOption === "sales report" && (
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

                    {selectedSales === "sales by buyer" && (
                      <FormControl
                        style={{ width: "100%" }}
                        variant="filled"
                        sx={{ gridColumn: "span 2" }}
                      >
                        <TextField
                          placeholder='Enter buyer name'
                          onchange={() => setRunButton(true)}
                        />
                      </FormControl>
                    )}

                    {selectedSales === "sales by territory" && (
                      <FormControl
                        style={{ width: "100%" }}
                        variant="filled"
                        sx={{ gridColumn: "span 2" }}
                      >
                        <InputLabel id="dropdown3">
                          Select territory
                        </InputLabel>
                        <Select
                          name="salesTerritory"
                          value={selectedSalesTerritory}
                          onChange={(event) =>  setSelectedSalesTerritory(event.target.value)}
                        >
                          <MenuItem value="all">All Territories</MenuItem>
                          <MenuItem value="australia">Australia/NZ</MenuItem>
                            <MenuItem value="benelux">Benelux</MenuItem>
                            <MenuItem value="france">France</MenuItem>
                            <MenuItem value="germany">Germany</MenuItem>
                            <MenuItem value="iceland">Iceland</MenuItem>
                            <MenuItem value="israel">Israel</MenuItem>
                            <MenuItem value="italy">Italy</MenuItem>
                            <MenuItem value="scandinavia">Scandinavia</MenuItem>
                            <MenuItem value="spain/portugal">
                              Spain/Portugal
                            </MenuItem>
                            <MenuItem value="turkey">Turkey</MenuItem>
                            <MenuItem value="poland">Poland</MenuItem>
                            <MenuItem value="united_kingdom">
                              United Kingdom
                            </MenuItem>
                            <MenuItem value="russia">Russia</MenuItem>
                            <MenuItem value="eastern_europe">
                              Eastern Europe(Excluding CIS)
                            </MenuItem>
                            <MenuItem value="asia_pay_tv">Asia Pay TV</MenuItem>
                            <MenuItem value="india">India</MenuItem>
                            <MenuItem value="china">China</MenuItem>
                            <MenuItem value="malaysia">Malaysia</MenuItem>
                            <MenuItem value="philippines">Philippines</MenuItem>
                            <MenuItem value="thailand">Thailand</MenuItem>
                            <MenuItem value="singapore">Singapore</MenuItem>
                            <MenuItem value="japan">Japan</MenuItem>
                            <MenuItem value="taiwan">Taiwan</MenuItem>
                            <MenuItem value="Vietnam">South Korea</MenuItem>
                            <MenuItem value="middle_east">Middle East</MenuItem>
                            <MenuItem value="latin_america">
                              Latin America
                            </MenuItem>
                            <MenuItem value="south_africa">
                              South Africa
                            </MenuItem>
                            <MenuItem value="ancillary">Ancillary</MenuItem>
                        </Select>
                      </FormControl>
                    )}

                    {selectedSales === "sales by year" && (
                      <FormControl
                        style={{ width: "100%" }}
                        variant="filled"
                        sx={{ gridColumn: "span 2" }}
                      >
                        <InputLabel id="dropdown4">Select year</InputLabel>
                        <TextField
                          name="salesYear"
                          type="date"
                        />
                      </FormControl>
                    )}

                    {selectedSales === "sales by runtime" && (
                      <FormControl
                        style={{ width: "100%" }}
                        variant="filled"
                        sx={{ gridColumn: "span 2" }}
                      >
                        <InputLabel id="dropdown5">
                          Select runtime
                        </InputLabel>
                        <Select
                          name="salesRuntime"
                          value={selectedSalesRuntime}
                          onChange={(event) =>
                            setSelectedSalesRuntime(event.target.value)
                          }
                        >
                          <MenuItem value="all">All</MenuItem>
                          <MenuItem value="0-30">0-30</MenuItem>
                          <MenuItem value="30-60">30-60</MenuItem>
                          <MenuItem value="60-90">60-90</MenuItem>
                          <MenuItem value="90-120">90-120</MenuItem>
                          
                        </Select>
                      </FormControl>
                    )}

                    {selectedSales === "sales by genre" && (
                      <FormControl
                        style={{ width: "100%" }}
                        variant="filled"
                        sx={{ gridColumn: "span 2" }}
                      >
                        <InputLabel id="dropdown6">Select genre</InputLabel>
                        <Select
                          name="salesGenre"
                          value={selectedSalesGenre}
                          onChange={(event) =>
                            setSelectedSalesGenre(event.target.value)
                          }
                        >
                          <MenuItem value="all">All</MenuItem>
                          <MenuItem value="action">Action</MenuItem>
                          <MenuItem value="adventure">Adventure</MenuItem>
                          <MenuItem value="animation">Animation</MenuItem>
                          <MenuItem value="comedy">Comedy</MenuItem>
                          <MenuItem value="crime">Crime</MenuItem>
                          <MenuItem value="documentary">Documentary</MenuItem>
                          <MenuItem value="drama">Drama</MenuItem>
                          <MenuItem value="family">Family</MenuItem>
                          <MenuItem value="fantasy">Fantasy</MenuItem>
                          <MenuItem value="history">History</MenuItem>
                          <MenuItem value="horror">Horror</MenuItem>
                          <MenuItem value="music">Music</MenuItem>
                          <MenuItem value="mystery">Mystery</MenuItem>
                          <MenuItem value="romance">Romance</MenuItem>
                          <MenuItem value="science_fiction">
                            Science Fiction
                          </MenuItem>
                          <MenuItem value="tv_movie">TV Movie</MenuItem>
                          <MenuItem value="thriller">Thriller</MenuItem>
                          <MenuItem value="war">War</MenuItem>
                          <MenuItem value="western">Western</MenuItem>
                        </Select>
                      </FormControl>
                    )}

                    </>
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

        {selectedRevTerritory ? (
                        <FormControl
                          style={{ width: "100%", margin: "20px 0 0 0" }}
                          variant="filled"
                          sx={{ gridColumn: "span 4" }}
                        >
                          <FormLabel id="dates">Select Date Range</FormLabel>
                          <TextField 
                            fullWidth
                            type="date"
                            onChange={() => setRunButton(true)}
                          />
                        </FormControl>
                        ) : null }

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
