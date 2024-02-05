import React from "react";
import InvoiceEntry from "./screenComponents/InvoiceEntry";
import { Button } from "@mui/material";


const Invoice = () => {
  return (
    <div >
      <h2 style={{ color: "white", lineHeight: "2px" }}>Invoice</h2>
      <p style={{ color: "white" }}>Invoicing has never been easier!</p>
      <div>
      <InvoiceEntry />
      </div>
      <div style={{display: 'flex', marginTop: 10, justifyContent: 'flex-end'}}>
        <Button variant="outlined" onClick={() => {}}>Generate Invoice</Button>
      </div>
    </div>
  );
};

export default Invoice;
