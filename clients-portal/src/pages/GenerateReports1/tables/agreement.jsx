import { useState } from 'react';
import { Table } from 'antd';
import { sortString } from '../../../utils';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: sortString('name'),
  },
];

const Report = ({ value }) => {
  const [data, setData] = useState([]);

  return (
    <Table columns={columns} dataSource={data} loading={!data} rowKey="_id" />
  );
};

export default Report;
