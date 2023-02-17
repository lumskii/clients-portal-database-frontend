import { useEffect, useState } from 'react';
import { getData, sortString } from './utils';
import Table from './table';

const columns = [
  {
    title: 'Film Name',
    dataIndex: 'filmName',
    sorter: sortString('filmName'),
  },
  {
    title: 'Revenue Amount',
    dataIndex: 'revenueAmount',
    sorter: (a, b) => a - b,
  },
];

const Report = ({ value }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getData(`revenue?territory=${value}`)
      .then((data) =>
        data.clients.map((item) => ({
          ...item,
          revenueAmount: item.distributionRev.find(
            (rev) => rev.territory === value || rev.platform === value
          ).revenueAmount,
        }))
      )
      .then(setData);
  }, [value]);

  return (
    <Table columns={columns} dataSource={data} loading={!data} rowKey="_id" />
  );
};

export default Report;
