import React from 'react';

import {
  DistributeHori,
  UserPlus,
  Report,
  UsersCog,
  PayMoney,
  PointOfSale,
} from './DashboardElements';

export const dashLinks = [
  {
    id: 0,
    to: '/clients',
    icon: <UserPlus />,
    label: 'Clients',
  },
  {
    id: 1,
    to: '/edit-a-client',
    icon: <Report />,
    label: 'Generate Reports',
  },
  {
    id: 2,
    to: '/',
    icon: <UsersCog />,
    label: 'Bulk Updates',
  },
  {
    id: 3,
    to: '/add-expenses',
    icon: <PayMoney />,
    label: 'Add Expenses',
  },
  {
    id: 4,
    to: '/sales-revenue',
    icon: <PointOfSale />,
    label: 'Sales Revenue',
  },
  {
    id: 5,
    to: '/distribution-revenue',
    icon: <DistributeHori />,
    label: 'Distribution Revenue',
  },
];
