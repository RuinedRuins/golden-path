import CustomButton from "../components/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CustomIconButton from "../components/IconButton";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js with MUI!</h1>
      <CustomButton text={"test"} endIcon={<ChevronRightIcon />} />
      <CustomIconButton
        size={"large"}
        icon={<ChevronLeftIcon sx={{ color: "red" }} />}
      />
    </div>
  );
}
