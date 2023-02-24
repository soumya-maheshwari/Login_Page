import React, { useState } from "react";
import { TextField } from "@mui/material";
const Password = () => {
  const [pass, setPass] = useState("");
  return (
    <div>
      <TextField label="password" type="password" variant="outlined" />
    </div>
  );
};

export default Password;
