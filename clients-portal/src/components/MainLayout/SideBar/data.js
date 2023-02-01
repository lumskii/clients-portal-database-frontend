import { MdOutlineDashboard, MdOutlinePointOfSale } from 'react-icons/md';
import { FaUserPlus, FaUsersCog, FaHandsHelping } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import { BsDistributeHorizontal, BsFileSpreadsheet } from 'react-icons/bs';
import { VscGear } from 'react-icons/vsc';

export const menus = [
  {
    label: 'Main Menu',
    items: [
      {
        label: 'Dashboard',
        icon: MdOutlineDashboard,
        to: '/',
      },
      {
        label: 'Clients',
        icon: FaUserPlus,
        to: '/clients',
      },
      {
        label: 'Add Expenses',
        icon: GiPayMoney,
        to: '/add-expenses',
      },
      {
        label: 'Sales Revenue',
        icon: MdOutlinePointOfSale,
        to: '/add-edit-sales1',
      },
      {
        label: 'Distribution Revenue',
        icon: BsDistributeHorizontal,
        to: '/distribution-revenue',
      },
    ],
  },
  {
    label: 'Edit',
    items: [
      {
        label: 'Generate Reports',
        icon: BsFileSpreadsheet,
        to: '/reports',
      },
      {
        label: 'Bulk Updates',
        icon: FaUsersCog,
        to: '/bulk-updates',
      },
    ],
  },
  {
    label: 'Help',
    items: [
      {
        label: 'Help & Center',
        icon: FaHandsHelping,
        to: '/help-center',
      },
      {
        label: 'Settings',
        icon: VscGear,
        to: '/settings',
      },
    ],
  },
];
