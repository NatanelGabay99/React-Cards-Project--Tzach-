import { Box } from "@mui/material";
import NavItem from "../../../../routes/components/NavBarItem";
import { useCurrentUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import ROUTES from "../../../../routes/routesModel";
import { useTheme } from "../../../../providers/CustomThemeProvider";

export default function LeftNavBar() {
  const { isDark } = useTheme();
  const { user } = useCurrentUser();

  return (
    <Box>
      <LogoIcon />
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex", alignItems: "center"},
        }}
      >
        <Logo />
        <NavItem to={ROUTES.CARDS} label="Cards" sx={{ color: isDark? '#ffffff' : '#121212'}} />
        <NavItem to={ROUTES.ABOUT} label="About"  sx={{color: isDark? '#ffffff' : '#121212'}}/>
        {user && <NavItem to={ROUTES.FAV_CARDS} label="Favorite-cards" sx={{color: isDark? '#ffffff' : '#121212'}}/>}
        {user?.isBusiness && <NavItem to={ROUTES.MY_CARDS} label="My-cards" sx={{color: isDark? '#ffffff' : '#121212'}} />}
        {user?.isAdmin && <NavItem to={ROUTES.SANDBOX} label="Sandbox" sx={{color: isDark? '#ffffff' : '#121212'}} />}
      </Box>
    </Box>
  );
}
