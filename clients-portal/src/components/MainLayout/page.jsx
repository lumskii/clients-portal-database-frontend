import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Text, Title } = Typography;

const Page = ({ title, subtitle, children }) => {
  return (
    <>
      <div style={{ background: '#fff', padding: '12px 24px' }}>
        <Title level={3} style={{ marginBottom: 2 }}>
          {title}
        </Title>
        <Text style={{ color: '#ff9900' }}>{subtitle}</Text>
      </div>
      <Content style={{ padding: '24px' }}>{children}</Content>
    </>
  );
};

export default Page;
