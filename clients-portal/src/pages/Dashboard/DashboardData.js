import React from 'react'

import {
     DistributeHori,
     UserPlus,
     UserEdit,
     UsersCog,
     PayMoney,
     PointOfSale
    } from "./DashboardElements";

export const dashLinks = [
    {
        to:"/client-setup",
        icon:<UserPlus />,
        label:"Set Up New Client"
    },
    {
        to:"/",
        icon:<UserEdit />,
        label:"Edit a Client"
    },
    {
        to:"/",
        icon:<UsersCog />,
        label:"Bulk Updates"
    },
    {
        to:"",
        icon:<PayMoney />,
        label:"Add Expenses"
    },
    {
        to:"/add-edit-sales",
        icon:<PointOfSale />,
        label:"Add/Edit Sales Revenue"
    },
    {
        to:"",
        icon:<DistributeHori />,
        label:"Add/Edit Distribution Revenue"
    }
]