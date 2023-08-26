import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button, IconButton } from "@mui/material";
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
          height: "100px",
          bottom: "0",
          top: "unset",
        },
      }}
      autoPlay={false}
      sx={{ height: "100%" }}
      NavButton={({ onClick, className, style, next, prev }) => {
        // Other logic

        return (
          <IconButton
            variant="contained"
            classes={{ root: "custom-icon-button" }}
            onClick={onClick}
            className={className}
            style={style}
          >
            {prev && <ChevronLeftIcon sx={{ transform: "scale(1.5)" }} />}
            {next && <ChevronRightIcon sx={{ transform: "scale(1.5)" }} />}
          </IconButton>
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
    <Box sx={{ borderRadius: "20px", overflow: "hidden" }}>
      <Image
        objectFit="cover"
        src={src}
        width={800}
        height={300}
        alt="picture"
      />
    </Box>
  );
};
