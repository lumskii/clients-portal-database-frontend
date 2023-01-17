import React from 'react';

import {
  DashBoard,
  UserPlus,
  UsersCog,
  DistributeHori,
  HandsHelp,
  Gear,
  PayMoney,
  PointOfSale,
  Report,
} from './NavbarElements';

export const linksArray = [
  {
    id: 0,
    label: 'Dashboard',
    icon: <DashBoard />,
    to: '/',
    notification: 'Dashboard',
    cName: 'nav-text',
  },
  {
    id: 1,
    label: 'Clients',
    icon: <UserPlus />,
    to: '/clients',
    notification: 'clients',
    cName: 'nav-text',
  },
  {
    id: 2,
    label: 'Add Expenses',
    icon: <PayMoney />,
    to: '/add-expenses',
    notification: 'Add Expenses',
    cName: 'nav-text',
  },
  {
    id: 3,
    label: 'Sales Revenue',
    icon: <PointOfSale />,
    to: '/add-edit-sales',
    notification: 'Sales Revenue',
    cName: 'nav-text',
  },
  {
    id: 4,
    label: 'Distribution Revenue',
    icon: <DistributeHori />,
    to: '/distribution-revenue',
    notification: 'Distribution Revenue',
    cName: 'nav-text',
  },
];

export const secondaryLinksArray = [
  {
    id: 0,
    label: 'Generate Reports',
    icon: <Report />,
    to: '/reports',
    notification: 'Generate Reports',
    cName: 'nav-text',
  },
  {
    id: 1,
    label: 'Bulk Updates',
    icon: <UsersCog />,
    to: '/bulk-updates',
    notification: 'Bulk Updates',
    cName: 'nav-text',
  },
];

export const thirdLinksArray = [
  {
    id: 0,
    label: 'Help & Center',
    icon: <HandsHelp />,
    to: '/help-center',
    notification: 'Help & Center',
    cName: 'nav-text',
  },
  {
    id: 1,
    label: 'Settings',
    icon: <Gear />,
    to: '/settings',
    notification: 'Settings',
    cName: 'nav-text',
  },
];
