import React, { useEffect, useState } from 'react'
import { Header, HeaderTitle } from '../ClientSetup/ClientSetupElements'
import { DashBoard, PageTemplate } from '../Dashboard/DashboardElements'
import Select, { components } from "react-select";

export default function EditClient() {
    const [titles, setTitles] = useState([]);

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
                <HeaderTitle>Edit a Client</HeaderTitle>
            </Header>
            <div className="cap">
                <form className="form_space">
                    <p>Film Name</p>
                    <Select
                        options={titles}
                        components={{ Input: CustomInput }}
                        maxLength="4"
                    />
                    <button type="submit" id="submit">
                        Submit
                    </button>
                </form>
            </div>
        </PageTemplate>
    </DashBoard>
  )
}
