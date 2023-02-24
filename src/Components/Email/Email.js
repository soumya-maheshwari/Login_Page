import React, { useState } from "react";
import { TextField } from "@mui/material";
const Email = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <TextField
        label="email"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Email;
