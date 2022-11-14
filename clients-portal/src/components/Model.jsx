import React, { useEffect, useState } from 'react'
import Select, { components } from "react-select";
import './../pages/AddEditSales/SalesStyle.css';
import { server } from '../constance'

export default function Model({openModal, setOpenModal}) {
    const [titles, setTitles] = useState([]);

    const CustomInput = (props) => {
        const { maxLength } = props.selectProps;
        const inputProps = { ...props, maxLength };
    
        return <components.Input {...inputProps} />;
      };

    useEffect(() => {
        const callBackendAPI = () => {
          console.log("fetching...");
          fetch(`${server}/v1/clients`)
            .then((res) => res.json())
            .then((res) => {
              if (res.status === 200) {
                console.log("res", res.data.clients);
                let allTitles = res.data.clients.map((client) => ({
                  label: client.filmName,
                  value: client.filmName,
                  key: client._id,
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
        <div className='modalBg'>
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => setOpenModal(false)}> X </button>
                </div>
                <div className="modalTitle">
                    <h1>Enter Movie Title</h1>
                </div>
                <div className="modalBody">
                    <Select
                            options={titles}
                            components={{ Input: CustomInput }}
                            maxLength="4"
                            className='selectField'
                        />
                </div>
                <div className="modalFooter">
                    <button>Search</button>
                </div>
            </div>
        </div>
  )
}
