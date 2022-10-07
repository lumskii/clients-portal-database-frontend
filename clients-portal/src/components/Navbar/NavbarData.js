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
      label: "Clients",
      icon: <UserPlus />,
      to: "/client-setup",
      notification: "clients",
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
      label: "Sales Revenue",
      icon: <PointOfSale />,
      to: "/add-edit-sales",
      notification: "Sales Revenue",
      cName: 'nav-text' 
    },
    {
      label: "Distribution Revenue",
      icon: <DistributeHori />,
      to: "/distribution-revenue",
      notification: "Distribution Revenue",
      cName: 'nav-text' 
    },
  ];

  export const secondaryLinksArray = [
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
    }
  ]

  export const thirdLinksArray = [
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