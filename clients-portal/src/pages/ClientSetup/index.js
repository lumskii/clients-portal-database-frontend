import React, { useState, useEffect } from "react";
import { DashBoard } from "../Dashboard/DashboardElements";
import Header from "../../components/Heading";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import axios from "axios";
import "./ClientStyles.css";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";
import { server } from "../../constance";
import MovieInfo from "./MovieInfo";
import AgreementInfo from "./AgreementInfo";
import Date from "./Date";
import ComissionExps from "./ComissionExps";
import Accounting from "./Accounting";
import Uploads from "./Uploads";
import Confirm from "./Confirm";
import { useFormik } from "formik";

const initialState = {
  filmName: "",
  producersEmail: "",
  filmsCode: "",
  distributionType: "",
  rightSale: "",
  descri: "",
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
  grossCor: "",
  grossCorRights: "",
  producerPay: "",
  deliveryFees: "",
  distributionFee: "",
  incomeReserves: "",
  accountingTerms: "",
  avatar: "", // new key-value pair
};

const ClientSetup = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState(initialState);
  const [files, setFiles] = useState([]);
  const [page, setPage] = useState(0);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isToggled, setIsToggled] = useState(false);

  const FormTitles = [
    "Movie Information",
    "Agreement Information",
    "Agreement Dates",
    "Comission & Expenses",
    "Accounting Terms",
    "Upload Film Poster",
    "Confirm Details",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    formik.handleChange(e);
  };

  const onChangeFile = (e) => {
    setFiles(e.target.file[0]);
  }

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <MovieInfo
          details={details}
          formik={formik}
        />
      );
    } else if (page === 1) {
      return <AgreementInfo formik={formik} isToggled={isToggled} setIsToggled={setIsToggled} />;
    } else if (page === 2) {
      return <Date formik={formik} />;
    } else if (page === 3) {
      return <ComissionExps formik={formik} />;
    } else if (page === 4) {
      return <Accounting formik={formik} />;
    } else if (page === 5) {
      return <Uploads files={files} setFiles={setFiles} details={details} setDetails={setDetails} onChangeFile={onChangeFile} />;
    } else {
      return <Confirm details={details} files={files} formik={formik} />;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit(e);
    // console.log(formik.values)
    const submitClientDetails = async () => {
      const submitted = await axios.post(`${server}/v1/clients`, formik.values);
      if (
        submitted &&
        submitted.data.success &&
        submitted.data.status === 200
      ) {
        cogoToast.success("Client added successfully", {
          position: "top-center",
        });
        console.log("submitted", submitted.data);
        setDetails(initialState);
        navigate('/clients');
      } else {
        cogoToast.error("Could not submit client info");
      }
    };

    submitClientDetails();
  };

  useEffect(() => {
    const filmCode = "OMM" + Math.floor(100000 + Math.random() * 900000);
    console.log("filmcode", filmCode);
    formik.setFieldValue("filmsCode", filmCode );
  }, []);


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
    descri: yup.string().required("Please enter description"),
    effectiveDate: yup.string().required("required"),
  });

  const formik = useFormik({
    initialValues: details,
    validationSchema: checkoutSchema,
  });


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
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                {/* Page contents called from pageDisplay function above......  */}
                {PageDisplay()}
              </Box>
              {/* Footer elements starts here... */}
              <div className="nav_btns">
                <div
                  className={page === 0 ? "invisible" : "prev"}
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
                    className={page === 0 ? "next position" : "next"}
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
