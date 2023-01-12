import React, { useEffect, useState } from 'react'
import { tokens } from '../../theme';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import { Box, useTheme } from '@mui/material';
import { server } from '../../constance';
import { useParams } from 'react-router-dom';

export default function RunReport({
    selectedTitle,
    setTableGrid,
    setCompany,
    company,
    }) {
        const theme = useTheme();
        const colors = tokens(theme.palette.mode);
        const [loading, setLoading] = useState(false);
        const clientId = selectedTitle.key;

        console.log(clientId);

        useEffect(() => {
            const handleRun = async (error) => {
                setLoading(true);
                const response = await axios.get(`${server}/v1/clients/${clientId}/sales`);

                if (response && response.success && response.status === 200) {
                setLoading(false);
                console.log(response.sales.sales);
                let allSales = response.sales.sales.map((sale) => ({
                    id: sale._id,
                    cName: sale.cName,
                    dealCD: sale.dealCD,
                    dealED: sale.dealED,
                }));
    
                setCompany(allSales);
                setTableGrid(true);
                } else {
                    console.log("unable to fetch", error);
                }
            };
    
            handleRun();
        }, [])
        
        const columns = [
            {
            field: "cName",
            headerName: "Company Name",
            width: 300,
            },
            { field: "dealED", headerName: "Deal Entered Date", width: 200 },
            { field: "dealCD", headerName: "Deal Closed Date", width: 200 },
        ];

        console.log(columns);

        return (
            <>
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },
                }}
            >
                <DataGrid
                rows={company}
                columns={columns}
                components={{
                    Toolbar: GridToolbar,
                }}
                />
            </Box>
            </>
        );
}
