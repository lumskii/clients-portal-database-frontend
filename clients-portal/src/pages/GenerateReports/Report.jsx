import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import { tokens } from '../../theme';
import { styled } from '@mui/system';

const Wrapper = styled(Box)(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    height: '75vh',
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
  };
});

const ReportView = ({ option, value, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const url = option.getUrl?.(value);
    if (!url) return;

    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (option.label === 'Film by Buyer') {
          const sales = response.data.sales.map((sale) => ({
            id: sale._id,
            cName: sale.cName,
            territory: sale.territory,
            salesAmount: sale.salesAmount,
            receivedAmount: sale.receivedAmount,
            dealCD: new Date(sale.dealCD).toLocaleDateString('en-US'),
            dealED: new Date(sale.dealED).toLocaleDateString('en-US'),
          }));
          setCompanies(sales);
        } else if (
          option.label === 'Film by Territory' ||
          option.label === 'Film by Age' ||
          option.label === 'Film by Contract Expiration' ||
          option.label === 'Film by Genre'
        ) {
          const clients = response.data.clients.map((client) => ({
            id: client._id,
            filmName: client.filmName,
          }));
          setCompanies(clients);
          console.log('clients', clients);
        }
        // const sales = response.data.sales.map((sale) => ({
        //   id: sale._id,
        //   cName: sale.cName,
        //   territory: sale.territory,
        //   salesAmount: sale.salesAmount,
        //   receivedAmount: sale.receivedAmount,
        //   dealCD: new Date(sale.dealCD).toLocaleDateString('en-US'),
        //   dealED: new Date(sale.dealED).toLocaleDateString('en-US'),
        // }));
        // setCompanies(sales);
      })
      .catch((error) => {
        console.log('unable to fetch', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [option, value]);

  return (
    <Wrapper>
      <button className="position clientAddButton" onClick={() => onClose()}>
        Go Back
      </button>
      <DataGrid
        loading={loading}
        rows={companies}
        columns={option.columns || []}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Wrapper>
  );
};

export default ReportView;
