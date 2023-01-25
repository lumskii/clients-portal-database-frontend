import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import { tokens } from '../../theme';
import { server } from '../../constance';
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

const columns = [
  {
    field: 'cName',
    headerName: 'Company Name',
    width: 300,
  },
  { field: 'dealED', headerName: 'Deal Entered Date', width: 200 },
  { field: 'dealCD', headerName: 'Deal Closed Date', width: 200 },
];

const ReportView = ({ type, option, value, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const clientId = value.key;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/v1/clients/${clientId}/sales`)
      .then((response) => {
        const allSales = response.data.sales.map((sale) => ({
          id: sale._id,
          cName: sale.cName,
          dealCD: new Date(sale.dealCD).toLocaleDateString('en-US'),
          dealED: new Date(sale.dealED).toLocaleDateString('en-US'),
        }));
        setCompanies(allSales);
      })
      .catch((error) => {
        console.log('unable to fetch', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [clientId]);

  return (
    <Wrapper>
      <button className="position clientAddButton" onClick={() => onClose()}>
        Go Back
      </button>
      <DataGrid
        loading={loading}
        rows={companies}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Wrapper>
  );
};

export default ReportView;