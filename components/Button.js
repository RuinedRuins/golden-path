import { Button } from "@mui/material";

const CustomButton = ({ text, startIcon, endIcon }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
