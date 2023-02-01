import { useEffect, useState } from 'react';
import RSelect from 'react-select';
import { Box, Button, styled } from '@mui/material';
import axios from 'axios';

import { server } from '../../constance';
import Header from '../../components/Heading';
import SalesRevenueList from './List';
import SalesRevenueEdit from './Edit';
import SalesRevenueDelete from './Delete';

const ToolBar = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 24,
  zIndex: 5,
  '.clients-select': {
    width: 300,
  },
});

const SalesRevenue = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState();

  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editSale, setEditSale] = useState();
  const [deleteSale, setDeleteSale] = useState();

  useEffect(() => {
    axios
      .get(`${server}/v1/clients`)
      .then((response) => {
        setClients(response.data.data.clients);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  useEffect(() => {
    if (!selectedClient) return;
    setLoading(true);
    axios
      .get(`${server}/v1/clients/${selectedClient?._id}/sales`)
      .then((response) => {
        setSales(response.data.sales);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedClient]);

  return (
    <Box p="40px 20px 20px 20px">
      <Header title="Sales Revenue" subtitle="Add/Edit Sales Revenue" />

      <ToolBar>
        <RSelect
          options={clients}
          placeholder="Select Film Name..."
          getOptionLabel={(o) => o.filmName}
          getOptionValue={(o) => o.filmName}
          value={selectedClient}
          onChange={setSelectedClient}
          className="clients-select"
        />
        <Button
          variant="contained"
          color="primary"
          disabled={!selectedClient}
          onClick={() => setEditSale({})}
        >
          Add
        </Button>
      </ToolBar>

      <SalesRevenueList
        loading={loading}
        sales={sales}
        onEdit={setEditSale}
        onDelete={setDeleteSale}
      />

      <SalesRevenueEdit
        clientId={selectedClient?._id}
        sale={editSale}
        onUpdate={setSales}
        onClose={() => setEditSale()}
      />

      <SalesRevenueDelete
        clientId={selectedClient?._id}
        sale={deleteSale}
        onUpdate={setSales}
        onClose={() => setDeleteSale()}
      />
    </Box>
  );
};

export default SalesRevenue;
