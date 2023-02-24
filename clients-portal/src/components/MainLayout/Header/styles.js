import styled from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  width: 200px;
  align-items: center;

  input {
    width: 100%;
    height: 30px;
    padding: 0 8px 0 32px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    background-color: #f5f5f5;
    outline: 0;
  }

  svg {
    position: absolute;
    left: 10px;
    font-size: 14px;
    opacity: 0.5;
  }
`;

export const RightMenus = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Item = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;

  svg {
    font-size: 16px;
  }
`;

export const Badge = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  top: -8px;
  right: -8px;
  background-color: red;
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  line-height: 1;
`;
