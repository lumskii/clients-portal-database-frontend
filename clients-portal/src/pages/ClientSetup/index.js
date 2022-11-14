import React, { useState, useEffect } from "react";
import { DashBoard2, PageTemplate2 } from "../Dashboard/DashboardElements";
import { Header, HeaderTitle } from "./ClientSetupElements";
import axios from "axios";
import "./ClientStyles.css";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";
import { server } from "../../constance";
import MovieInfo from "./MovieInfo";
import AgreementInfo from "./AgreementInfo";
import Date from "./Date";
import MarketingExp from "./MarketingExp";
import Accounting from "./Accounting";
import Uploads from "./Uploads";
import Confirm from "./Confirm";

const initialState = {
  filmName: "",
  producersEmail: "",
  filmsCode: "",
  distributionType: "",
  rightSale: "",
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
  avatar: "",
};

const ClientSetup = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState(initialState);
  const [files, setFiles] = useState([]);
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Movie Information",
    "Agreement Information",
    "Agreement Dates",
    "Marketing Expense Cap",
    "Accounting Terms",
    "Upload Film Poster",
    "Confirm Details",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <MovieInfo details={details} setDetails={setDetails} handleChange={handleChange} />;
    } else if (page === 1) {
      return <AgreementInfo details={details} setDetails={setDetails} handleChange={handleChange} />;
    } else if (page === 2) {
      return <Date details={details} setDetails={setDetails} handleChange={handleChange} />;
    } else if (page === 3) {
      return <MarketingExp details={details} handleChange={handleChange} />;
    } else if (page === 4) {
      return <Accounting details={details} setDetails={setDetails} handleChange={handleChange} />;
    } else if (page === 5) {
      return <Uploads files={files} setFiles={setFiles} details={details} setDetails={setDetails} handleChange={handleChange} />;
    } else {
      return <Confirm details={details} files={files} setFiles={setFiles} />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const submitClientDetails = async () => {
      const submitted = await axios.post(`${server}/v1/clients`, details);
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
    setDetails({ ...details, filmsCode: filmCode });
  }, []);


  return (
    <DashBoard2>
      <PageTemplate2>
        <Header>
          <HeaderTitle>Client Form</HeaderTitle>
        </Header>
        <div className="cap">
          <div className="progressbar">
            <div style={{ width: `${(100 / FormTitles.length) * (page + 1)}%` }}></div>
          </div>
          <h3>{FormTitles[page]}</h3>
          <form className="form_space" onSubmit={handleSubmit}>

            {/* Page contents called from pageDisplay function above......  */}
            {PageDisplay()}

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

            {page === FormTitles.length - 1 ? 
            <button className="submit" type="submit" id="submit">
            Submit
          </button>
                :
            <div
            // disabled={page === FormTitles.length - 1}
            className={page === 0 ? "next position" : "next"}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </div> 
            }
            
            </div>
          </form>
        </div>
      </PageTemplate2>
    </DashBoard2>
  );
};

export default ClientSetup;
