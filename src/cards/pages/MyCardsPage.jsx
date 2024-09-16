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

export default function MyCards() {
  const { isDark } = useTheme();
  const { value, handleGetMyCards, handleDeleteCard, handleLikeCard } =
    useCards();
  const { filterCards, error, isLoading } = value;

  const { user } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetMyCards();
    }
  }, [user, handleGetMyCards, navigate]);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetMyCards();
  };

  return (
    <div>
      <Container sx={{color: isDark? '#ffffff' : '#121212', mt: 2 }}>
        <PageHeader
          title="My Cards"
          subtitle="On this page you can view all your business cards"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={handleDelete}
          handleLike={handleLikeCard}
        />
        <AddNewCardButton />
      </Container>
    </div>
  );
}

