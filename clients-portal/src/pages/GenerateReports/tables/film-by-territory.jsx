import { useEffect, useState } from 'react';
import { sortString } from '../../../utils';
import { getData } from './utils';
import Table from './table';

const columns = [
  {
    title: 'Film Name',
    dataIndex: 'filmName',
    key: 'filmName',
    sorter: sortString('filmName'),
  },
];

const Report = ({ value }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getData(`sales?territory=${value}`)
      .then((data) => data.clients)
      .then(setData);
  }, [value]);

  return (
    <Table columns={columns} dataSource={data} loading={!data} rowKey="_id" />
  );
};

export default Report;
