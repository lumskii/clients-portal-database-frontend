import { Box, Button, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { server } from '../../constance';
import { tokens } from '../../theme';
import Model from './Model';

export default function EditSales({
  selectedTitle,
  sales,
  setSales,
  handleChange,
  handleSave,
}) {
  const [editSale, setEditSale] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const clientId = selectedTitle.id;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const retrieveSales = async (error) => {
      setLoading(true);
      const response = await axios.get(
        `${server}/v1/clients/${clientId}/sales`
      );

      if (response.status === 200) {
        setLoading(false);
        let allSales = response.data.sales.map((sale) => ({
          id: sale._id,
          cName: sale.cName,
          territory: sale.territory,
          salesAmount: sale.salesAmount,
          receivedAmount: sale.receivedAmount,
          dealCD: new Date(sale.dealCD).toLocaleDateString('en-US'),
          dealED: new Date(sale.dealED).toLocaleDateString('en-US'),
        }));

        setSales(allSales);
      } else {
        console.log('unable to fetch', error);
      }
    };

    retrieveSales();
  }, [clientId, setSales]);

  const columns = [
    {
      field: 'cName',
      headerName: 'Company Name',
      width: 400,
    },
    {
      field: 'territory',
      headerName: 'Territory',
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
              setEditSale(params.row);
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
        <DataGrid
          rows={sales}
          columns={columns}
          loading={loading}
          // components={{
          //   Toolbar: GridToolbar,
          // }}
        />
        <Model
          openModal={openModal}
          setOpenModal={setOpenModal}
          editSale={editSale}
          handleChange={handleChange}
          handleSave={handleSave}
        />
      </Box>
    </>
  );
}
