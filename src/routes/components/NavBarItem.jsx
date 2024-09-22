import { Button, Typography } from "@mui/material";
import React from "react";
import NavBarLink from "./NavBarLink";

export default function NavBarItem({ to, sx, label }) {
  return (
    <NavBarLink to={to} sx={sx}>
      <Button color="inherit">
        <Typography sx={{fontSize:'20px', fontWeight:'500'}}>{label}</Typography>
      </Button>
    </NavBarLink>
  );
}
