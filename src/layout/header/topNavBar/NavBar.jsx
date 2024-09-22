import { AppBar, Toolbar } from "@mui/material";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavBar from "./right-navigation/RightNavbar";
import { MenuProvider } from "./menu/MenuProvider";
import { useTheme } from "../../../providers/CustomThemeProvider";


export default function NavBar() {
  const {isDark} = useTheme();
  return (
    <MenuProvider>
      <AppBar position="sticky" sx={{background: isDark? '#151a1e' : '#85a3e0'}} elevation={10}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />
          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}