import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import InfoIcon from "@mui/icons-material/Info";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StyleIcon from "@mui/icons-material/Style";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function Footer() {
  const navigate = useNavigate();
  const { user } = useCurrentUser();
  return (
    <>
      <Paper
        sx={{position: "sticky", bottom: 0, left: 0, right: 0, backgroundColor:'#576e99'}}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="About"
            icon={<InfoIcon />}
            onClick={() => navigate(ROUTES.ABOUT)}
          />
          <BottomNavigationAction
            label="Cards"
            icon={<StyleIcon />}
            onClick={() => navigate(ROUTES.CARDS)}
          />
          {user?.isBusiness && (
            <BottomNavigationAction
              label="My cards"
              icon={<RecentActorsIcon />}
              onClick={() => navigate(ROUTES.MY_CARDS)}
            />
          )}
          {user && (
            <BottomNavigationAction
              label="Favorite cards"
              icon={<FavoriteIcon />}
              onClick={() => navigate(ROUTES.FAV_CARDS)}
            />
          )}
        </BottomNavigation>
      </Paper>
    </>
  );
}
