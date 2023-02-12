import { useEffect, useState } from 'react';
import { getData, sortString } from './utils';
import Table from './table';

const columns = [
  {
    title: 'Film by Genre',
    dataIndex: 'filmName',
    sorter: sortString('filmName'),
  },
];

const Report = ({ value }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getData(`sales?genre=${value}`)
      .then((data) => data.clients)
      .then(setData);
  }, [value]);

  return (
    <Table columns={columns} dataSource={data} loading={!data} rowKey="_id" />
  );
};

export default Report;
