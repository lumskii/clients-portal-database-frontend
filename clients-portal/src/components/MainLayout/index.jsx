import { useState } from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import Header from './Header';

const Content = styled.div`
  min-height: 100vh;
  margin-left: ${({ isOpen }) => (isOpen ? 280 : 90)}px;
  background-color: #f5f5f5;
  transition: margin-left 0.4s;

  > main {
    padding: 32px;
  }
`;

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <Content isOpen={sidebarOpen}>
        <Header />
        <main>{children}</main>
      </Content>
    </>
  );
};

export default MainLayout;
