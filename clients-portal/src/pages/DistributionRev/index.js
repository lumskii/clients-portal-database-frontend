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

const DistributionRev = () => {
  const clients = useClients();
  const [selectedClientId, setSelectedClientId] = useState();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState();

  useEffect(() => {
    if (!selectedClientId) return;
    setLoading(true);
    axios
      .get(`${server}/v1/clients/${selectedClientId}/dist-rev`)
      .then((response) => {
        setData(response.data.distributionRev);
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
        const res = await axios.put(
          `${server}/v1/clients/${selectedClientId}/dist-rev/${editItem._id}`,
          values
        );
        setData(res.data.distRev.distributionRev);
        message.success('Distribution updated successfully');
      } else {
        const res = await axios.post(
          `${server}/v1/clients/${selectedClientId}/dist-rev`,
          values
        );
        setData(res.data.distRev.distributionRev);
        message.success('Distribution added successfully');
      }
      return true;
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
      return false;
    }
  };

  const handleDelete = () =>
    new Promise((resolve) => {
      resolve(null);
    });

  return (
    <>
      <Header
        title="Distribution Revenue"
        subtitle="Add/Edit Distribution Revenue"
      />

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

export default DistributionRev;
