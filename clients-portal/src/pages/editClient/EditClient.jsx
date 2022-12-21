import React, { useEffect, useState } from 'react'
import { DashBoard } from '../Dashboard/DashboardElements'
// import Select, { components } from "react-select";
import './editClient.css'
import { server } from '../../constance';
import { Box, FormControl, InputLabel, MenuItem, Select, useMediaQuery } from '@mui/material';
import Header from '../../components/Heading';

export default function EditClient() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
    // const [titles, setTitles] = useState([]);

    // const CustomInput = (props) => {
    //     const { maxLength } = props.selectProps;
    //     const inputProps = { ...props, maxLength };
    
    //     return <components.Input {...inputProps} />;
    //   };

    //   useEffect(() => {
    //     const callBackendAPI = () => {
    //       console.log("fetching...");
    //       fetch(`${server}/v1/clients`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //           if (res.status === 200) {
    //             console.log("res", res.data.clients);
    //             let allTitles = res.data.clients.map((client) => ({
    //               label: client.filmName,
    //               value: client.filmName,
    //               key: client._id,
    //             }));
    
    //             setTitles(allTitles);
    //           } else {
    //             console.log("unable to fetch");
    //           }
    //         });
    //     };
    
    //     callBackendAPI();
    //   }, []);

  return (
    <DashBoard>
      <Box m="80px 20px 20px 20px">
        <Header title="Generate Reports" subtitle="Generate a report base on specified criterias" />
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 4" }}>
            <InputLabel id="dropdown">Select type</InputLabel>
            <Select
              name="reportType"
            >
            <MenuItem value="Sales by title">Sales by title</MenuItem>
            <MenuItem value="Runtime by title">Runtime by title</MenuItem>
            <MenuItem value="Exppenses by Genre">Expenses by Genre</MenuItem>
            </Select>
          </FormControl>
          
          <div sx={{alignItems: "center", width: "500px", backgroundColor: "#000", height: "3px"}}>
            <button className="submit" type="submit" id="submit">
                Run Report
            </button>
          </div>
        </Box>
        </Box>
        {/* <PageTemplate>
            <Header>
                <HeaderTitle>Edit a Client</HeaderTitle>
            </Header>
            <div className="cap2">
                <form className="form_spaceEdit">
                    <p>Film Name</p>
                    <Select
                        options={titles}
                        components={{ Input: CustomInput }}
                        maxLength="4"
                        className='selectField'
                    />
                    <button type="submit" id="submit">
                        Submit
                    </button>
                </form>
            </div>
        </PageTemplate> */}
    </DashBoard>
  )
}
