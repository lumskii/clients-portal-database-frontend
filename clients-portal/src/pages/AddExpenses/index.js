import React, { useState } from 'react'
import { Header, HeaderTitle } from '../ClientSetup/ClientSetupElements'
import { PageTemplate, DashBoard } from '../Dashboard/DashboardElements'

const AddExpenses = () => {
    const [details, setDetails] = useState({
        dateExp: "",
        cName: "",
        description: "",
        amount: ""
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
    }

    const styleObj = {
        maxWidth: '280px',
        minHeight: '100px'
    }

  return (
    <DashBoard>
        <PageTemplate>
            <Header>
                <HeaderTitle>Add Expenses</HeaderTitle>
                    <form className="form" onSubmit={handleSubmit}>
                <div className="form-input">
                    <p>Date Expensed</p>
                    <input
                    type="date"
                    className="text_area"
                    name="dateExp"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-input">
                    <p>Company Name</p>
                    <select
                    type="dropdown"
                    className="text_area"
                    name="cName"
                    onChange={handleChange}
                    >
                    <option disabled selected value="">
                        Please select category
                    </option>
                    <option value="platform">Platform</option>
                    <option value="retail">Retail</option>
                    <option value="miscellaneous">Miscellaneous...</option>
                    </select>
                </div>
                
                <div className="form-input">
                    <p>Description</p>
                    <textarea
                    type="text"
                    style={styleObj}
                    className="text_area"
                    name="description"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-input">
                    <p>Amount</p>
                    <input
                    type="number"
                    className="text_area"
                    name="amount"
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
            </Header>

        </PageTemplate>
    </DashBoard>
  )
}

export default AddExpenses