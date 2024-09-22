import {Box ,IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useCurrentUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import SearchBar from "./SearchBar";
import MoreButton from "./MoreButton";

export default function RightNavbar() {
  const { user } = useCurrentUser();
  const { isDark, toggleDarkMode } = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchBar sx={{display: 'flex'}} />
        <IconButton sx={{ display:'flex' ,ml: '2px' }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Box sx={{ display: { xs: "none", md: "inline-flex"} }}>
          {user ? <Logged /> : <NotLogged />}
        </Box>
      </Box>
      <MoreButton />
    </>
  );
}
