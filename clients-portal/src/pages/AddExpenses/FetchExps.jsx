import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { server } from '../../constance';

export default function FetchExps({ selectedTitle, expenses, setExpenses }) {
  const clientId = selectedTitle.id;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const retrieveExpenses = async (error) => {
      setLoading(true);
      const response = await axios.get(
        `${server}/v1/clients/${clientId}/expenses`
      );
      if (response.status === 200) {
        setLoading(false);
        let allExps = response.data.expenses.map((expense) => ({
          id: expense._id,
          dateExp: new Date(expense.dateExp).toLocaleDateString('en-US'),
          cType: expense.cType,
          describe: expense.describe,
          amount: expense.amount,
        }));

        setExpenses(allExps);
      } else {
        console.log('unable to fetch', error);
      }
    };

    retrieveExpenses();
  }, [clientId, setExpenses]);

  const columns = [
    {
      field: 'dateExp',
      headerName: 'Date Expensed',
      width: 200,
      // renderCell: (params) => {
      //     return (
      //         div
      //     )
      // }
    },
    {
      field: 'cType',
      headerName: 'Company Type',
      width: 200,
    },
    {
      field: 'describe',
      headerName: 'Description',
      width: 300,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 100,
    },
  ];

  return (
    <>
      <DataGrid
        disableSelectionOnClick
        rows={expenses}
        columns={columns}
        loading={loading}
      />
    </>
  );
}
