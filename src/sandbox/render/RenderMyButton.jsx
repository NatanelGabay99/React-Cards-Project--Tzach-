import { Button } from "@mui/material";
import React, { memo } from "react";

function RenderMyButton({ children, handleClick }) {
  console.log("My button is rendered " + children);
  return (
    <Button onClick={handleClick} variant="outlined">
      {children}
    </Button>
  );
}

export default memo(RenderMyButton);