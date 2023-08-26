import { Button } from "@mui/material";
import { useState } from "react";

const CustomButton = ({
  text,
  startIcon,
  endIcon,
  bgColor,
  color,
  onHoverColor,
}) => {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        color: color,
        backgroundColor: bgColor,
        fontWeight: 600,
        "&:hover": {
          backgroundColor: onHoverColor,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
