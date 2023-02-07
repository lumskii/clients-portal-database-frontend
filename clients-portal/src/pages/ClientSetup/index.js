import React, { useState, useEffect } from 'react';
import { DashBoard } from '../Dashboard/DashboardElements';
import Header from '../../components/Heading';
import {
  Divider,
  FormControl,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as yup from 'yup';
import axios from 'axios';
import './ClientStyles.css';
import cogoToast from 'cogo-toast';
import { useNavigate } from 'react-router-dom';
import { server } from '../../constance';
import MovieInfo from './MovieInfo';
import AgreementInfo from './AgreementInfo';
import Date from './Date';
import ComissionExps from './ComissionExps';
import Accounting from './Accounting';
import Uploads from './Uploads';
import Confirm from './Confirm';
import { FieldArray, Formik, useFormik } from 'formik';

const initialState = {
  filmName: '',
  producersEmail: '',
  filmsCode: '',
  distributionType: '',
  runtime: '', //make adjustment on the backend
  genre: '', //make adjustment on the backend
  rightSale: '',
  rightSaleOpt: '', //make adjustment on the backend
  comment: '', //make adjustment on the backend
  cama: '',
  countryLaw: '',
  stateLaw: '',
  effectiveDate: '',
  dateSignature: '',
  renewalDate: '',
  renewalExpiration: '',
  gross: [{ grossCor: 0, grossCorRights: '' }],
  fees: [{ salesFee: 0 }], // change this to sales fee on the backend
  distributionFee: 0,
  incomeReserves: 0,
  ingestionFee: 0, // make adjustment on the backend
  marketingCap: '', // make adjustment on the backend
  filmMarketCost: 0, // make adjustment on the backend
  accountingTerms: '',
  reportingSchedule: '', // make adjustment on the backend
  reportingStartDate: '', // make adjustment on the backend
  avatar: '', // new key-value pair
  // expense: "", // change position on the backend
};

const ClientSetup = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState(initialState);
  const [files, setFiles] = useState([]);
  const [page, setPage] = useState(0);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [isToggled, setIsToggled] = useState(false);
  const [comment, setComment] = useState(false);
  const [showContents, setShowContents] = useState(false);

  const FormTitles = [
    'Movie Information',
    'Agreement Information',
    'Agreement Dates',
    'Comission & Expenses',
    'Accounting Terms',
    'Upload Film Poster',
    'Confirm Details',
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <MovieInfo formik={formik} />;
    } else if (page === 1) {
      return (
        <AgreementInfo
          formik={formik}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          comment={comment}
          setComment={setComment}
        />
      );
    } else if (page === 2) {
      return <Date formik={formik} />;
    } else if (page === 3) {
      return (
        <ComissionExps
          formik={formik}
          showContents={showContents}
          setShowContents={setShowContents}
          GrossFieldArray={GrossFieldArray}
        />
      );
    } else if (page === 4) {
      return <Accounting formik={formik} />;
    } else if (page === 5) {
      return <Uploads Upload={Upload} />;
    } else {
      return <Confirm details={details} files={files} formik={formik} />;
    }
  };

  const uploadImage = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'gr2eqoz3');

    axios
      .post('https://api.cloudinary.com/v1_1/ds8vori3h/image/upload', formData)
      .then((response) => console.log(response));
  };

  const Upload = () => {
    return (
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e.target.files);
        }}
      />
      // <TextField
      //   fullWidth
      //   variant="filled"
      //   type="file"
      //   onChange={(e) => {
      //     formik.setFieldValue('avatar', e.currentTarget.files[0]);
      //     setFiles(e.currentTarget.files[0]);
      //   }}
      //   InputLabelProps={{
      //     shrink: true,
      //   }}
      //   name="avatar"
      //   InputProps={{
      //     accept: 'image/*',
      //   }}
      // />
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit(e);
    // console.log(formik.values)

    const submitClientDetails = async () => {
      // const formData = new FormData();
      // formData.append("avatar", formik.values.avatar);
      // Object.keys(formik.values).forEach((key) => formData.append(key, formik.values[key]));

      const submitted = await axios.post(
        `${server}/v1/clients`,
        formik.values
        // formData,{
        //   headers: { "Content-Type": "multipart/form-data" },
        // }
      );
      if (
        submitted &&
        submitted.data.success &&
        submitted.data.status === 200
      ) {
        cogoToast.success('Client added successfully', {
          position: 'top-center',
        });
        console.log('submitted', submitted.data);
        setDetails(initialState);
        navigate('/clients');
      } else {
        cogoToast.error(
          'Could not submit client info due to missing field or fields'
        );
      }
    };

    submitClientDetails();
  };

  useEffect(() => {
    const filmCode = 'OMM' + Math.floor(100000 + Math.random() * 900000);
    console.log('filmcode', filmCode);
    formik.setFieldValue('filmsCode', filmCode);
  }, []);

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    filmName: yup.string().required('required'),
    producersEmail: yup.string().email('invalid email').required('required'),
    distributionType: yup.string().required('required'),
    // contact: yup
    //   .string()
    //   .matches(phoneRegExp, "Phone number is not valid")
    //   .required("required"),
    rightSale: yup.string().required('required'),
    comment: yup.string().required('Please enter description'),
    effectiveDate: yup.string().required('required'),
    gross: yup.array().of(yup.string().required('required')),
    expense: yup.array().of(yup.string().required('required')),
    fees: yup.array().of(yup.string().required('please enter a price')),
  });

  const formik = useFormik({
    initialValues: details,
    validationSchema: checkoutSchema,
  });

  const GrossFieldArray = () => {
    return (
      <Formik initialValues={formik.values}>
        {({ values }) => (
          <>
            <FieldArray
              name="gross"
              render={(arrayHelpers) => (
                <FormControl
                  variant="filled"
                  sx={{ gridColumn: 'span 4' }}
                  style={{ width: '100%' }}
                >
                  <React.Fragment>
                    <Grid item sx={{ marginBottom: '20px' }}>
                      <FormLabel sx={{ fontWeight: 'bold', color: '#000' }}>
                        Gross Corridor
                      </FormLabel>
                    </Grid>
                    {values.gross.map((_, index) => (
                      <Grid key={index} spacing={2} container item>
                        {index > 0 && (
                          <>
                            <Grid item xs={12} sm={5}>
                              <TextField
                                fullWidth
                                id="filled-end-adornment"
                                value={values['gross'][index]['grossCor']}
                                onChange={formik.handleChange}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      %
                                    </InputAdornment>
                                  ),
                                }}
                                name={`gross.${index}.grossCor`}
                                type="number"
                                variant="filled"
                                label="Gross Corridor"
                              />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                              <FormControl
                                style={{ width: '100%' }}
                                variant="filled"
                              >
                                <InputLabel id="dropdown4">
                                  Gross Corridor Rights
                                </InputLabel>
                                <Select
                                  labelId="dropdown4"
                                  id="dropdown4"
                                  name={`gross[${index}].grossCorRights`}
                                  value={
                                    values['gross'][index]['grossCorRights'] ||
                                    ''
                                  }
                                  onChange={formik.handleChange}
                                >
                                  <MenuItem value="">Select an option</MenuItem>
                                  <MenuItem value="tvod">TVOD</MenuItem>
                                  <MenuItem value="svod">SVOD</MenuItem>
                                  <MenuItem value="avod">AVOD</MenuItem>
                                  <MenuItem value="tv">TV</MenuItem>
                                  <MenuItem value="Sell Through">
                                    SELL THROUGH
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm="auto">
                              <div
                                className="exp_btn_close"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                X
                              </div>
                            </Grid>
                          </>
                        )}
                      </Grid>
                    ))}{' '}
                    <Grid item>
                      <div
                        className="exp_btn"
                        onClick={() =>
                          arrayHelpers.push({ grossCor: 0, grossCorRights: '' })
                        }
                      >
                        Add
                      </div>
                    </Grid>
                  </React.Fragment>
                </FormControl>
              )}
            />

            <Divider />

            <FieldArray
              name="fees"
              render={(arrayHelpers) => (
                <FormControl
                  style={{ width: '100%' }}
                  variant="filled"
                  sx={{ gridColumn: 'span 4' }}
                >
                  <Grid item sx={{ margin: '20px 0px' }}>
                    <FormLabel sx={{ fontWeight: 'bold', color: '#000' }}>
                      Sales Fees
                    </FormLabel>
                  </Grid>
                  {values.fees.map((_, index) => (
                    <>
                      <Grid key={index} spacing={2} container item>
                        {index > 0 && (
                          <>
                            <Grid item xs={12} sm={5}>
                              <TextField
                                fullWidth
                                label="Sales Fee"
                                name={`fees[${index}].salesFees`}
                                value={values['fees'][index]['salesFees']}
                                onChange={formik.handleChange}
                                type="number"
                                variant="filled"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      $
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm="auto">
                              <div
                                className="exp_btn_close"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                X
                              </div>
                            </Grid>
                          </>
                        )}
                      </Grid>
                    </>
                  ))}
                  <Grid item>
                    <div
                      className="exp_btn"
                      onClick={() => arrayHelpers.push({ salesFee: 0 })}
                    >
                      Add
                    </div>
                  </Grid>
                </FormControl>
              )}
            />
          </>
        )}
      </Formik>
    );
  };

  return (
    <DashBoard>
      <Box m="80px 20px 20px 20px">
        <Header title="CLIENT FORM" subtitle="Add a new title" />
        <>
          <div className="progressbar">
            <div
              style={{ width: `${(100 / FormTitles.length) * (page + 1)}%` }}
            ></div>
          </div>
          <h3 className="form_section_title">{FormTitles[page]}</h3>
          <form onSubmit={handleFormSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              {/* Page contents called from pageDisplay function above......  */}
              {PageDisplay()}
            </Box>
            {/* Footer elements starts here... */}
            <div className="nav_btns">
              <div
                className={page === 0 ? 'invisible' : 'prev'}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </div>

              {page === FormTitles.length - 1 ? (
                <button className="submit" type="submit" id="submit">
                  Submit
                </button>
              ) : (
                <div
                  // disabled={page === FormTitles.length - 1}
                  className={page === 0 ? 'next position' : 'next'}
                  onClick={() => {
                    setPage((currPage) => currPage + 1);
                  }}
                >
                  Next
                </div>
              )}
            </div>
          </form>
        </>
      </Box>
    </DashBoard>
  );
};

export default ClientSetup;
