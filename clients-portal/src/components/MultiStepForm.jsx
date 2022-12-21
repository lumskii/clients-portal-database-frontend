import { Box, FormControl, InputLabel, MenuItem, Select, TextField, useMediaQuery } from '@mui/material';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import React from 'react';
import { useState } from 'react';
import * as yup from 'yup';
import Header from './Heading';
import { DashBoard } from '../pages/Dashboard/DashboardElements';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const initialState = {
  filmName: "",
  producersEmail: "",
  filmsCode: "",
  distributionType: "",
  rightSale: "",
  rightSaleOpt: "",
  comment: "",
  cama: "",
  countryLaw: "",
  stateLaw: "",
  effectiveDate: "",
  dateSignature: "",
  renewalDate: "",
  renewalExpiration: "",
  expenseCap: "",
  customExp: "",
  expense: "",
  gross: [{ grossCor: 0, grossCorRights: "" }],
  producerPay: "",
  deliveryFees: "",
  distributionFee: 0,
  incomeReserves: 0,
  accountingTerms: "",
  avatar: "", // new key-value pair
};

const MultiStepForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [stepNumber, setStepNumber] = useState(0);

  const FormTitles = [
      "Movie Information",
      "Agreement Information",
      "Agreement Dates",
      "Comission & Expenses",
      "Accounting Terms",
      "Upload Film Poster",
      "Confirm Details",
    ];

  const Wizard = ({ children, initialValues, onSubmit }) => {
      const steps = React.Children.toArray(children);
      const [snapshot, setSnapshot] = useState(initialValues);

      const step = steps[stepNumber];
      const totalSteps = steps.length;
      const isLastStep = stepNumber === totalSteps - 1;

      const next = values => {
        setSnapshot(values);
        setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
      };
    
      const previous = values => {
        setSnapshot(values);
        setStepNumber(Math.max(stepNumber - 1, 0));
      };
    
      const handleSubmit = async (values, bag) => {
        if (step.props.onSubmit) {
          await step.props.onSubmit(values, bag);
        }
        if (isLastStep) {
          return onSubmit(values, bag);
        } else {
          bag.setTouched({});
          next(values);
        }
      };

      return (
        <Formik
          initialValues={snapshot}
          onSubmit={handleSubmit}
          validationSchema={step.props.validationSchema}
        >
          {formik => (
              <Form>
                {step}
                <div className="nav_btns">
                  {stepNumber > 0 && (
                    <div
                      className='prev'
                      onClick={() => previous(formik.values)}
                      type="button"
                    >
                      Prev
                    </div>
                  )}
                  <div>
                    <button disabled={formik.isSubmitting} type="submit" className={isLastStep === true ? "submit" : "next"}>
                      {isLastStep ? "Submit" : "Next"}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
      );
    };

    const WizardStep = ({ children }) => children;

    const phoneRegExp =
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const checkoutSchema = yup.object().shape({
      filmName: yup.string().required("required"),
      producersEmail: yup.string().email("invalid email").required("required"),
      distributionType: yup.string().required("required"),
      // contact: yup
      //   .string()
      //   .matches(phoneRegExp, "Phone number is not valid")
      //   .required("required"),
      rightSale: yup.string().required("required"),
      comment: yup.string().required("Please enter description"),
      effectiveDate: yup.string().required("required"),
    });

  return (
    <DashBoard>
      <Box m="80px 20px 20px 20px">
            <Header title="CLIENT FORM" subtitle="Add a new title" />
            <>
            <div className="progressbar">
                <div style={{ width: `${(100 / FormTitles.length) * (stepNumber + 1)}%` }}></div>
            </div>
            <h3 className="form_section_title">{FormTitles[stepNumber]}</h3>
              <Wizard
                  initialValues={initialState}
                  onSubmit={async values =>
                      sleep(300).then(() => console.log('Wizard submit', values))
                  }
              >
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                  >
                    <WizardStep
                          onSubmit={() => console.log('Step1 onSubmit')}
                          validationSchema={checkoutSchema}

                    >
                      {({ }) => (
                        <>
                          <TextField 
                              fullWidth
                              variant="filled"
                              type="text"
                              label="Film Name"
                              htmlFor="filmName"
                              name="filmName"
                              // onBlur={handleBlur}
                              errorMesssage="This Should not include any special characters"
                              // error={!!touched.filmName && !!errors.filmName}
                              // helperText={touched.filmName && errors.filmName}
                              sx={{ gridColumn: "span 2" }}
                          />
                          <TextField
                              fullWidth
                              variant="filled"
                              label="Producer's Email"
                              type="email"
                              name="producersEmail"
                              htmlFor="producersEmail"
                              sx={{ gridColumn: "span 2" }}
                          />
                          <TextField
                              fullWidth
                              variant="filled"
                              label="Film's Code"
                              type="text"
                              // value={details.filmsCode}
                              name="filmsCode"
                              htmlFor="filmsCode"
                              sx={{ gridColumn: "span 2" }}
                          />
                          <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                          <InputLabel id="dropdown">Distribution type</InputLabel>
                              <Select
                              labelId="dropdown"
                              id="dropdown"
                              name="distributionType"
                              // value={details.distributionType}
                              // onChange={handleChange}
                              label="Distribution Type"
                              htmlFor="distributionType"
                              >
                              <MenuItem value="North America">North America</MenuItem>
                              <MenuItem value="World">World</MenuItem>
                              <MenuItem value="World excluding North America">World excluding North America</MenuItem>
                              <MenuItem value="International">International - Limited</MenuItem>
                              </Select>
                            </FormControl>
                          </>
                          )}
                    </WizardStep>
                </Box>

                  <WizardStep
                    onSubmit={() => console.log('Step2 onSubmit')}
                    validationSchema={checkoutSchema}
                  >
                    <div>
                      <label htmlFor="email">Email</label>
                      <Field
                        autoComplete="email"
                        component="input"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="text"
                      />
                      <ErrorMessage className="error" component="div" name="email" />
                    </div>
                  </WizardStep>
            </Wizard>
        </>
      </Box>
    </DashBoard>
  );
};

export default MultiStepForm;
