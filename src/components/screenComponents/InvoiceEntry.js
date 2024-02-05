import { Card, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import "../componentStyles.css";
import InvoiceEntryGrid from "../../dataGrids/InvoiceEntryGrid";
import { Box, Stack } from "@mui/system";

import { Item } from '../../constants/globalConstants';
import { getTextField } from "../../constants/globalFunctions";


const InvoiceEntry = () => {
  const adminName = "Hira Hashmi";
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'
  const [invoiceData, setInvoiceData] = useState({
    id: 0,
    invoiceTo: "",
    invoiceNo: 0,
    date: formattedDate,
    gatePassNo: 0,
    recepientBank: "",
    recepientAccount: "",
    senderBank: "",
    senderAccount: "",
    subTotal: 0,
    loadingExpense: 0,
    carriageExpense: 0,
    total: 0
  });
  
  const onInputChange = (id, value) => {
    setInvoiceData({ ...invoiceData, [id]: value });
  };


  return (
    <div className="rowToCol">
      <Box variant="none" sx={{ pt: 1, backgroundColor: 'transparent'}}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{gap: '10px'}}
          
        >
          <Item>
            {getTextField("invoiceTo", "Invoice To", invoiceData.invoiceTo, onInputChange)}
          </Item>
            {getTextField("invoiceNo", "Invoice No#", invoiceData.invoiceNo, onInputChange, "number")}
            {getTextField("date", "Date", invoiceData.date, onInputChange, "date")}
            {getTextField("gatePassNo", "Gate Pass No#", invoiceData.gatePassNo, onInputChange, "number")}
        </Stack>
      </Box>
      <Box style={{ display: "flex", flexDirection: "row", gap: "10px" }} className="rowToCol">
        <Card
          variant="none" sx={{ mt: 2, flex: 1, alignContent: "space-between", display: 'flex', backgroundColor: 'transparent'}}
        >
          <InvoiceEntryGrid />
        </Card>
        <Card variant="outlined" sx={{ mt: 2 }}>
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                Summary
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="body2">
              Thank you for your business.
              <Typography variant="h6" color="text.secondary" component="div">
                {adminName}
              </Typography>
              <Typography color="plum" component="div">
                Administrator
              </Typography>
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="stretch"
            sx={{ display: "flex", p: 2, flex: 1, width: 1, gap: 2 }}
            spacing={1}
          >
            <Item>
              {getTextField("recepientBank", "Recipient Bank", invoiceData.recepientBank, onInputChange)}
              {getTextField("recepientAccount", "Recipient Account", invoiceData.recepientAccount, onInputChange, "number")}
            </Item>
            <Item>
              {getTextField("senderBank", "Sender Bank", invoiceData.senderBank, onInputChange)}
              {getTextField("senderAccount", "Sender Account", invoiceData.senderAccount, onInputChange, "number")}
            </Item>
              {getTextField("subTotal", "SubTotal", invoiceData.subTotal, onInputChange, "number", true)}
              {getTextField("loadingExpense", "Loading Expense", invoiceData.loadingExpense, onInputChange, "number")}
              {getTextField("carriageExpense", "Carriage Expense", invoiceData.carriageExpense, onInputChange, "number")}
              {getTextField("total", "Total", invoiceData.total, onInputChange, "number", true)}
          </Stack>
        </Card>
      </Box>
    </div>
  );
};

export default InvoiceEntry;
