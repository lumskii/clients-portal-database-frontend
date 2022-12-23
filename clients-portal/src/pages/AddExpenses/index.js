import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Model from '../../components/Model';
import { server } from '../../constance';
import { Header, HeaderTitle } from '../ClientSetup/ClientSetupElements'
import { DashBoard2, PageTemplate3 } from '../Dashboard/DashboardElements'
import cogoToast from "cogo-toast";
import FormCustom from '../../components/form';

const initialState = {
    dateExp: "",
    cType: "",
    describe: "",
    amount: "",
};

const AddExpenses = () => {
    const [details, setDetails] = useState(initialState);

    useEffect(() => {
        const retrieveExpenses = (id) => {
            console.log("fetching...");
            fetch(`${server}/v1/expenses/${id}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 200) {
                    console.log('res', res.data.expenses);
                    let allExps = res.data.expenses.map((expense) => ({
                        id: expense._id,
                        dateExp: expense.dateExp,
                        cType: expense.cType,
                        describe: expense.describe,
                        amount: expense.amount,
                    }));

                    setDetails(allExps);
                } else {
                    console.log('unable to fetch');
                }
            });
        };

        retrieveExpenses();
    }, []);

    const [openModal, setOpenModal] = useState(true);
    const [form, setForm] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value};
        })
    };



// This is the columns settings for the form-------------------------
    const columns = [
        {
            field: 'dateExp',
            headerName: "Date Expensed",
            width: 200,
            // renderCell: (params) => {
            //     return (
            //         div
            //     )
            // }
        },
        {
            field: 'cType',
            headerName: 'Company Type',
            width: 200,
        },
        {
            field: 'describe',
            headerName: 'Description',
            width: 300,
        },
        {
            field: 'amount',
            headerName: 'Amount',
            width: 100,
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const submitClientExps =async () => {
            const submitted = await axios.post(`${server}/v1/expenses`, details);
            if (
                submitted &&
                submitted.data.success &&
                submitted.data.status === 200
            ) {
                cogoToast.success("Expenses added successfully", {
                    poition: "top-center",
                });
                console.log('submitted', submitted.data);
                setDetails(initialState);
            } else {
                cogoToast.error('Could not submit expenses');
            }
        };

        submitClientExps();
    }

    const styleObj = {
        maxWidth: '280px',
        minHeight: '100px'
    }

    const handleToggle = () => {
        setForm(!form);
    }

  return (

        // <MultiStepForm />

        <FormCustom />

    // <DashBoard2>
    //     <PageTemplate3>
    //     {openModal && <Model openModal={openModal} setOpenModal={setOpenModal} />}
    //         <Header>
    //             <HeaderTitle>Add Expenses</HeaderTitle>
    //         </Header>

    //         <div className='exp_form_header' onClick={handleToggle}>Add New Expenses</div>
    //         {form && <form className="form_exps" onSubmit={handleSubmit}>
    //             <div className="form-input">
    //                 <p>Date Expensed</p>
    //                 <input
    //                 type="date"
    //                 className="text_area"
    //                 name="dateExp"
    //                 onChange={handleChange}
    //                 />
    //             </div>
    //             <div className="form-input">
    //                 <p>Company Type</p>
    //                 <select
    //                 type="dropdown"
    //                 className="text_area"
    //                 name="cType"
    //                 onChange={handleChange}
    //                 >
    //                 <option disabled selected value="">
    //                     Please select category
    //                 </option>
    //                 <option value="platform">Platform</option>
    //                 <option value="retail">Retail</option>
    //                 <option value="miscellaneous">Miscellaneous...</option>
    //                 </select>
    //             </div>
                
    //             <div className="form-input">
    //                 <p>Description</p>
    //                 <textarea
    //                 type="text"
    //                 style={styleObj}
    //                 className="text_area"
    //                 name="describe"
    //                 onChange={handleChange}
    //                 />
    //             </div>
    //             <div className="form-input">
    //                 <p>Amount</p>
    //                 <input
    //                 type="number"
    //                 className="text_area"
    //                 name="amount"
    //                 onChange={handleChange}
    //                 />
    //             </div>

    //             <div className="buttons">
    //                 <button type="submit" id="submit-button" className="left">
    //                 Save
    //                 </button>
    //                 <button type="submit" id="submit-button" className="right">
    //                 Publish
    //                 </button>
    //             </div>
    //         </form>}

    //         <div className='info_wrapper'>
    //             <div className='saved'>
    //                 <h3>Saved Expenses</h3>
    //                 <DataGrid
    //                     rows={details}
    //                     columns={columns}
    //                     pageSize={5}
    //                     rowsPerPageOptions={[5]}
    //                     style={{ height: '350px'}}
    //                 />
    //                 {/* <button className='publish_save'>Publish</button> */}
    //             </div>
    //             <div className='published'>
    //                 <h3>Published Expenses</h3>
    //                 <ul>
    //                     <li>Date Expensed: <span>{details.dateExp}</span></li>
    //                     <li>Company Type: <span>{details.cType}</span></li>
    //                     <li>Description: <span>{details.describe}</span></li>
    //                     <li>Amount: <span>{details.amount}</span></li>
    //                 </ul>
    //             </div>
    //         </div>
            

    //     </PageTemplate3>
    // </DashBoard2>
  )
}

export default AddExpenses