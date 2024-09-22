import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../../users/providers/UserProvider";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/card/AddNewCardButton";
import { useTheme } from "../../providers/CustomThemeProvider";

export default function FavoriteCards() {
  const { isDark } = useTheme();
  const { value, handleGetFavCards, handleDeleteCard, handleLikeCard } =
    useCards();
  const { filterCards, error, isLoading } = value;

  const { user } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetFavCards();
    }
  }, [user, handleGetFavCards, navigate]);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetFavCards();
  };

  const handleLike = async (id) => {
    await handleLikeCard(id);
    await handleGetFavCards();
  };

  return (
    <div>
      <Container sx={{color: isDark? '#ffffff' : '#121212' }}>
        <PageHeader
          title="Favorite Cards Page"
          subtitle="On this page you can view business cards you have liked"
        />

        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={handleDelete}
          handleLike={handleLike}
        />
        <AddNewCardButton />
      </Container>
    </div>
  );
}
