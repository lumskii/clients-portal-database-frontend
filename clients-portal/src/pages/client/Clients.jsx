import React, { useState } from 'react';
import './clients.css';
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlineDeleteRow } from 'react-icons/ai';
import {clientRows} from '../../dummyData'
import { Link } from 'react-router-dom';

export default function Clients() {
    const [data, setData] = useState(clientRows);

    const handleDelete = (id)=>{
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'filmName', headerName: 'Film Name', width: 200, renderCell: (params)=>{
            return (
                <div className='clientAvatar'>
                    <img className='avatarImg' src={params.row.avatar} alt="" />
                    {params.row.filmName}
                </div>
            )
        } },
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
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return (
                    <>
                    <Link to={"/clients/"+params.row.id}>
                        <button className="clientListEdit">Edit</button>
                    </Link>
                        <AiOutlineDeleteRow className="clientListDelete" onClick={()=>handleDelete(params.row.id)} />
                    </>
                )
            }
        }
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
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
