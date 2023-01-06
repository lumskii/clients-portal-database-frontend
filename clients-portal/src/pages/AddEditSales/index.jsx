import React, { useEffect, useState } from 'react'
import Header from '../../components/Heading'
import { DashBoard, PageTemplate2 } from '../Dashboard/DashboardElements'
import Select, { components } from "react-select";
import SwipeableViews from 'react-swipeable-views';
import './SalesStyle.css'
import PropTypes from 'prop-types'
import { server } from '../../constance';
import { Box, Tabs, Tab, Typography, useMediaQuery, AppBar, useTheme, FormControl, TextField } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function AddEditSales() {
    const [toggleState, setToggleState] = useState(0);
    const [titles, setTitles] = useState([]);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();

    const [details, setDetails] = useState({
        cName: "",
        territory: "",
        salesAmount: "",
        receivedAmount: "",
        dealCD: "",
        dealED: "",
    });

    const handleTabChange = (event, newValue) => {
        setToggleState(newValue);
    };

    const handleChangeIndex = (index) => {
        setToggleState(index);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value};
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
    };

    // const toggleTab = (index) => {
    //   setToggleState(index);
    // };

    const CustomInput = (props) => {
        const { maxLength } = props.selectProps;
        const inputProps = { ...props, maxLength };
    
        return <components.Input {...inputProps} />;
      };

      useEffect(() => {
        const callBackendAPI = () => {
          console.log("fetching...");
          fetch(`${server}/titles`)
            .then((res) => res.json())
            .then((res) => {
              if (res.status === 200) {
                console.log("res", res.data.titles);
                let allTitles = res.data.titles.map((title) => ({
                  label: title.title,
                  value: title.title,
                  key: title._id,
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
        <Header title="Sales Revenue" subtitle="Add/Edit Sales Revenue" />
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <AppBar
            position="static"
            color="default"
            sx={{ gridColumn: "span 4" }}
          >
            <Tabs
              value={toggleState}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Add Sales Revenue" {...a11yProps(0)} />
              <Tab label="Edit Sales Revenue" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={toggleState}
            onChangeIndex={handleChangeIndex}
            style={{ gridColumn: "span 4"}}
          >
            <TabPanel value={toggleState} index={0} dir={theme.direction} variant="fullWidth">
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <TextField
                    fullWidth
                    variant="filled"
                    label= "Company name"
                    type="text"
                    name="cName"
                    onChange={handleChange}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <p>Territory</p>
                  <select
                    type="text"
                    className="text_area"
                    name="territory"
                    onChange={handleChange}
                  >
                    <option disabled selected value="">
                      Please select category
                    </option>
                    <option value="united_states/canada">
                      United States/Canada
                    </option>
                    <option value="australia">Australia/NZ</option>
                    <option value="benelux">Benelux</option>
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                    <option value="iceland">Iceland</option>
                    <option value="israel">Israel</option>
                    <option value="italy">Italy</option>
                    <option value="scandinavia">Scandinavia</option>
                    <option value="spain/portugal">Spain/Portugal</option>
                    <option value="turkey">Turkey</option>
                    <option value="poland">Poland</option>
                    <option value="united_kingdom">United Kingdom</option>
                    <option value="russia">Russia</option>
                    <option value="eastern_europe">
                      Eastern Europe(Excluding CIS)
                    </option>
                    <option value="asia_pay_tv">Asia Pay TV</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="philippines">Philippines</option>
                    <option value="thailand">Thailand</option>
                    <option value="singapore">Singapore</option>
                    <option value="japan">Japan</option>
                    <option value="taiwan">Taiwan</option>
                    <option value="Vietnam">South Korea</option>
                    <option value="middle_east">Middle East</option>
                    <option value="latin_america">Latin America</option>
                    <option value="south_africa">South Africa</option>
                    <option value="ancillary">Ancillary</option>
                  </select>
                  <p>Sales Amount</p>
                  <input
                    type="number"
                    className="text_area"
                    name="salesAmount"
                    onChange={handleChange}
                  />
                  <p>Received Amount</p>
                  <input
                    type="number"
                    className="text_area"
                    name="receivedAmount"
                    onChange={handleChange}
                  />
                  <p>Deal closed Date</p>
                  <input
                    type="date"
                    className="text_area"
                    name="dealCD"
                    onChange={handleChange}
                  />
                  <p>Deal Entered Date</p>
                  <input
                    type="date"
                    className="text_area"
                    name="dealED"
                    onChange={handleChange}
                  />

                  <button type="save" id="submit-button" className="left">
                    Save
                  </button>
                  <button type="submit" id="submit-button" className="right">
                    Publish
                  </button>
                </FormControl>
              </form>
            </TabPanel>
            <TabPanel value={toggleState} index={1} dir={theme.direction}>
              <form onSubmit={handleSubmit}>
                <div className="edit_container">
                  <div className="form-input2">
                    <span className="clientUpdateTitle">Edit</span>
                    <div className="clientUpdateLeft">
                      <div className="clientUpdateItem">
                        <label>Film Name</label>
                        <input
                          type="text"
                          placeholder="The Test"
                          className="clientUpdateInput"
                        />
                      </div>
                      <div className="clientUpdateItem">
                        <label>Producer's Email</label>
                        <input
                          type="email"
                          placeholder="producer@gmail.com"
                          className="clientUpdateInput"
                        />
                      </div>
                      <div className="clientUpdateItem">
                        <label>Distribution Type</label>
                        <input
                          type="text"
                          placeholder="Sales only"
                          className="clientUpdateInput"
                        />
                      </div>
                      <div className="clientUpdateItem">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          placeholder="+1 123 456 7890"
                          className="clientUpdateInput"
                        />
                      </div>
                      <div className="clientUpdateItem">
                        <label>Location</label>
                        <input
                          type="text"
                          placeholder="New York | USA"
                          className="clientUpdateInput"
                        />
                      </div>
                    </div>
                    <button type="submit" id="submit-button2">
                      Submit
                    </button>
                    {/* <p>Film Name</p>
                      <Select
                          options={titles}
                          components={{ Input: CustomInput }}
                          maxLength="4"
                          className='text_area3'
                      /> */}
                  </div>
                </div>
              </form>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Box>
    </DashBoard>
  );
}