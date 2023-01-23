import { useState } from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import Header from './Header';

const Main = styled.main`
  min-height: 100vh;
  margin-left: ${({ isOpen }) => (isOpen ? 280 : 90)}px;
  background-color: #f5f5f5;
  transition: margin-left 0.4s;
`;

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <Main isOpen={sidebarOpen}>
        <Header />
        {children}
      </Main>
    </>
  );
};

export default MainLayout;
