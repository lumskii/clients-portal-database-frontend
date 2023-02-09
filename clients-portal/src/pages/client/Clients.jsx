import React, { useState, useEffect } from 'react';
import './clients.css';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import cogoToast from 'cogo-toast';
import { server } from '../../constance';
import { Box } from '@mui/material';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

export default function Clients() {
  const [data, setData] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const retrieveAllClients = () => {
      console.log('fetching...');
      fetch(`${server}/v1/clients`)
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            console.log('res', res.data.clients);
            let allData = res.data.clients.map((client) => ({
              id: client._id,
              filmName: client.filmName,
              filmCode: client.filmsCode,
              email: client.producersEmail,
              distributionType: client.distributionType,
              avatar: client.avatar,
            }));

            setData(allData);
          } else {
            console.log('unable to fetch');
          }
        });
    };

    retrieveAllClients();
  }, []);

  // const handleDelete = (id) => {
  //   axios.delete(`${server}/v1/clients/${id}`).then((res) => {
  //     cogoToast.success(res.data.filmName + ' has been deleted successfully', {
  //       position: 'top-center',
  //     });
  //   });
  //   setData(data.filter((item) => item.id !== id));
  // };

  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'filmName',
      headerName: 'Film Name',
      width: 400,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={`/clients/` + params.row.id}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 'bold',
              }}
            >
              <div className="clientAvatar">
                <img className="avatarImg" src={params.row.avatar} alt="" />
                {params.row.filmName}
              </div>
            </Link>
          </>
        );
      },
    },
    { field: 'email', headerName: 'Producers Email', width: 200 },
    {
      field: 'filmCode',
      headerName: 'Film Code',
      width: 120,
    },
    {
      field: 'distributionType',
      headerName: 'Distribution Type',
      width: 160,
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         {/* <Link to={`/clients/` + params.row.id}>
    //           <button className="clientListEdit">Edit</button>
    //         </Link> */}
    //         <AiOutlineDeleteRow
    //           className="clientListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //         Delete
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div className="clientsList">
      <div className="clientTitleContainerOne">
        <h1 className="headerTitle">Client List</h1>
        <Link to="/client-setup">
          <button className="clientAddButton">Create</button>
        </Link>
      </div>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          disableSelectionOnClick
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
}
