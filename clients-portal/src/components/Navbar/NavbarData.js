import React from 'react'

import {
    DashBoard,
    UserPlus,
    UserEdit,
    UsersCog,
    DistributeHori,
    HandsHelp,
    Gear,
    PayMoney,
    PointOfSale,
} from './NavbarElements'

export const linksArray = [
    {
      label: "Dashboard",
      icon: <DashBoard />,
      to: "/",
      notification: "Dashboard",
      cName: 'nav-text' 
    },
    {
      label: "Set Up New Client",
      icon: <UserPlus />,
      to: "/client-setup",
      notification: "Set up new client",
      cName: 'nav-text' 
    },
    {
      label: "Edit a Client",
      icon: <UserEdit />,
      to: "/edit-a-client",
      notification: "Edit a Client",
      cName: 'nav-text' 
    },
    {
      label: "Bulk Updates",
      icon: <UsersCog />,
      to: "/bulk-updates",
      notification: "Bulk Updates",
      cName: 'nav-text' 
    },
    {
      label: "Add Expenses",
      icon: <PayMoney />,
      to: "/add-expenses",
      notification: "Add Expenses",
      cName: 'nav-text' 
    },
    {
      label: "Add/Edit Sales Revenue",
      icon: <PointOfSale />,
      to: "/add-edit-sales",
      notification: "Add/Edit Sales Revenue",
      cName: 'nav-text' 
    },
    {
      label: "Add/Edit Distribution Revenue",
      icon: <DistributeHori />,
      to: "/add-edit-distribution-revenue",
      notification: "Add/Edit Distribution Revenue",
      cName: 'nav-text' 
    },
  ];

  export const secondaryLinksArray = [
    {
      label: "Help & Center",
      icon: <HandsHelp />,
      to: "/help-center",
      notification: "Help & Center",
      cName: 'nav-text' 
    },
    {
      label: "Settings",
      icon: <Gear />,
      to: "/settings",
      notification: "Settings",
      cName: 'nav-text' 
    },
  ];