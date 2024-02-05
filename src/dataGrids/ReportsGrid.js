import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import generatedData from './sampleReportData';
import { Card } from '@mui/material';


const columns = [
  { field: 'id', headerName: 'SR.NO', width: 90},
  { field: 'ITEMS', headerName: 'ITEMS', flex: 1 },
  { field: 'SUPPLIER_NAME', headerName: 'SUPPLIAN NAME', flex: 1 },
  { field: 'Date', headerName: 'Date', type:"string", flex: 1 },
  { field: 'P.ID', headerName: 'P.ID', flex: 1 },
  { field: 'SIZE', headerName: 'SIZE', flex: 1 },
  { field: 'QTY', headerName: 'QTY', flex: 1 },
  { field: 'W/KG', headerName: 'W/KG', flex: 1 },
  { field: 'T.W', headerName: 'T.W', flex: 1 },
  { field: 'Rft', headerName: 'Rft', flex: 1 },
  { field: '%AGE', headerName: '%AGE', flex: 1 },
  { field: 'P.PR/UNIT', headerName: 'P.PR/UNIT', flex: 1 },
  { field: 'L.EXP', headerName: 'L.EXP', flex: 1 },
  { field: 'TOTAL', headerName: 'TOTAL', flex: 1 },
];


export default function QuickFilteringGrid() {
 

  return (
    <Box sx={{ height: 650, width: 1 }}>
      <Card
      sx={{
        height: "100%",
        minWidth: "400px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        width: 1,
        
      }}
      variant="none"
    >
      <DataGrid
        getRowId={(row) => row.id}
        columns={columns}
        rows={generatedData}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        sx={{fontFamily: "Gabarito, sans-serif", fontSize: "0.875rem"}}
      />
      </Card>
    </Box>
  );
}
