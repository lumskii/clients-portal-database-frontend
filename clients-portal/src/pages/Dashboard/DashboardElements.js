import styled from 'styled-components';
import {MdOutlinePointOfSale} from 'react-icons/md';
import {FaUserPlus, FaUserEdit, FaUsersCog} from 'react-icons/fa';
import {GiPayMoney} from 'react-icons/gi';
import {BsDistributeHorizontal} from 'react-icons/bs';
import {CgMore} from 'react-icons/cg'

export const DashBoard = styled.div`
    background: #f5f5f5;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

export const PageContainer = styled.div`
    flex: 4;
    display: flex;
`

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
    
`
export const UserPlus = styled(FaUserPlus)`
  height: 100px;
  min-width: 100px;
  margin: 10px auto;
  color: #ff9900;
`
export const UserEdit = styled(FaUserEdit)`
  height: 100px;
  min-width: 100px;
  margin: 10px auto;
  color: #ff9900;
`
export const UsersCog = styled(FaUsersCog)`
    height: 100px;
    min-width: 100px;
    margin: 10px auto;
    color: #ff9900;
`
export const PayMoney = styled(GiPayMoney)`
    height: 100px;
    min-width: 100px;
    margin: 10px auto;
    color: #ff9900;
`
export const PointOfSale = styled(MdOutlinePointOfSale)`
    height: 100px;
    min-width: 100px;
    margin: 10px auto;
    color: #ff9900;
`
export const DistributeHori = styled(BsDistributeHorizontal)`
    height: 100px;
    min-width: 100px;
    margin: 10px auto;
    color: #ff9900;
`

export const More = styled(CgMore)`
     height: 30px;
     width: 30px;
`

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
`

export const StatTemplate = styled.div`

`