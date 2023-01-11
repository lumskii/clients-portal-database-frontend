import React, { useEffect, useState } from 'react'
import { DashBoard } from '../Dashboard/DashboardElements'
import { components } from 'react-select';
import './generateReports.css'
import { server } from '../../constance';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Slider,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/Heading';
import { CustomSelect } from './Styled';
import { DatePicker, Modal as ModalAD } from 'antd';
import { tokens } from '../../theme';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import moment from 'moment';
const { RangePicker } = DatePicker;



export default function Reports() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedFilm, setSelectedFilm] = useState('');
  const [selectedRevenue, setSelectedRevenue] = useState('');
  const [selectedSales, setSelectedSales] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  const [filmTerritory, setFilmTerritory] = useState('');
  const [filmGenre, setFilmGenre] = useState('');
  const [selectedSalesRuntime, setSelectedSalesRuntime] = useState('');
  const [selectedSalesGenre, setSelectedSalesGenre] = useState('');
  const [selectedRevTerritory, setSelectedRevTerritory] = useState(false);
  const [selectedRevPlatform, setSelectedRevPlatform] = useState('');
  const [selectedSalesTerritory, setSelectedSalesTerritory] = useState('');
  const [button, setButton] = useState(false);
  const [runButton, setRunButton] = useState(false);
  const [titles, setTitles] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [sliderValue, setSliderValue] = useState(1);
  const [dates, setDates] = useState([]);
  console.log(dates);
  const [showRangePicker, setShowRangePicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  // const navigate = useNavigate();
  const [showContent, setShowContent] = useState(true);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          fetch(`${server}/v1/sales`)
            .then((res) => res.json())
            .then((res) => {
              if (res.status === 200) {
                console.log("res", res.data.sales);
                let allTitles = res.data.sales.map((sale) => ({
                  label: sale.cName,
                  value: sale.cName,
                  key: sale._id,
                }));
    
                setTitles(allTitles);
              } else {
                console.log("unable to fetch");
              }
            });
        };
    
        callBackendAPI();
      }, []);

      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const handleOk = (values) => {
        setSelectedValue(values);
        setShowRangePicker(false);
      };

      const table = () => {
        const columns = [
          {
            field: "cName",
            headerName: "Company Name",
            width: 300,
            renderCell: (params) => {
              return (
                <div>
                  <p>{params.row.cName}</p>
                </div>
              );
            },
          },
          { field: "dealCD", headerName: "Deal Closed Date", width: 200 },
          { field: "dealED", headerName: "Deal Expiry Date", width: 200 },
        ];

        return (
            <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
            }}
            >
              <DataGrid
                rows={titles}
                columns={columns}
                components={{
                  Toolbar: GridToolbar,
                }}
                />
            </Box>
        )
      }

  return (
    <DashBoard>
      <Box m="80px 20px 20px 20px">
        <Header
          title="Generate Reports"
          subtitle="Generate a report base on specified criterias"
        />
        {showContent && (
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
                              setRunButton(false);
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
                            <TextField
                              variant="filled"
                              fullWidth
                              value={selectedTitles ? selectedTitles.value : ""}
                              onClick={handleOpen}
                            />
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <MSelect
                                  options={titles}
                                  maxLength="4"
                                  onChange={(option) => {
                                    setSelectedTitles(option);
                                    handleClose();
                                    setRunButton(true);
                                  }}
                                />
                              </Box>
                            </Modal>
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
                                setRunButton(e.target.value !== "");
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
                            <TextField
                              variant="filled"
                              fullWidth
                              value={sliderValue}
                              onClick={handleOpen}
                            />
                            <Modal
                              open={open}
                              // onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Slider
                                  aria-label="Years"
                                  defaultValue={1}
                                  getAriaValueText={valuetext}
                                  valueLabelDisplay="auto"
                                  step={1}
                                  marks={marks}
                                  min={1}
                                  max={30}
                                  onChange={(e, newValue) =>
                                    setSliderValue(newValue)
                                  }
                                />
                                <Button
                                  type="button"
                                  onClick={() => {
                                    handleClose();
                                    setRunButton(true);
                                  }}
                                  variant="contained"
                                  style={{
                                    margin: "20px 0px 0px calc(100% - 80px)",
                                  }}
                                >
                                  Confirm
                                </Button>
                              </Box>
                            </Modal>
                          </FormControl>
                        )}

                        {selectedFilm === "film by contract" && (
                          <FormControl
                            style={{ width: "100%" }}
                            variant="filled"
                            sx={{ gridColumn: "span 2" }}
                          >
                            <TextField
                              variant="filled"
                              fullWidth
                              value={
                                selectedValue
                                  ? `${selectedValue[0].format(
                                      "DD/MM/YYYY"
                                    )} - ${selectedValue[1].format("DD/MM/YYYY")}`
                                  : ""
                              }
                              onClick={() => setShowRangePicker(true)}
                            />
                            <ModalAD
                              open={showRangePicker}
                              onCancel={() => {
                                setShowRangePicker(false);
                                if (selectedValue) {
                                  setSelectedValue(null);
                                }
                                setRunButton(false);
                              }}
                              onOk={() => {
                                handleOk(selectedValue);
                                if (selectedValue) {
                                  setRunButton(true);
                                }
                              }}
                            >
                              <RangePicker
                                onChange={(values) => {
                                  setSelectedValue(values);
                                }}
                              />
                            </ModalAD>
                          </FormControl>
                        )}

                        {selectedFilm === "film by genre" && (
                          <FormControl
                            variant="filled"
                            sx={{ gridColumn: "span 2" }}
                            style={{ width: "100%" }}
                          >
                            <InputLabel id="dropdown">Movie Genre</InputLabel>
                            <Select 
                              name="genre"
                              value={filmGenre}
                              onChange={(e) => {
                                setFilmGenre(e.target.value);
                                setRunButton(e.target.value !== "");
                              }}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
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
                            onChange={(event) => {
                              setSelectedRevenue(event.target.value);
                              setRunButton(false);
                              setSelectedRevTerritory(false);
                            }}
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
                              onChange={(e) => {
                                setSelectedRevTerritory(e.target.value, true);
                              }}
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
                                setSelectedRevPlatform(event.target.value)
                              }
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
                            <TextField
                              fullWidth
                              variant="filled" 
                              onClick={() => setShowRangePicker(true)}
                              value={selectedValue ? selectedValue.format('YYYY') : ''}
                            />
                            <ModalAD
                              open={showRangePicker}
                              onCancel={() => {
                                setShowRangePicker(false);
                                if (selectedValue) {
                                  setSelectedValue(null);
                                }
                                setRunButton(false);
                              }}
                              onOk={() => {
                                handleOk(selectedValue);
                                if (selectedValue) {
                                  setRunButton(true);
                                }
                              }}
                            >
                            <DatePicker 
                              picker='year'
                              onChange={(values) => {
                                setSelectedValue(values);
                              }}
                            />
                            </ModalAD>
                          </FormControl>
                        )}

                        {selectedRevenue === "revenue by month" && (
                          <FormControl
                            style={{ width: "100%" }}
                            variant="filled"
                            sx={{ gridColumn: "span 2" }}
                          >
                            <TextField
                              fullWidth
                              variant="filled" 
                              onClick={() => setShowRangePicker(true)}
                              value={selectedValue ? selectedValue.format('MM/YYYY') : ''}
                            />
                            <ModalAD
                              open={showRangePicker}
                              onCancel={() => {
                                setShowRangePicker(false);
                                if (selectedValue) {
                                  setSelectedValue(null);
                                }
                                setRunButton(false);
                              }}
                              onOk={() => {
                                handleOk(selectedValue);
                                if (selectedValue) {
                                  setRunButton(true);
                                }
                              }}
                            >
                              <DatePicker 
                                picker='month'
                                onChange={(values) => {
                                setSelectedValue(values);
                                }}
                            />
                            </ModalAD>
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
                            <MenuItem value="sales by year">
                              Sales by Year
                            </MenuItem>
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
                              placeholder="Enter buyer name"
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
                              onChange={(event) =>
                                setSelectedSalesTerritory(event.target.value)
                              }
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
                            <TextField
                              fullWidth
                              variant="filled" 
                              onClick={() => setShowRangePicker(true)}
                              value={selectedValue ? selectedValue.format('YYYY') : ''}
                            />
                            <ModalAD
                              open={showRangePicker}
                              onCancel={() => {
                                setShowRangePicker(false);
                                if (selectedValue) {
                                  setSelectedValue(null);
                                }
                                setRunButton(false);
                              }}
                              onOk={() => {
                                handleOk(selectedValue);
                                if (selectedValue) {
                                  setRunButton(true);
                                }
                              }}
                            >
                            <DatePicker 
                              picker='year'
                              onChange={(values) => {
                                setSelectedValue(values);
                              }}
                            />
                            </ModalAD>
                          </FormControl>
                        )}

                        {selectedSales === "sales by runtime" && (
                          <FormControl
                            style={{ width: "100%" }}
                            variant="filled"
                            sx={{ gridColumn: "span 2" }}
                          >
                            <InputLabel id="dropdown5">Select runtime</InputLabel>
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
                              <MenuItem value="90-120">120+</MenuItem>
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
        )}

        {selectedRevTerritory && (
          <FormControl
            style={{ width: "100%", margin: "20px 0 0 0" }}
            variant="filled"
            sx={{ gridColumn: "span 4" }}
          >
            <TextField
              fullWidth
              variant="filled"
              value={
                selectedValue
                  ? `${selectedValue[0].format(
                      "DD/MM/YYYY"
                    )} - ${selectedValue[1].format("DD/MM/YYYY")}`
                  : ""
              }
              onClick={() => setShowRangePicker(true)}
            />
            <ModalAD
              open={showRangePicker}
              onCancel={() => {
                setShowRangePicker(false);
                if (selectedValue) {
                  setSelectedValue(null);
                }
                setRunButton(false);
              }}
              onOk={() => {
                handleOk(selectedValue);
                if (selectedValue) {
                  setRunButton(true);
                }
              }}
            >
              <RangePicker
                onChange={(values) => {
                  setSelectedValue(values);
                }}
              />
            </ModalAD>
          </FormControl>
        )}

        {runButton && (
          <button
            type="button"
            className="submit"
            style={{ margin: "20px 0 0 0" }}
            onClick={() => {
              setRunButton(false);
              setShowContent(false);
              return table();
            }}
          >
            Run Report
          </button>
        )}
      </Box>
    </DashBoard>
  );
}
