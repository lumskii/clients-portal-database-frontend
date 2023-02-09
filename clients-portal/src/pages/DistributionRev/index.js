import React, { useEffect, useState } from 'react';
import Header from '../../components/Heading';
import { DashBoard } from '../Dashboard/DashboardElements';
import Select, { components } from 'react-select';
import SwipeableViews from 'react-swipeable-views';
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
  Alert,
  AlertTitle,
} from '@mui/material';
import { Modal } from 'antd';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import EditDist from './EditDist';

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

const initialState = {
  cName: '',
  cType: '',
  platformOption: '',
  rType: '',
  territory: '',
  revenueAmount: '',
  receivedAmount: '',
};

const Distribution = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [toggleState, setToggleState] = useState(0);
  const [titles, setTitles] = useState([]);
  const [dist, setDist] = useState([]);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [showField, setShowField] = useState(false);
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState(initialState);
  const [showPlatformOptions, setShowPlatformOptions] = useState(false);

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
    if (e.target.name === 'cType' && e.target.value === 'platform') {
      setShowPlatformOptions(true);
    } else {
      setShowPlatformOptions(false);
    }
  };

  useEffect(() => {
    const retrieveAllTitles = async () => {
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
          console.log('unable to fetch titles');
        }
      } catch (error) {
        console.log('error', error);
      }
    };

    retrieveAllTitles();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const submitDistribution = async () => {
      const clientId = selectedTitle.id;
      const response = await axios.post(
        `${server}/v1/clients/${clientId}/dist-rev`,
        details
      );
      if (response.data.success && response.data.status === 200) {
        cogoToast.success('sales revenue added successfully', {
          position: 'top-center',
        });
        setLoading(false);
        setDetails(initialState);
        setOpen(true);
      } else {
        cogoToast.error('unable to add sales revenue');
        setLoading(false);
      }
    };

    submitDistribution();
  };

  const CustomInput = (props) => {
    const { maxLength } = props.selectProps;
    const inputProps = { ...props, maxLength };

    return <components.TextField {...inputProps} />;
  };

  const getDistRevenue = () => {
    return (
      <EditDist
        selectedTitle={selectedTitle}
        dist={dist}
        setDist={setDist}
        handleChange={handleChange}
      />
    );
  };

  return (
    <DashBoard>
      <Box m="80px 20px 20px 20px">
        <Header
          title="Distribution Revenue"
          subtitle="Add/Edit Distribution Revenue"
        />
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
            onCancel={() => {
              setSelectedTitle(null);
              if (selectedTitle === null) {
                setOpen(false);
              }
            }}
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
          {selectedTitle === null && open === false && (
            <Alert
              severity="info"
              sx={{ gridRow: '3', gridColumn: 'span 3' }}
              style={{ gridTemplateColumns: '0fr 1fr' }}
            >
              <AlertTitle style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Info
              </AlertTitle>
              <div style={{ fontSize: '16px' }}>
                {selectedTitle
                  ? selectedTitle.value
                  : 'Title is required to add distribution revenue'}
              </div>
              <button
                style={{ display: 'grid', margin: '10px 0 5px 0' }}
                type="button"
                className="left submit"
                onClick={() => setOpen(true)}
              >
                Go Back
              </button>
            </Alert>
          )}
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
                <button
                  type="button"
                  className="next2"
                  style={{ margin: '0px 15px' }}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Change Title
                </button>
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
                          label="Company Name"
                          name="cName"
                          type="text"
                          onChange={handleChange}
                          value={details.cName}
                        />
                      </FormControl>
                      <FormControl
                        sx={{ gridColumn: 'span 2' }}
                        variant="filled"
                      >
                        <InputLabel id="cType">Company Type</InputLabel>
                        <MSelect
                          name="cType"
                          value={details.cType}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em> None </em>
                          </MenuItem>
                          <MenuItem value="platform">Platform</MenuItem>
                          <MenuItem value="retail">Retail</MenuItem>
                          <MenuItem value="miscellaneous">
                            Miscellaneous
                          </MenuItem>
                        </MSelect>
                      </FormControl>
                      {showPlatformOptions && (
                        <FormControl
                          sx={{ gridColumn: 'span 2' }}
                          variant="filled"
                        >
                          <InputLabel id="platformOption">
                            Platform Option
                          </InputLabel>
                          <MSelect
                            name="platformOption"
                            value={details.platformOption}
                            onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em> None </em>
                            </MenuItem>
                            <MenuItem value="netflix">Netflix</MenuItem>
                            <MenuItem value="amazon">Amazon</MenuItem>
                            <MenuItem value="hulu">Hulu</MenuItem>
                            <MenuItem value="disney">Disney</MenuItem>
                            <MenuItem value="tubi">Tubi</MenuItem>
                            <MenuItem value="disney">Apple</MenuItem>
                            <MenuItem value="hbo">HBO</MenuItem>
                            <MenuItem value="apple">Apple</MenuItem>
                            <MenuItem value="youtube">YouTube</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </MSelect>
                        </FormControl>
                      )}
                      <FormControl
                        sx={{ gridColumn: 'span 2' }}
                        variant="filled"
                      >
                        <InputLabel id="rType">Rights Type</InputLabel>
                        <MSelect
                          name="rType"
                          value={details.rType}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em> None </em>
                          </MenuItem>
                          <MenuItem value="tvod">TVOD</MenuItem>
                          <MenuItem value="svod">SVOD</MenuItem>
                          <MenuItem value="tv">TV</MenuItem>
                          <MenuItem value="avod">AVOD</MenuItem>
                          <MenuItem value="sellThru">sell Through</MenuItem>
                          <MenuItem value="miscellaneous">
                            Miscellaneous
                          </MenuItem>
                        </MSelect>
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
                          label="Revenue Amount"
                          name="revenueAmount"
                          type="number"
                          onChange={handleChange}
                          value={details.revenueAmount}
                        />
                      </FormControl>
                      <FormControl sx={{ gridColumn: 'span 2' }}>
                        <TextField
                          fullWidth
                          variant="filled"
                          label="Received Amount"
                          name="receivedAmount"
                          type="number"
                          onChange={handleChange}
                          value={details.receivedAmount}
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
                  {getDistRevenue()}
                </TabPanel>
              </SwipeableViews>
            </>
          )}
        </Box>
      </Box>
    </DashBoard>
  );
};

export default Distribution;
