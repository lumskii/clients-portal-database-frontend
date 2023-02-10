import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import { tokens } from '../../theme';
import { styled } from '@mui/system';
import { Table, Collapse, DatePicker } from 'antd';
import './generateReports.css';

const { Panel } = Collapse;
const { RangePicker } = DatePicker;

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
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    const url = option.getUrl?.(value, dateRange);
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
        } else if (option.label === 'Film by Territory') {
          const clients = response.data.clients.map((client) => ({
            id: client._id,
            filmName: client.filmName,
            territory: response.data.territory,
          }));
          setCompanies(clients);
          console.log('clients', clients);
        } else if (
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
        } else if (option.label === 'Revenue by Territory') {
          const revenue = response.data.clients;
          const revenueData = revenue.map((client) => ({
            id: client._id,
            filmName: client.filmName,
            revenueAmount: client.distributionRev.find(
              (rev) => rev.territory === value || rev.platform === value
            ).revenueAmount,
          }));
          setCompanies(revenueData);
          console.log('revenueData', revenueData);
        } else if (option.label === 'Revenue by Platform') {
          const revenue = response.data.clients.map((client) => ({
            id: client._id,
            filmName: client.filmName,
            revenueAmount: client.distributionRev[0 || 0 + 1].revenueAmount,
          }));
          setCompanies(revenue);
          console.log('revenue', revenue);
        } else if (option.label === 'Revenue by Year') {
          const revenue = response.data.map((client) => ({
            id: client._id,
            filmName: client.filmName,
            revenueAmount: client.distributionRev[0].revenueAmount,
          }));
          setCompanies(revenue);
          console.log('revenue', revenue);
        }
      })
      .catch((error) => {
        console.log('unable to fetch', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [option, value, dateRange]);

  const totalRevenue = companies.reduce(
    (sum, company) => sum + company.revenueAmount,
    0
  );

  const columns = [
    {
      title: option.label,
      dataIndex: 'territory',
      key: 'territory',
      render: (text) => (
        <span style={{ textTransform: 'capitalize' }}>{text}</span>
      ),
    },
    {
      title: 'Total Revenue',
      dataIndex: 'totalRevenue',
      key: 'totalRevenue',
      render: (text) => `$${text}`,
    },
  ];

  return (
    <Wrapper>
      <button className="position clientAddButton" onClick={() => onClose()}>
        Go Back
      </button>
      {option.label === 'Revenue by Territory' ||
      option.label === 'Revenue by Platform' ? (
        <>
          <Box p={0} style={{ fontWeight: 'bold' }}>
            Date Range&nbsp;&nbsp;
            <RangePicker
              onChange={setDateRange}
              style={{ margin: '0px 0 20px 0px' }}
            />
            <Table
              columns={columns}
              dataSource={[{ territory: value, totalRevenue: totalRevenue }]}
              loading={loading}
              pagination={false}
              rowKey="territory"
            />
            <Collapse>
              <Panel header="Details" key="1">
                <Table
                  columns={[
                    {
                      title: 'Film Name',
                      dataIndex: 'filmName',
                      key: 'filmName',
                      render: (text) => (
                        <span style={{ textTransform: 'capitalize' }}>
                          {text}
                        </span>
                      ),
                    },
                    {
                      title: 'Revenue Amount',
                      dataIndex: 'revenueAmount',
                      key: 'revenueAmount',
                      render: (text) => `$${text}`,
                    },
                  ]}
                  dataSource={companies}
                  loading={loading}
                  pagination={false}
                  rowKey={(record) => record.filmName}
                />
              </Panel>
            </Collapse>
          </Box>
        </>
      ) : (
        <DataGrid
          loading={loading}
          rows={companies}
          columns={option.columns || []}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      )}
    </Wrapper>
  );
};

export default ReportView;
