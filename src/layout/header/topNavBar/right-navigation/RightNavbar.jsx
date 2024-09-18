import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCurrentUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import {useTheme} from "../../../../providers/CustomThemeProvider";
import SearchBar from "./SearchBar";
import MoreButton from "./MoreButton";

export default function RightNavbar() {
  const { user } = useCurrentUser();
  const { isDark, toggleDarkMode } = useTheme();
  return (
    <>
    <Box
      sx={{
        display: { xs: "none", md: "inline-flex" },
        alignItems: "center",
      }}
    >
      <SearchBar />
      <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      {user ? <Logged /> : <NotLogged />}
    </Box>
    <MoreButton />
    </>
  );
}
