import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import AccessibleIcon from "@mui/icons-material/Accessible";
import { Box, Divider, Typography } from "@mui/material";
import Head from "next/head";
import Carousell from "../components/Carousell";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";

export default function Home() {
  const [selected, setSelected] = useState(false);

  const items = [
    {
      src: "https://picsum.photos/id/237/800/300",
    },
    {
      src: "https://picsum.photos/id/236/800/300",
    },
    {
      src: "https://picsum.photos/id/233/800/300",
    },
    {
      src: "https://picsum.photos/id/200/800/300",
    },
    {
      src: "https://picsum.photos/id/23/800/300",
    },
  ];
  return (
    // create a head
    <>
      <Head>
        <title>Golden Path</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToggleButton
        sx={{
          position: "absolute",
          top: "-5px",
          right: "-5px",
        }}
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
      >
        {selected ? (
          <DirectionsWalkIcon
            sx={{
              color: "#1c1a1a",
              transform: "scale(1.5)",
              backgroundColor: "#ffebaa",
              borderBottomLeftRadius: "3px",
              borderTopLeftRadius: "3px",
              borderBottomRightRadius: "3px",
            }}
          />
        ) : (
          <AccessibleIcon
            sx={{
              color: "#1c1a1a",
              transform: "scale(1.5)",
              backgroundColor: "#ffebaa",
              borderBottomLeftRadius: "3px",
              borderTopLeftRadius: "3px",
              borderBottomRightRadius: "3px",
            }}
          />
        )}
      </ToggleButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mx: 5,
          height: "100vh",
        }}
      >
        <Typography
          fontWeight={300}
          variant="h4"
          sx={{ textAlign: "left", fontWeight: 700, py: 4 }}
        >
          Golden Path
        </Typography>
        {/* slideshow section */}
        <Box sx={{ height: "55%" }}>
          <Carousell images={items} />
        </Box>
        <Divider sx={{ width: "100%", backgroundColor: "#ffebaa", my: 5 }} />
        <Box>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </Typography>
        </Box>
      </Box>
    </>
  );
}
