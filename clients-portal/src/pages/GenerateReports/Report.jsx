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
        const sales = response.data.sales.map((sale, client) => ({
          id: sale._id,
          cName: sale.cName,
          territory: sale.territory,
          salesAmount: sale.salesAmount,
          receivedAmount: sale.receivedAmount,
          dealCD: new Date(sale.dealCD).toLocaleDateString('en-US'),
          dealED: new Date(sale.dealED).toLocaleDateString('en-US'),
          filmName: client.filmName,
        }));
        setCompanies(sales);
      })
      .catch((error) => {
        console.log('unable to fetch', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [option, value]);

  //...setting the columns..................................................
  let columns = [];
  if (option.label === 'Film by Buyer') {
    columns = [
      {
        field: 'cName',
        headerName: 'Company Name',
        width: 300,
      },
    ];
  } else if (option.label === 'Film by Territory') {
    columns = [
      { field: 'filmName', headerName: 'Film by Territory', width: 300 },
    ];
  } else if (option.label === 'Film by Age') {
    columns = [{ field: 'filmName', headerName: 'Film by Age', width: 300 }];
  } else if (option.label === 'Film by Contract Expiration') {
    columns = [
      {
        field: 'filmName',
        headerName: 'Film by Contract Expiration',
        width: 300,
      },
    ];
  } else if (option.label === 'Film by Genre') {
    columns = [{ field: 'filmName', headerName: 'Film by Genre', width: 300 }];
  }

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
