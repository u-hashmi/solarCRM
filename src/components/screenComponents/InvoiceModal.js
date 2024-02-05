// ItemModal.js
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Item } from "../../constants/globalConstants";
import { Card, Divider, Stack } from "@mui/material";
import { getTextField } from "../../constants/globalFunctions";

const ItemModal = ({ isOpen, onClose, onSave, editingRow, modalData, onInputChange }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Card
        variant="outlined"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          gap: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ p: 2, m: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {editingRow !== null ? "Edit Item" : "Add Item"}
            </Typography>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            Add or edit items to invoice.
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
          {getTextField("items", "Item Name", modalData.items, onInputChange)}
          {getTextField("pId", "P.Id", modalData.pId, onInputChange, "number")}
          <Item>
            {getTextField("size", "Size", modalData.size, onInputChange, "number")}
            {getTextField("quantity", "Quantity", modalData.quantity, onInputChange, "number")}
            {getTextField("tW", "T.W", modalData.tW, onInputChange, "number")}
          </Item>
          <Item>
            {getTextField("rft", "RFT", modalData.rft, onInputChange, "number")}
            {getTextField("unitPrice", "Unit Price", modalData.unitPrice, onInputChange, "number")}
            {getTextField("amount", "Amount", modalData.amount, onInputChange, "number")}
          </Item>
        </Stack>
        <Typography variant="h6"></Typography>
        <Button variant="contained" onClick={onSave} sx={{ m: 2 }}>
          Save
        </Button>
      </Card>
    </Modal>
  );
};

export default ItemModal;
