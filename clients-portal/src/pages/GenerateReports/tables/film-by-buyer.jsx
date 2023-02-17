import { useEffect, useState } from 'react';
import { getData, sortString } from './utils';
import Table from './table';

const columns = [
  {
    title: 'Company Name',
    dataIndex: 'cName',
    sorter: sortString('cName'),
  },
];

const Report = ({ value }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getData(`sales?client=${value}`)
      .then((data) => data.sales)
      .then(setData);
  }, [value]);

  return (
    <Table columns={columns} dataSource={data} loading={!data} rowKey="_id" />
  );
};

export default Report;
