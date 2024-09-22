import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import AddCardIcon from '@mui/icons-material/AddCard';


export default function AddNewCardButton() {
  const navigate = useNavigate();
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 75,
        right: 16,
      }}
      onClick={() => {
        navigate(ROUTES.CREATE_CARD);
      }}
    >
      <AddCardIcon />
    </Fab>
  );
}