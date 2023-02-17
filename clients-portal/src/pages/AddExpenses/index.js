import React, { useEffect, useState } from 'react';
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

const AddExpenses = () => {
  const clients = useClients();
  const [selectedClientId, setSelectedClientId] = useState();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState();

  useEffect(() => {
    if (!selectedClientId) return;
    setLoading(true);
    axios
      .get(`${server}/v1/clients/${selectedClientId}/expenses`)
      .then((response) => {
        setData(response.data.expenses);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedClientId]);

  const handleSave = async (values) => {
    try {
      if (editItem._id) {
      } else {
        const res = await axios.post(
          `${server}/v1/clients/${selectedClientId}/expenses`,
          values
        );
        setData(res.data.expenses.expenses);
        message.success('Expenses added successfully');
      }
      setEditItem();
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
    }
  };

  const handleDelete = () =>
    new Promise((resolve) => {
      resolve(null);
    });

  return (
    <>
      <Header title="Expenses" subtitle="View/Add Expenses" />

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

      <Editor
        item={editItem}
        onSave={handleSave}
        onClose={() => setEditItem()}
      />
    </>
  );
};

export default AddExpenses;
