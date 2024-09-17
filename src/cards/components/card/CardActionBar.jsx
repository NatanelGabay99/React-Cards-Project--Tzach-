import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function CardActionBar({
  handleDelete,
  handleLike,
  id,
  user_id,
  likes,
  phone,
}) {
  const { user } = useCurrentUser();
  const [isDialogOpen, setDialog] = useState(false);
  const [isLiked, setIsLiked] = useState(() => likes.includes(user?._id));
  const navigate = useNavigate();
  const handleDeleteCard = () => {
    handleDelete(id);
    setDialog(false);
  };
  const handleLikeCard = async () => {
    await handleLike(id);
    setIsLiked((prev) => !prev);
  };


  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?._id === user_id ? (
            <>
              <IconButton
                aria-label="Delete Card"
                onClick={() => setDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Edit Card"
                onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}
              >
                <ModeEditIcon />
              </IconButton>
            </>
          ) : null}
        </Box>

        <Box>
          <a href={"tel:" + phone}>
            <IconButton aria-label="Call">
              <CallIcon />
            </IconButton>
          </a>
          {user && (
            <IconButton aria-label="Add to favorite" onClick={handleLikeCard}>
              <FavoriteIcon color={isLiked ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDeleteCard}
      />
    </>
  );
}
