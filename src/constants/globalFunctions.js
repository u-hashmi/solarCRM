import { TextField } from "@mui/material";

const getTextField = (id, label, value, onChange, type = "text", disabled = false) => {
    return (
      <TextField
        id={id}
        label={label}
        variant="filled"
        value={value || ""}
        onChange={(e) => onChange(id, e.target.value)}
        type={type}
        disabled={disabled}
      />
    );
  };

  export { getTextField };