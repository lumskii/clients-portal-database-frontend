import { useEffect, useState } from 'react';
import { Button, message, Select } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

import { server } from '../../constance';
import useClients from '../../hooks/use-clients';
import Header from '../../components/Heading';
import Table from './Table';
import Editor from './Editor';

const ToolBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  z-index: 5;

  .ant-select {
    width: 300px;
  }
`;

const SalesRevenue = () => {
  const clients = useClients();
  const [selectedClientId, setSelectedClientId] = useState();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editSale, setEdit] = useState();

  useEffect(() => {
    if (!selectedClientId) return;
    setLoading(true);
    axios
      .get(`${server}/v1/clients/${selectedClientId}/sales`)
      .then((response) => {
        setData(response.data.sales);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedClientId]);

  const handleDelete = (sale) =>
    new Promise((resolve) => {
      axios
        .delete(`${server}/v1/clients/${selectedClientId}/sales/${sale._id}`)
        .then(() => {
          setData((sales) => sales.filter((item) => item._id !== sale._id));
          resolve(null);
          message.success(`${sale?.cName} has been deleted successfully`);
        });
    });

  return (
    <>
      <Header title="Sales Revenue" subtitle="Add/Edit Sales Revenue" />

      <ToolBar>
        <Select
          fieldNames={{ value: '_id', label: 'filmName' }}
          options={clients}
          loading={!clients}
          value={selectedClientId}
          onChange={setSelectedClientId}
          placeholder="Select film"
          showSearch
          filterOption={(input, option) =>
            (option?.filmName ?? '').toLowerCase().includes(input.toLowerCase())
          }
        />

        <Button
          type="primary"
          disabled={!selectedClientId}
          onClick={() => setEdit({})}
        >
          Add
        </Button>
      </ToolBar>

      <Table
        loading={loading}
        data={data}
        onEdit={setEdit}
        onDelete={handleDelete}
      />

      <Editor
        clientId={selectedClientId}
        sale={editSale}
        onUpdate={setData}
        onClose={() => setEdit()}
      />
    </>
  );
};

export default SalesRevenue;
