import { useState } from 'react';
import { sortString } from './utils';
import Table from './table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: sortString('name'),
  },
];

const Report = ({ value }) => {
  const [data, setData] = useState();

  return (
    <Table columns={columns} dataSource={data} loading={!data} rowKey="_id" />
  );
};

export default Report;
