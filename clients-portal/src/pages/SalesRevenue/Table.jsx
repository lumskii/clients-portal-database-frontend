import { Popconfirm, Space, Table as AntTable } from 'antd';
import styled from 'styled-components';

import {
  sortString,
  sortNumber,
  sortDate,
  formatNumber,
  formatDate,
} from '../../utils';

const Button = styled.a``;

const Table = ({ loading, data, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'cName',
      key: 'cName',
      sorter: sortString('cName'),
    },
    {
      title: 'Territory',
      dataIndex: 'territory',
      key: 'territory',
      width: 180,
      sorter: sortString('territory'),
    },
    {
      title: 'Sales Amount',
      dataIndex: 'salesAmount',
      key: 'salesAmount',
      align: 'right',
      sorter: sortNumber('salesAmount'),
      render: formatNumber,
    },
    {
      title: 'Received Amount',
      dataIndex: 'receivedAmount',
      key: 'receivedAmount',
      align: 'right',
      sorter: sortNumber('receivedAmount'),
      render: formatNumber,
    },
    {
      title: 'Deal Entered Date',
      dataIndex: 'dealED',
      key: 'dealED',
      align: 'right',
      sorter: sortDate('dealED'),
      render: formatDate('yyyy-MM-dd'),
    },
    {
      title: 'Deal Closed Date',
      dataIndex: 'dealCD',
      key: 'dealCD',
      align: 'right',
      sorter: sortDate('dealCD'),
      render: formatDate('yyyy-MM-dd'),
    },
    {
      title: 'Actions',
      key: 'actions',
      align: 'right',
      render: (_, record) => (
        <Space size={16}>
          <Button type="link" onClick={() => onEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            placement="topRight"
            title="Are you sure to delete this?"
            okText="Delete"
            okButtonProps={{ danger: true }}
            onConfirm={() => onDelete(record)}
          >
            <Button type="link">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <AntTable
      loading={loading}
      dataSource={data}
      columns={columns}
      rowKey="_id"
    />
  );
};

export default Table;
