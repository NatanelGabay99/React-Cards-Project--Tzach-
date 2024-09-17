import { Typography } from "@mui/material";
import ROUTES from "../../../../routes/routesModel";
import NavBarLink from "../../../../routes/components/NavBarLink";
import { useTheme } from "../../../../providers/CustomThemeProvider";

export default function Logo() {
  const { isDark } = useTheme();
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <Typography
          sx={{
            marginRight: 2,
            fontFamily: '"Brygada 1918", serif',
            fontWeight: 600,
            fontSize: "40px",
            color: isDark ? "#ededed" : "#121212",
            display: { xs: "none", md: "inline-flex" },
            animation: "showRight 1s ease forwards",
            "@keyframes showRight": {
              "0%": { transform: "translateX(-100%)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        >
          GABAY
        </Typography>
      </NavBarLink>
    </>
  );
}
