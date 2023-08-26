import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Carousell({ images: props }) {
  return (
    <Carousel>
      {props.map((item, i) => (
        <Item key={i} src={item.src} />
      ))}
    </Carousel>
  );
}

const Item = ({ src }) => {
  return (
    <Box>
      <Image src={src} width={800} height={300} />
    </Box>
  );
};
