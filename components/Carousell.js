import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default React.forwardRef(function Carousell({ images: props }, ref) {
  console.log(ref);
  return (
    <Carousel
      ref={ref} // Use the ref that's being passed from the parent component
      fullHeightHover={false}
      navButtonsWrapperProps={{
        style: {
          height: "50px",
          bottom: "0",
          top: "unset",
        },
      }}
      autoPlay={false}
      sx={{ height: "100%" }}
      NavButton={({ onClick, className, style, next, prev }) => {
        // Other logic

        return (
          <Button
            variant="contained"
            startIcon={prev && <ChevronLeftIcon />}
            endIcon={next && <ChevronRightIcon />}
            sx={{
              color: "#1A1700",
              backgroundColor: "#68B0AB",
              fontWeight: 600,
              height: "50px",
              "&.MuiButton-containedPrimary:hover": {
                backgroundColor: "#74D2CC", // Apply the background color to the active state on hover
                opacity: 1,
              },
              "&.MuiButton-containedPrimary:active": {
                backgroundColor: "#74D2CC", // Apply the background color to the active state on click
                opacity: 1,
              },
              // "&.MuiButton-containedPrimary": {
              //   backgroundColor: "#74D2CC", // Apply the background color to the active state
              // },
            }}
            onClick={onClick}
            className={className}
            style={style}
          >
            {next && "FORWARD"}
            {prev && "BACKWARD"}
          </Button>
        );
      }}
    >
      {props.map((item, i) => (
        <Item key={i} src={item.src} />
      ))}
    </Carousel>
  );
});

const Item = ({ src }) => {
  return (
    <Box>
      <Image src={src} width={800} height={300} alt="picture" />
    </Box>
  );
};
