import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { server } from '../../constance';
import Header from '../../components/Heading';
import cogoToast from 'cogo-toast';
import {
  Alert,
  AlertTitle,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
  Select as MSelect,
  useMediaQuery,
  useTheme,
  InputLabel,
  MenuItem,
  TextareaAutosize,
  FormLabel,
} from '@mui/material';
import { tokens } from '../../theme';
import { Modal } from 'antd';
import FetchExps from './FetchExps';
import Select, { components } from 'react-select';

const initialState = {
  dateExp: '',
  cType: '',
  describe: '',
  amount: '',
};

const AddExpenses = () => {
  const [details, setDetails] = useState(initialState);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [titles, setTitles] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [open, setOpen] = useState(true);
  const [form, setForm] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const retrieveAllClients = async () => {
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

  const CustomInput = (props) => {
    const { maxLength } = props.selectProps;
    const inputProps = { ...props, maxLength };

    return <components.TextField {...inputProps} />;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const submitClientExps = async () => {
      try {
        const clientId = selectedTitle.id;
        const submitted = await axios.post(
          `${server}/v1/clients/${clientId}/expenses`,
          details
        );
        if (submitted.data.success && submitted.data.status === 200) {
          cogoToast.success('Expenses added successfully', {
            position: 'top-center',
          });
          setLoading(false);
          console.log('submitted', submitted.data);
          setDetails(initialState);
          setForm(false);
        } else {
          cogoToast.error('Could not submit expenses');
          setLoading(false);
        }
      } catch (error) {
        cogoToast.error('Could not submit expenses');
        console.log(error);
        setLoading(false);
      }
    };
    submitClientExps();
  };

  const listExpenses = () => {
    return (
      <FetchExps
        selectedTitle={selectedTitle}
        expenses={expenses}
        setExpenses={setExpenses}
      />
    );
  };

  // const handleClose = () => {
  //   if (JSON.stringify(expense) !== JSON.stringify(originalSale)) {
  //     if (
  //       window.confirm(
  //         'You have unsaved changes, are you sure you want to close?'
  //       )
  //     ) {
  //       setSale(originalSale);
  //       setOpenModal(false);
  //     }
  //   } else {
  //     setOpenModal(false);
  //   }
  // };

  return (
    <>
      <Header title="Expenses" subtitle="View/Add Expenses" />
      <Modal
        title="Select Film Title"
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
          placeholder="film title"
          onChange={(e) => {
            setSelectedTitle(e);
            console.log('selectedTitle');
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
              : 'Title is required to add expenses'}
          </div>
          <button
            style={{ display: 'grid', margin: '10px 0 5px 0' }}
            type="button"
            className="left submit"
            onClick={() => {
              setOpen(true);
            }}
          >
            Go Back
          </button>
        </Alert>
      )}
      {selectedTitle !== null && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
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
            <button
              onClick={() => {
                setForm(!form);
              }}
              className="position clientAddButton"
            >
              Add
            </button>
          </div>
          <Box
            m="40px 0 0 0"
            height="60vh"
            sx={{
              '& .MuiDataGrid-root': {
                border: 'none',
              },
              '& .MuiDataGrid-cell': {
                borderBottom: 'none',
              },
              '& .name-column--cell': {
                color: colors.greenAccent[300],
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: colors.blueAccent[700],
                borderBottom: 'none',
              },
              '& .MuiDataGrid-virtualScroller': {
                backgroundColor: colors.primary[400],
              },
              '& .MuiDataGrid-footerContainer': {
                borderTop: 'none',
                backgroundColor: colors.blueAccent[700],
              },
              '& .MuiCheckbox-root': {
                color: `${colors.greenAccent[200]} !important`,
              },
              '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                color: `${colors.grey[100]} !important`,
              },
            }}
          >
            {loading ? <div>Loading...</div> : listExpenses()}
          </Box>
          <Dialog open={form} onClose={() => setForm(false)}>
            <DialogTitle>Add Expenses</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit}>
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
                  <FormControl sx={{ gridColumn: 'span 4' }}>
                    <FormLabel id="dates">Date Expensed</FormLabel>
                    <TextField
                      fullWidth
                      variant="filled"
                      type="date"
                      name="dateExp"
                      onChange={handleChange}
                      value={details.dateExp}
                    />
                  </FormControl>
                  <FormControl sx={{ gridColumn: 'span 4' }} variant="filled">
                    <InputLabel id="cType">Company Type</InputLabel>
                    <MSelect
                      name="cType"
                      value={details.cType}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="platform">Platform</MenuItem>
                      <MenuItem value="retail">Retail</MenuItem>
                      <MenuItem value="miscellaneous">Miscellaneous</MenuItem>
                    </MSelect>
                  </FormControl>
                  <FormControl sx={{ gridColumn: 'span 4', width: '100%' }}>
                    <FormLabel id="describe">Description</FormLabel>
                    <TextareaAutosize
                      variant="filled"
                      minRows={10}
                      maxRows={10}
                      type="text"
                      name="describe"
                      onChange={handleChange}
                      value={details.describe}
                      style={{
                        width: 400,
                        maxWidth: '100%',
                        padding: '10px',
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ gridColumn: 'span 3' }}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Amount"
                      type="number"
                      name="amount"
                      onChange={handleChange}
                      value={details.amount}
                    />
                  </FormControl>

                  <div className="buttons">
                    <button type="submit" className="submit">
                      Save
                    </button>
                    {/* <button
                        type="submit"
                        id="submit-button"
                        className="right"
                      >
                        Publish
                      </button> */}
                  </div>
                </Box>
              </form>
            </DialogContent>
          </Dialog>
        </>
      )}
    </>
  );
};

export default AddExpenses;
