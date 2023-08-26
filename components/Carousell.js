import React, { useRef } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Carousell({ ref, images: props }) {
  const sliderRef = useRef(null);

  return (
    <Carousel
      ref={sliderRef}
      fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
      autoPlay={false}
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
              "&:hover": {
                backgroundColor: "#74D2CC",
              },
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
}

const Item = ({ src }) => {
  return (
    <Box>
      <Image src={src} width={800} height={300} alt="picture" />
    </Box>
  );
};
