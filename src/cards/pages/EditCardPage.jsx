import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
<<<<<<< HEAD
import CardComponent from "../components/card/CardComponent";
import cardSchema from "../models/cardSchema";
import initialCardForm from "../helpers/initalForms/initialCardForm";
import mapCardToModel from "../../users/helpers/normalization/mapCardToModel";
import normalizeCard from "../../users/helpers/normalization/normalizeCard";
=======
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";
import mapCardToModel from "../helpers/normalization/mapToModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import CardComponent from "../components/card/CardComponent";
>>>>>>> f73b56d94ce9b62d6bd80dba12d8843950f8d0cc

export default function EditCardPage() {
  const { id } = useParams();
  const { handleUpdateCard, getCardById, card } = useCards();
<<<<<<< HEAD
  console.log(cardSchema);
=======
>>>>>>> f73b56d94ce9b62d6bd80dba12d8843950f8d0cc
  const {
    data,
    errors,
    setData,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialCardForm, cardSchema, (data) =>
    handleUpdateCard(id, data)
  );

  useEffect(() => {
    if (card) {
      setData(mapCardToModel(card));
    } else {
      getCardById(id);
    }
  }, [card]);

  return (
    <div>
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardForm
          title="edit card"
          onSubmit={onSubmit}
          onReset={handleReset}
          errors={errors}
          validateForm={validateForm}
          onInputChange={handleChange}
          data={data}
        />
        {card && (
          <CardComponent
            card={{ _id: id, ...normalizeCard(data) }}
            handleDelete={() => {}}
            handleEdit={() => {}}
            handleLike={() => {}}
          />
        )}
      </Container>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f73b56d94ce9b62d6bd80dba12d8843950f8d0cc
