import { useEffect, useState } from 'react';
import { Button, Card, message, Select } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

import { server } from '../../constance';
import useClients from '../../hooks/use-clients';
import Page from '../../components/MainLayout/page';
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
  const [editItem, setEditItem] = useState();

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

  const handleSave = async (values) => {
    try {
      if (editItem._id) {
        const res = await axios.put(
          `${server}/v1/clients/${selectedClientId}/sales/${editItem._id}`,
          values
        );
        setData(res.data.client.sales);
        message.success('Sales revenue updated successfully');
      } else {
        const res = await axios.post(
          `${server}/v1/clients/${selectedClientId}/sales`,
          values
        );
        setData(res.data.client.sales);
        message.success('Sales revenue added successfully');
      }
      return true;
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
      return false;
    }
  };

  return (
    <Page title="Sales Revenue" subtitle="Add/Edit Sales Revenue">
      <Card>
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
              (option?.filmName ?? '')
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          />

          <Button
            type="primary"
            disabled={!selectedClientId}
            onClick={() => setEditItem({})}
          >
            Add
          </Button>
        </ToolBar>

        <Table
          loading={loading}
          data={data}
          onEdit={setEditItem}
          onDelete={handleDelete}
        />
      </Card>

      <Editor
        item={editItem}
        onSave={handleSave}
        onClose={() => setEditItem()}
      />
    </Page>
  );
};

export default SalesRevenue;
