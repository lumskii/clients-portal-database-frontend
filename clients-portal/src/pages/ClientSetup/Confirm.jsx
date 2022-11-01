import { Comment } from '@mui/icons-material'
import { IconButton, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { useState } from 'react';

export default function Confirm({details}) {
    const primary = [
        "Film Name:",
        "Producer's Email",
        "Film's Code",
        "Distribution Type",
        "Right of Sale",
        "CAMA Involved",
        "Country of Law",
        "State of Law",
        "Effective Date",
        "Date of Signature",
        "Renewal Date",
        "Renewal Expiration",
        "Expense Type",
        "Customized Expenses",
        "Film Expenses",
        "Gross Corridor %",
        "Gross Corridor Rights",
        "Producer Payment Terms",
        "Distribution Fee %",
        "Income Reserves%",
        "Accounting Terms",
        "Film Poster",
    ];

  return (
    <List sx={{ width: '450px', maxWidth: '500px', bgcolor: 'background.paper' }}>
        {primary.map((data) => (
            <ListItem 
                key={data}>
                <ListItemText primary={`${data}`} />
            </ListItem>
        ))}
        <ul className="results">
        <li>{`${details.filmName}`}</li>
        <li>{`${details.producersEmail}`}</li>
        <li>{`${details.filmsCode}`}</li>
        <li>{`${details.distributionType}`}</li>
        <li>{`${details.rightSale}`}</li>
        <li>{`${details.cama}`}</li>
        <li>{`${details.countryLaw}`}</li>
        <li>{`${details.stateLaw}`}</li>
        <li>{`${details.effectiveDate}`}</li>
        <li>{`${details.dateSignature}`}</li>
        <li>{`${details.renewalDate}`}</li>
        <li>{`${details.renewalExpiration}`}</li>
        <li>{`${details.expenseCap}`}</li>
        <li>{`${details.customExp}`}</li>
        <li>{`${details.expense}`}</li>
        <li>{`${details.grossCor}`}</li>
        <li>{`${details.grossCorRights}`}</li>
        <li>{`${details.producerPay}`}</li>
        <li>{`${details.distributionFee}`}</li>
        <li>{`${details.incomeReserves}`}</li>
        <li>{`${details.accountingTerms}`}</li>
        <li>{`${details.avatar}`}</li>
        </ul>
    </List>
  )
}
