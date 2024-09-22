import CardComponent from "./card/CardComponent";
import { Container } from "@mui/material";

export default function Cards({ cards, handleDelete, handleLike }) {
  const handleEdit = (id) => {
    console.log(`Card ${id} is Edited`);
  };
  
  return (
    <Container maxWidth={'xl'} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {cards.map((card) => (
        <CardComponent
          card={card}
          key={card._id}
          handleDelete={handleDelete}
          handleLike={handleLike}
          handleEdit={handleEdit}
        />
      ))}
    </Container>
  );
}
