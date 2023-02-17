import { Popconfirm, Space, Table as AntTable } from 'antd';
import styled from 'styled-components';

import {
  sortString,
  sortNumber,
  sortDate,
  formatNumber,
  formatDate,
} from '../../utils';

const StyledTable = styled(AntTable)`
  th.ant-table-cell {
    background: #ff9900 !important;
  }
`;

const Button = styled.a``;

const Table = ({ loading, data, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Company Type',
      dataIndex: 'cType',
      key: 'cType',
      sorter: sortString('cType'),
    },
    {
      title: 'Date Expensed',
      dataIndex: 'dateExp',
      key: 'dateExp',
      sorter: sortDate('dateExp'),
      render: formatDate('yyyy-MM-dd'),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: sortNumber('amount'),
      render: formatNumber,
    },
    {
      title: 'Description',
      dataIndex: 'describe',
      key: 'describe',
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
    <StyledTable
      loading={loading}
      dataSource={data}
      columns={columns}
      rowKey="_id"
    />
  );
};

export default Table;
