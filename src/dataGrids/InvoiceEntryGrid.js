import React, { useState } from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import ItemModal from "../components/screenComponents/InvoiceModal";
import { AddBoxRounded } from "@mui/icons-material";
import "../components/componentStyles.css";
import { Card } from "@mui/material";

function EditableDataGrid() {
  const [rows, setRows] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "items", headerName: "Items", flex: 1, editable: true },
    { field: "pId", headerName: "P.Id", flex: 1, editable: true },
    { field: "size", headerName: "Size", flex: 1, editable: true },
    { field: "quantity", headerName: "Quantity", flex: 1, editable: true },
    { field: "tW", headerName: "T.W", flex: 1, editable: true },
    { field: "rft", headerName: "RFT", flex: 1, editable: true },
    { field: "unitPrice", headerName: "Unit Price", flex: 1, editable: true },
    { field: "amount", headerName: "Amount", flex: 1, editable: true },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <Button size="small" onClick={() => handleEdit(params.row)}>
            Edit
          </Button>
          <Button size="small" color="error" onClick={() => handleDelete(params.row.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const handleAddRow = () => {
    setModalData({});
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!modalData.items || !modalData.pId) {
      alert("Items and P.Id are required fields.");
      return;
    }

    if (editingRow !== null) {
      const updatedRows = rows.map((row) => (row.id === editingRow ? modalData : row));
      setRows(updatedRows);
    } else {
      const newRow = { id: rows.length + 1, ...modalData };
      setRows((prevRows) => [...prevRows, newRow]);
    }

    setIsModalOpen(false);
    setEditingRow(null);
  };

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleEdit = (row) => {
    setModalData(row);
    setEditingRow(row.id);
    setIsModalOpen(true);
  };

  return (
    <Card
      sx={{
        height: "100%",
        minWidth: "400px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        width: 1,
        backgroundColor: "transparent",
      }}
      variant="none"
    >
      <DataGrid
        sx={{ fontFamily: "Gabarito, sans-serif", fontSize: "0.875rem", backgroundColor: "#0D0D0E" }}
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        cellFocusMode="click"
      />
      <ItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        editingRow={editingRow}
        modalData={modalData}
        onInputChange={(field, value) => setModalData((prevData) => ({ ...prevData, [field]: value }))}
      />
      <Button
        variant="none"
        sx={{
          textTransform: "none",
          gap: "5px",
          backgroundColor: "white",
          color: "black",
          mt: 2,
        }}
        onClick={handleAddRow}
      >
        Add Item
        <AddBoxRounded />
      </Button>
    </Card>
  );
}

export default EditableDataGrid;
