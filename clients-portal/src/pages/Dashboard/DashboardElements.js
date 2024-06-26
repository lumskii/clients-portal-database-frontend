import styled from 'styled-components';
import { MdOutlinePointOfSale } from 'react-icons/md';
import { FaUserPlus, FaUsersCog } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import { BsDistributeHorizontal, BsFileSpreadsheet } from 'react-icons/bs';
import { CgMore } from 'react-icons/cg';

export const PageContainer = styled.div`
  flex: 4;
  display: flex;
`;

export const PageTemplate = styled.div`
  margin: 50px 20px;
  background: #fefefe;
  border-radius: 5px;
  overflow-x: hidden;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  flex: 2;
  height: 650px;
  position: relative;
  display: flex;
  align-items: flex-end;

  &::-webkit-scrollbar {
    width: 5px;
    background: #ff9900;
    border-radius: 2.5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9900;
    border-radius: 1.5px;
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #bcbcbc;
  }

  &::-webkit-scrollbar-track-thumb {
    background: #bcbcbc;
  }

  &::-webkit-scrollbar-track:hover {
    background: #bcbc;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ff99;
  }
`;

export const PageTemplate2 = styled.div`
  margin: 50px 20px;
  background: #fefefe;
  border-radius: 5px;
  overflow-x: hidden;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  flex: 2;
  height: 800px;
  width: 650px;
  position: relative;
  display: flex;
  align-items: flex-end;

  &::-webkit-scrollbar {
    width: 5px;
    background: #ff9900;
    border-radius: 2.5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9900;
    border-radius: 1.5px;
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #bcbcbc;
  }

  &::-webkit-scrollbar-track-thumb {
    background: #bcbcbc;
  }

  &::-webkit-scrollbar-track:hover {
    background: #bcbc;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ff99;
  }
`;

export const PageTemplate3 = styled.div`
  margin: 50px 20px;
  background: #fefefe;
  border-radius: 5px;
  overflow-x: hidden;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  flex: 2;
  height: 800px;
  width: 750px;
  position: relative;
  display: grid;
  align-items: flex-end;
  padding-bottom: 30px;

  &::-webkit-scrollbar {
    width: 5px;
    background: #ff9900;
    border-radius: 2.5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff9900;
    border-radius: 1.5px;
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #bcbcbc;
  }

  &::-webkit-scrollbar-track-thumb {
    background: #bcbcbc;
  }

  &::-webkit-scrollbar-track:hover {
    background: #bcbc;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ff99;
  }
`;

export const UserPlus = styled(FaUserPlus)`
  height: 100px;
  min-width: 100px;
  margin: 10px auto;
  color: #ff9900;
`;
export const Report = styled(BsFileSpreadsheet)`
  height: 100px;
  min-width: 100px;
  margin: 10px auto;
  color: #ff9900;
`;
export const UsersCog = styled(FaUsersCog)`
  height: 100px;
  min-width: 100px;
  margin: 10px auto;
  color: #ff9900;
`;
export const PayMoney = styled(GiPayMoney)`
  height: 100px;
  min-width: 100px;
  margin: 10px auto;
  color: #ff9900;
`;
export const PointOfSale = styled(MdOutlinePointOfSale)`
  height: 100px;
  min-width: 100px;
  margin: 10px auto;
  color: #ff9900;
`;
export const DistributeHori = styled(BsDistributeHorizontal)`
  height: 100px;
  min-width: 100px;
  margin: 10px auto;
  color: #ff9900;
`;

export const More = styled(CgMore)`
  height: 30px;
  width: 30px;
`;

export const StatArea = styled.div`
  position: absolute;
  width: content-fit;
  height: 80px;
  font-size: 1.2rem;
  background: #000;
  color: #fff;
  top: 50px;
  right: 40px;
  padding: 20px;
  margin: auto 20px;
`;
