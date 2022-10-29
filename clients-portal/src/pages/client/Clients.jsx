import React, { useState, useEffect } from "react";
import "./clients.css";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDeleteRow } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import cogoToast from "cogo-toast";
import { server } from "../../constance";

export default function Clients() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const retrieveAllClients = () => {
      console.log("fetching...");
      fetch(`${server}/v1/clients`)
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            console.log("res", res.data.clients);
            let allData = res.data.clients.map((client) => ({
              id: client._id,
              pic: client.pic,
              filmName: client.filmName,
              filmCode: client.filmsCode,
              avatar: client.avatar,
              email: client.producersEmail,
              distributionType: client.distributionType,
            }));

            setData(allData);
          } else {
            console.log("unable to fetch");
          }
        });
    };

    retrieveAllClients();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${server}/v1/clients/${id}`).then((res) => {
      cogoToast.success(res.data.filmName + " has been deleted successfully", {
        position: "top-center",
      });
    })
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    {
      field: "filmName",
      headerName: "Film Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="clientAvatar">
            <img className="avatarImg" src={params.row.pic} alt="" />
            {params.row.filmName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Producers Email", width: 200 },
    {
      field: "filmCode",
      headerName: "Film Code",
      width: 120,
    },
    {
      field: "distributionType",
      headerName: "Distribution Type",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/clients/` + params.row.id}>
              <button className="clientListEdit">Edit</button>
            </Link>
            <AiOutlineDeleteRow
              className="clientListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="clientsList">
      <div className="clientTitleContainerOne">
        <h1 className="headerTitle">Client List</h1>
        <Link to="/client-setup">
          <button className="clientAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
}
