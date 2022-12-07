import React from 'react'

import {
     DistributeHori,
     UserPlus,
     Report,
     UsersCog,
     PayMoney,
     PointOfSale
    } from "./DashboardElements";

export const dashLinks = [
    {
        to:"/clients",
        icon:<UserPlus />,
        label:"Clients"
    },
    {
        to:"/edit-a-client",
        icon:<Report />,
        label:"Generate Reports"
    },
    {
        to:"/",
        icon:<UsersCog />,
        label:"Bulk Updates"
    },
    {
        to:"/add-expenses",
        icon:<PayMoney />,
        label:"Add Expenses"
    },
    {
        to:"/add-edit-sales",
        icon:<PointOfSale />,
        label:"Sales Revenue"
    },
    {
        to:"/distribution-revenue",
        icon:<DistributeHori />,
        label:"Distribution Revenue"
    }
]