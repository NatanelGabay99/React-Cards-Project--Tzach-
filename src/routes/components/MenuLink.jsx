import React from "react";
import NavBarLink from "./NavBarLink";
import MenuItem from "@mui/material/MenuItem";
import { makeFirstLetterCapital } from "../../layout/header/topNavBar/menu/utils/algoMethods";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {
  return (
    <NavBarLink to={navigateTo}>
      <MenuItem sx={{ ...styles }} onClick={onClick}>
        {makeFirstLetterCapital(text)}
      </MenuItem>
    </NavBarLink>
  );
};


export default MenuLink;
