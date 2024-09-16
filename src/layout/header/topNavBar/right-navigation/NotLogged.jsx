import React from "react";
import NavBarItem from "../../../../routes/components/NavBarItem";
import { Box } from "@mui/material";
import ROUTES from "../../../../routes/routesModel";
import { useTheme } from "../../../../providers/CustomThemeProvider";

export default function NotLogged() {
  const { isDark } = useTheme();
  return (
    <Box>
      <NavBarItem label="Signup" to={ROUTES.SIGNUP} sx={{color: isDark? '#ffffff' : '#121212'}} />
      <NavBarItem label="Login" to={ROUTES.LOGIN} sx={{color: isDark? '#ffffff' : '#121212'}} />
    </Box>
  );
}
