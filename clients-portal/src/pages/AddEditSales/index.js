import React, { useEffect, useState } from 'react'
import { Header, HeaderTitle } from '../ClientSetup/ClientSetupElements'
import { DashBoard, PageTemplate } from '../Dashboard/DashboardElements'
import Select, { components } from "react-select";
import './SalesStyle.css'

const AddEditSales = () => {
    const [toggleState, setToggleState] = useState(1);
    const [titles, setTitles] = useState([]);

    const [details, setDetails] = useState({
        cName: "",
        territory: "",
        salesAmount: "",
        receivedAmount: "",
        dealCD: "",
        dealED: "",
    });

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

    const toggleTab = (index) => {
      setToggleState(index);
    };

    const CustomInput = (props) => {
        const { maxLength } = props.selectProps;
        const inputProps = { ...props, maxLength };
    
        return <components.Input {...inputProps} />;
      };

      useEffect(() => {
        const callBackendAPI = () => {
          console.log("fetching...");
          fetch("/titles")
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
      <PageTemplate>
        <Header>
          <HeaderTitle>Add/Edit Sales Revenue</HeaderTitle>
        </Header>

        <div className="cap">
          <div className="form_wrapper">
            <div className="form_heading">
              <div
                className={
                  toggleState === 1 ? "heading_space current" : "heading_space"
                }
                onClick={() => toggleTab(1)}
              >
                Add Sales Revenue
              </div>
              <div
                className={
                  toggleState === 2 ? "heading_space current" : "heading_space"
                }
                onClick={() => toggleTab(2)}
              >
                Edit Sales Revenue
              </div>
            </div>

            <div
              className={
                toggleState === 1 ? "content active-content" : "content"
              }
            >
              <form className="form active-content" onSubmit={handleSubmit}>
                <div className="form-input">
                  <p>Company name</p>
                  <input
                    type="text"
                    className="text_area"
                    name="cName"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-input">
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
                </div>
                <div className="form-input">
                  <p>Sales Amount</p>
                  <input
                    type="number"
                    className="text_area"
                    name="salesAmount"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-input">
                  <p>Received Amount</p>
                  <input
                    type="number"
                    className="text_area"
                    name="receivedAmount"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-input">
                  <p>Deal closed Date</p>
                  <input
                    type="date"
                    className="text_area"
                    name="dealCD"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-input">
                  <p>Deal Entered Date</p>
                  <input
                    type="date"
                    className="text_area"
                    name="dealED"
                    onChange={handleChange}
                  />
                </div>

                <div className="buttons">
                  <button type="save" id="submit-button" className="left">
                    Save
                  </button>
                  <button type="submit" id="submit-button" className="right">
                    Publish
                  </button>
                </div>
              </form>
            </div>
            <div
              className={
                toggleState === 2 ? "content active-content" : "content"
              }
            >
              <div className="form active-content">
                <form className="form active-content" onSubmit={handleSubmit}>
                  <div className='edit_container'>
                  <div className="form-input2">
                <span className="clientUpdateTitle">Edit</span>
                    <div className="clientUpdateLeft">
                        <div className="clientUpdateItem">
                            <label>Film Name</label>
                            <input type="text" placeholder="The Test" className="clientUpdateInput" />
                        </div>
                        <div className="clientUpdateItem">
                            <label>Producer's Email</label>
                            <input type="email" placeholder="producer@gmail.com" className="clientUpdateInput" />
                        </div>
                        <div className="clientUpdateItem">
                            <label>Distribution Type</label>
                            <input type="text" placeholder="Sales only" className="clientUpdateInput" />
                        </div>
                        <div className="clientUpdateItem">
                            <label>Phone Number</label>
                            <input type="text" placeholder="+1 123 456 7890" className="clientUpdateInput" />
                        </div>
                        <div className="clientUpdateItem">
                            <label>Location</label>
                            <input type="text" placeholder="New York | USA" className="clientUpdateInput" />
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
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
    </DashBoard>
  );
}

export default AddEditSales