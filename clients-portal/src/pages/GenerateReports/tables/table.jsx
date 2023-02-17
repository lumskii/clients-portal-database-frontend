import { Table as AntTable } from 'antd';
import styled from 'styled-components';

const StyledTable = styled(AntTable)`
  th.ant-table-cell {
    background: #ff9900 !important;
  }
`;

const Table = (props) => {
  return <StyledTable {...props} />;
};

export default Table;
