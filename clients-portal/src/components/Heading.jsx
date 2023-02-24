import { Typography } from 'antd';
import styled from 'styled-components';

const { Text, Title } = Typography;

const Wrapper = styled.div`
  padding: 12px 24px;
  background: #fff;

  h3 {
    margin-bottom: 4px;
  }

  span {
    color: #ff9900;
  }
`;

const Heading = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Title level={3}>{title}</Title>
      <Text>{subtitle}</Text>
    </Wrapper>
  );
};

export default Heading;
