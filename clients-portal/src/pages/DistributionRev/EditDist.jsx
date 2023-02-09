import { Box, Button, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { server } from '../../constance';
import { tokens } from '../../theme';
import Model from './Model';

export default function EditDist({ selectedTitle, dist, setDist }) {
  const [editDist, setEditDist] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const clientId = selectedTitle.id;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const retrieveDist = async (error) => {
      setLoading(true);
      const response = await axios.get(
        `${server}/v1/clients/${clientId}/dist-rev`
      );

      if (response.status === 200) {
        setLoading(false);
        let allDist = response.data.distributionRev.map((dist) => ({
          id: dist._id,
          cName: dist.cName,
          cType: dist.cType,
          platformOption: dist.platformOption,
          rType: dist.rType,
          territory: dist.territory,
          revenueAmount: dist.revenueAmount,
          receivedAmount: dist.receivedAmount,
        }));

        setDist(allDist);
      } else {
        console.log('unable to fetch', error);
      }
    };

    retrieveDist();
  }, [clientId, setDist]);

  const columns = [
    {
      field: 'cName',
      headerName: 'Company Name',
      width: 400,
    },
    {
      field: 'cType',
      headerName: 'Company Type',
      width: 200,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setEditDist(params.row);
              setOpenModal(true);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Box
        m="-10px 0 0 0"
        height="50vh"
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
        <DataGrid rows={dist} columns={columns} loading={loading} />
        <Model
          openModal={openModal}
          setOpenModal={setOpenModal}
          editDist={editDist}
          clientId={clientId}
        />
      </Box>
    </>
  );
}
