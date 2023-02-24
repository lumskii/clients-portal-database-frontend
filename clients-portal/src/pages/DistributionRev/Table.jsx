import { Popconfirm, Space, Table as AntTable } from 'antd';
import styled from 'styled-components';

import { sortString, sortNumber, formatNumber } from '../../utils';

const StyledTable = styled(AntTable)`
  th.ant-table-cell {
    background: #ff9900 !important;
  }
`;

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
      title: 'Company Type',
      dataIndex: 'cType',
      key: 'cType',
      sorter: sortString('cType'),
    },
    {
      title: 'Rights Type',
      dataIndex: 'rType',
      key: 'rType',
      sorter: sortString('rType'),
    },
    {
      title: 'Territory',
      dataIndex: 'territory',
      key: 'territory',
      sorter: sortString('territory'),
    },
    {
      title: 'Revenue Amount',
      dataIndex: 'revenueAmount',
      key: 'revenueAmount',
      sorter: sortNumber('revenueAmount'),
      render: formatNumber,
    },
    {
      title: 'Received Amount',
      dataIndex: 'receivedAmount',
      key: 'receivedAmount',
      sorter: sortNumber('receivedAmount'),
      render: formatNumber,
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
