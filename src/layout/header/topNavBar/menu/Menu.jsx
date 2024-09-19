import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ROUTES from "../../../../routes/routesModel";
import { useCurrentUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import MenuLink from "../../../../routes/components/MenuLink";
import { useTheme } from "@emotion/react";

const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { isDark } = useTheme();
  const { user } = useCurrentUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <MenuLink
          text="cards"
          navigateTo={ROUTES.CARDS}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />
        <MenuLink
          text="about"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />


        {!user && (
          <>
            <MenuLink
              text="signup"
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuLink
              text="login"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}
        { user && user.isBusiness && (
          <>
            <MenuLink 
              text="My Cards"
              navigateTo={ROUTES.MY_CARDS} 
              onClick={onClose}
            />
          </>
        )}
        {user && (
          <>
          <MenuLink 
            text="Favorite Cards"
            navigateTo={ROUTES.FAV_CARDS}
            onClick={onClose}
          />
            <MenuLink 
              text="Profile"
              navigateTo={ROUTES.USER_PROFILE}
              onClick={onClose}
            />
            <MenuLink 
              text="Edit Account"
              navigateTo={ROUTES.EDIT_USER} 
              onClick={onClose}
            />
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
