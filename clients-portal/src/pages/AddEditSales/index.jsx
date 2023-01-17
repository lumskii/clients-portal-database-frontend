import React, { useEffect, useState } from 'react';
import Header from '../../components/Heading';
import { DashBoard } from '../Dashboard/DashboardElements';
import Select, { components } from 'react-select';
import SwipeableViews from 'react-swipeable-views';
import './SalesStyle.css';
import PropTypes from 'prop-types';
import { server } from '../../constance';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  useMediaQuery,
  AppBar,
  useTheme,
  FormControl,
  TextField,
  Select as MSelect,
  InputLabel,
  MenuItem,
  FormLabel,
  Dialog,
} from '@mui/material';
import { Modal } from 'antd';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { useParams } from 'react-router-dom';

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

const initialDetails = {
  cName: '',
  territory: '',
  salesAmount: '',
  receivedAmount: '',
  dealCD: '',
  dealED: '',
};

export default function AddEditSales() {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [toggleState, setToggleState] = useState(0);
  const [titles, setTitles] = useState([]);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState(initialDetails);
  const [loading, setLoading] = useState(false);
  const { clientsId } = useParams();
  const [showField, setShowField] = useState(false);

  const handleTabChange = (event, newValue) => {
    setToggleState(newValue);
  };

  const handleChangeIndex = (index) => {
    setToggleState(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    const retrieveAllClients = async () => {
      console.log('fetching...');
      try {
        const response = await fetch(`${server}/v1/clients`);
        const data = await response.json();
        if (data.status === 200) {
          console.log('res', data.data.clients);
          let allClients = data.data.clients.map((client) => ({
            id: client._id,
            value: client.filmName,
            label: client.filmName,
          }));

          setTitles(allClients);
        } else {
          console.log('unable to fetch');
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    retrieveAllClients();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const submitSales = async () => {
      const clientId = selectedTitle.id;
      const response = await axios.post(
        `${server}/v1/clients/${clientId}/sales`,
        details
      );
      if (response && response.data.success && response.data.status === 200) {
        cogoToast.error('unable to add sales revenue', {
          position: 'top-center',
        });
        setLoading(false);
        setOpen(true);
      } else {
        cogoToast.success('sales revenue added successfully');
        setDetails(initialDetails);
        setLoading(false);
      }
    };

    submitSales();
  };

  const CustomInput = (props) => {
    const { maxLength } = props.selectProps;
    const inputProps = { ...props, maxLength };

    return <components.TextField {...inputProps} />;
  };

  return (
    <DashBoard>
      <Box m="80px 20px 20px 20px">
        <Header title="Sales Revenue" subtitle="Add/Edit Sales Revenue" />
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
          }}
        >
          <Modal
            title="Select Film Name"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(true)}
            width={500}
          >
            <Select
              options={titles}
              components={{ TextField: CustomInput }}
              maxLength="4"
              className="text_area3"
              placeholder="Film Name"
              onChange={(e) => {
                setSelectedTitle(e);
              }}
              value={selectedTitle}
            />
          </Modal>
          {selectedTitle !== null && (
            <>
              <div
                style={{
                  fontWeight: 'Bolder',
                  fontSize: '22px',
                  width: '500px',
                }}
              >
                Title:{' '}
                {selectedTitle ? selectedTitle.value : 'Please select a title'}
              </div>
              <AppBar
                position="static"
                color="default"
                sx={{ gridColumn: 'span 4' }}
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
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={toggleState}
                onChangeIndex={handleChangeIndex}
                style={{ gridColumn: 'span 4' }}
              >
                <TabPanel
                  value={toggleState}
                  index={0}
                  dir={theme.direction}
                  variant="fullWidth"
                  style={{ width: '100%' }}
                >
                  <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                      sx={{
                        '& > div': {
                          gridColumn: isNonMobile ? undefined : 'span 4',
                        },
                      }}
                    >
                      <FormControl sx={{ gridColumn: 'span 2' }}>
                        <TextField
                          fullWidth
                          variant="filled"
                          label="Company name"
                          type="text"
                          name="cName"
                          value={details.cName}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        sx={{ gridColumn: 'span 2' }}
                        variant="filled"
                      >
                        <InputLabel id="territory">Territory</InputLabel>
                        <MSelect
                          name="territory"
                          value={details.territory}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em> None </em>
                          </MenuItem>
                          <MenuItem value="united_states/canada">
                            United States/Canada
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
                          <MenuItem value="cis/baltics">CIS/Baltics</MenuItem>
                          <MenuItem value="africa">Africa</MenuItem>
                          <MenuItem value="saarc">SAARC</MenuItem>
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
                          <MenuItem value="south_africa">South Africa</MenuItem>
                          <MenuItem value="ancillary">Ancillary</MenuItem>
                        </MSelect>
                      </FormControl>
                      <FormControl sx={{ gridColumn: 'span 2' }}>
                        <TextField
                          fullWidth
                          variant="filled"
                          label="Sales Amount"
                          type="number"
                          name="salesAmount"
                          onChange={handleChange}
                          value={details.salesAmount}
                        />
                      </FormControl>
                      <FormControl sx={{ gridColumn: 'span 2' }}>
                        <TextField
                          fullWidth
                          variant="filled"
                          label="Received Amount"
                          type="number"
                          name="receivedAmount"
                          onChange={handleChange}
                          value={details.receivedAmount}
                        />
                      </FormControl>
                      <FormControl sx={{ gridColumn: 'span 2' }}>
                        <FormLabel id="dates">Deal Closed Date</FormLabel>
                        <TextField
                          fullWidth
                          variant="filled"
                          type="date"
                          name="dealCD"
                          onChange={handleChange}
                          value={details.dealCD}
                        />
                      </FormControl>
                      <FormControl sx={{ gridColumn: 'span 2' }}>
                        <FormLabel id="dates">Deal Entered Date</FormLabel>
                        <TextField
                          fullWidth
                          variant="filled"
                          type="date"
                          name="dealED"
                          onChange={handleChange}
                          value={details.dealED}
                        />
                      </FormControl>

                      {showField && (
                        <TextField
                          fullWidth
                          variant="filled"
                          label="Movie title"
                          type="text"
                          name="filmName"
                          value={selectedTitle}
                        />
                      )}

                      <div style={{ width: '100%' }}>
                        <button type="button" className="left submit">
                          Save
                        </button>
                        <button type="submit" className="position next">
                          Publish
                        </button>
                      </div>
                    </Box>
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
                      </div>
                    </div>
                  </form>
                </TabPanel>
              </SwipeableViews>
            </>
          )}
        </Box>
      </Box>
    </DashBoard>
  );
}
