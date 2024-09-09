import { Box } from "@mui/material";
import NavItem from "../../../../routes/components/NavBarItem";
import { useCurrentUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import ROUTES from "../../../../routes/routesModel";

export default function LeftNavBar() {
  const { user } = useCurrentUser();
  console.log(user);

  return (
    <Box>
      <LogoIcon />

      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
        }}
      >
        <Logo />
        <NavItem to={ROUTES.CARDS} label="Cards" />
        <NavItem to={ROUTES.ABOUT} label="About" />
        {user && <NavItem to={ROUTES.FAV_CARDS} label="Favorite cards" />}
        {user?.isBusiness && <NavItem to={ROUTES.MY_CARDS} label="My cards" />}
        {user?.isAdmin && <NavItem to={ROUTES.SANDBOX} label="Sandbox" />}
      </Box>
    </Box>
  );
}
