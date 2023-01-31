import { useState } from 'react';
import { Button, styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';

import { tokens } from '../../theme';

const Table = styled(DataGrid)(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    border: 'none',
    '.MuiDataGrid-columnHeaders': {
      backgroundColor: colors.blueAccent[700],
      borderBottom: 'none',
    },
    '.MuiDataGrid-virtualScroller': {
      backgroundColor: colors.primary[400],
    },
    '.MuiDataGrid-footerContainer': {
      backgroundColor: colors.blueAccent[700],
      borderTop: 'none',
    },
    '.actions': {
      paddingRight: 20,
    },
  };
});

const Action = styled(Button)({
  minWidth: 'initial',
  textTransform: 'initial',
});

const SalesRevenueList = ({ loading, sales, onEdit, onDelete }) => {
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    {
      field: 'cName',
      headerName: 'Company Name',
      width: 300,
    },
    {
      field: 'territory',
      headerName: 'Territory',
      width: 180,
    },
    {
      field: 'salesAmount',
      headerName: 'Sales Amount',
      type: 'number',
      width: 180,
    },
    {
      field: 'receivedAmount',
      headerName: 'Received Amount',
      type: 'number',
      width: 180,
    },
    {
      field: 'dealED',
      headerName: 'Deal Entered Date',
      headerAlign: 'right',
      align: 'right',
      width: 180,
      renderCell: (params) => format(new Date(params.value), 'yyyy-MM-dd'),
    },
    {
      field: 'dealCD',
      headerName: 'Deal Closed Date',
      headerAlign: 'right',
      align: 'right',
      width: 180,
      renderCell: (params) => format(new Date(params.value), 'yyyy-MM-dd'),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      headerClassName: 'actions',
      headerAlign: 'right',
      align: 'right',
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Action onClick={() => onEdit(params.row)}>Edit</Action>
            <Action onClick={() => onDelete(params.row)}>Delete</Action>
          </>
        );
      },
    },
  ];

  return (
    <Table
      loading={loading}
      rows={sales}
      columns={columns}
      getRowId={(row) => row._id}
      pagination
      rowsPerPageOptions={[10, 20, 50]}
      pageSize={pageSize}
      onPageSizeChange={setPageSize}
      autoHeight
      disableSelectionOnClick
    />
  );
};

export default SalesRevenueList;
