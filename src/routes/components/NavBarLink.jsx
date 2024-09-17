import { Link } from "react-router-dom";

export default function NavBarLink({ to, sx, children }) {
  return (
    <Link to={to} style={{ ...sx, textDecoration: "none"}}>
      {children}
    </Link>
  );
}
