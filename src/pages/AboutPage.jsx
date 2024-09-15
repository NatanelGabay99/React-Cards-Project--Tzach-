import { Container, Divider, Grid, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">

        <Typography variant="body1" gutterBottom>
        <h2>About the application</h2>
        </Typography>

        <Typography variant="body2" gutterBottom>
        <p>
          The Card Management System is a web application designed to help users
          organize and manage their cards efficiently. Whether you have a
          collection of business cards, credit cards, or any other type of card,
          this application can help you keep track of them all in one place.
        </p>

        <p>
          The application allows you to add new cards, edit existing ones, and
          delete cards that are no longer needed. You can customize each card
          with specific details such as the card type, name, number, and
          expiration date. Additionally, you can mark cards as favorites for
          quick access.
        </p>
        <p>
          The application features a user-friendly interface that makes it easy
          to navigate and use. You can access the Home page for an overview of
          the application's features and functionalities, or go to the Cards
          page to manage your cards. The navigation bar at the top of the page
          provides quick links to important sections of the application.
        </p>
        <p>
          To access certain features like managing favorites, you need to be
          logged in. Use the login form to enter your credentials. Once logged
          in, you can log out at any time by clicking the "Logout" button in the
          navigation bar.
        </p>
        <p>
          Whether you have a small or large collection of cards, the Card
          Management System can help you stay organized and keep track of all
          your cards in one place. Try it out today and see how it can simplify
          your card management tasks!
        </p>
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" gutterBottom>
        <h2>How to use the application</h2>
        </Typography>

        <Typography variant="body2" gutterBottom>
        <p>
          This application is a comprehensive card management system designed to
          help you organize and manage your cards efficiently. The application
          features two main pages: the Home page and the Cards page, each
          serving a distinct purpose.
        </p>
        </Typography>

        <Typography variant="body1" gutterBottom>
        <h3>Home Page</h3>
        </Typography>

        <Typography variant="body2" gutterBottom>
        <p>
          The Home page is the central hub of the application. You can access it
          by clicking on the Home link in the navigation bar. This page provides
          an overview of the application's features and functionalities. It
          includes a brief description of what the application does and offers
          quick links to other important sections.
        </p>
        </Typography>


       <Typography variant="body1" gutterBottom>
        <h3>Cards Page</h3>
        </Typography>

        <Typography variant="body2" gutterBottom>
        <p>
          The Cards page is where you can manage your cards. Here, you can
          perform various actions such as adding new cards, editing existing
          ones, and deleting cards that are no longer needed. Each card contains
          specific details that you can customize according to your needs.
        </p>
        </Typography>

        <Typography variant="body1" gutterBottom>
        <h3>Adding a New Card</h3>
        </Typography>

        <Typography variant="body2" gutterBottom>
        <p>
          To add a new card, navigate to the Cards page and click on the "Add
          Card" button. This will open a form where you can enter the details of
          the new card. Once you have filled out the form, click "Submit" to add
          the card to your collection.
        </p>
        </Typography>

        <Typography variant="body1" gutterBottom>
        <h3>Editing a Card</h3>
        </Typography>

        <Typography variant="body2" gutterBottom>
        <p>
          To edit an existing card, go to the Cards page and locate the card you
          want to edit. Click on the "Edit" button associated with that card.
          This will open a form pre-filled with the card's current details. Make
          the necessary changes and click "Save" to update the card.
        </p>
        </Typography>

        <Typography variant="body1" gutterBottom>
        <h3>Deleting a Card</h3>
        </Typography>

        <Typography variant="body2" gutterBottom>
        <p>
          If you need to delete a card, find the card on the Cards page and
          click the "Delete" button. You will be prompted to confirm the
          deletion. Once confirmed, the card will be permanently removed from
          your collection.
        </p>
        </Typography>

        <Typography variant="body1" gutterBottom>
        <h3>Favorites</h3>
        </Typography>

        <Typography variant="body2" gutterBottom>
        <p>
          You can mark cards as favorites for quick access. To do this, click on
          the "Favorite" icon on the card. Favorited cards can be easily
          accessed from the "Fav Cards" section in the navigation bar, provided
          you are logged in.
        </p>
        </Typography>

        <Typography variant="body1" gutterBottom>
        <h3>Logging In and Out</h3>
        </Typography>

        <Typography variant="body2" gutterBottom>
        <p>
          To access certain features like managing favorites, you need to be
          logged in. Use the login form to enter your credentials. Once logged
          in, you can log out at any time by clicking the "Logout" button in the
          navigation bar.
        </p>
        </Typography>

        <Typography variant="body1" gutterBottom>
        <h3>Navigation</h3>
        </Typography>

        <Typography variant="body2" gutterBottom>
        <p>
          Use the navigation bar at the top of the page to move between
          different sections of the application. The navigation bar includes
          links to the Home page, Cards page, and other important sections.
        </p>
        </Typography>
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/images/card.png" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
