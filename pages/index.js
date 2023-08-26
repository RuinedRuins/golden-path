import CustomButton from "../components/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box, Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    // create a head
    <>
      <Head>
        <title>Golden Path</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box sx={{ mx: 5, height: "100vh" }}>
        {/* app name display, required? */}
        <Typography
          fontWeight={300}
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 700, py: 2 }}
        >
          Golden Path
        </Typography>
        {/* slideshow section */}
        <Box sx={{ height: 5 / 8 }}>hi</Box>
        {/* buttons section */}
        <Box
          sx={{
            display: "flex",
            height: "50px",
            justifyContent: "space-around",
          }}
        >
          <CustomButton
            text={"Backward"}
            startIcon={<ChevronLeftIcon />}
            bgColor={"#68B0AB"}
            color={"#1A1700"}
            onHoverColor={"#74D2CC"}
          />
          <CustomButton
            text={"Forward"}
            endIcon={<ChevronRightIcon />}
            bgColor={"#68B0AB"}
            color={"#1A1700"}
            onHoverColor={"#74D2CC"}
          />
        </Box>
      </Box>
    </>
  );
}
