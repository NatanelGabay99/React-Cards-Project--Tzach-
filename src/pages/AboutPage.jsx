import { Container, Divider, Grid, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../providers/CustomThemeProvider";
import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AddCardIcon from "@mui/icons-material/AddCard";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function AboutPage() {
  const { isDark } = useTheme();
  return (
    <Container sx={{ color: isDark ? "#ffffff" : "#121212" }}>
      <PageHeader
        title="About Page"
        subtitle="On this page you can view extended explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          <Typography variant="body1" gutterBottom sx={{ fontSize: "25px" }}>
            <h2>About the application</h2>
          </Typography>

          <Typography variant="body2" gutterBottom sx={{ fontSize: "22px" }}>
            <p>
              This Card Management System is a web application designed to help
              users organize and manage their cards efficiently. Whether you
              have a collection of business cards, credit cards, or any other
              type of card, this application can help you keep track of them all
              in one place.
            </p>

            <p>
              The application allows you to add new cards, edit existing ones,
              and delete cards that are no longer needed or in use. You can
              customize your own business cards and view them afterwards in the cards page when
              submiting them. In addition, you can mark cards as
              favorites for quick access and unmark them.
            </p>
            <p>
              The application features a user-friendly interface that makes it
              easy to navigate and use. You can access the Home page for an
              overview of the application's features and functionalities, or go
              to the Cards page to manage your cards. The navigation bar at the
              top of the page provides quick links to important sections of the
              application.
            </p>
            <p>
              To access certain features like managing 'favorites' and 'my-cards', you need to be
              logged in. Use the login form to enter your credentials. Once
              logged in, you can log out at any time by clicking the "Logout"
              button in the avatar icon.
            </p>
            <p>
              Whether you have a small or large collection of cards, the Card
              Management System can help you stay organized and keep track of
              all your cards in one place. Try it out today and see how it can
              simplify your card management tasks!
            </p>
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body1" gutterBottom sx={{ fontSize: "25px" }}>
            <h2>How to use the application</h2>
          </Typography>

          <Typography variant="body2" gutterBottom sx={{ fontSize: "22px" }}>
            <p>
              This application is a comprehensive card management system
              designed to help you organize and manage your cards efficiently.
              The application features two main pages: the Home page which is
              basically the Cards page, and the About Page which demonstrates
              the user how to interact with the app.
            </p>
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "22px",
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <HomeIcon sx={{ fontSize: 40 }} />
            <h3>Home Page:</h3>
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontSize: "19px", marginBottom: "-0.6em" }}
          >
            <p>
              The Home page is the central hub of the application. You can
              access it by clicking on the Cards link in the navigation bar.
              This page provides an overview of the application's features and
              functionalities. Here, you can find various business cards.
            </p>
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "22px",
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AppRegistrationIcon sx={{ fontSize: 40 }} />
            <h3>Register:</h3>
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontSize: "19px", marginBottom: "0.6em" }}
          >
            <p>
              Once you have registered and become an active user on the site,
              you will be able to access other features like adding cards,
              editing cards, deleting cards, and marking cards as favorites. It
              is important you sign up as a Business user, in order to access
              these features.
            </p>
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "22px",
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <AddCardIcon sx={{ fontSize: 40 }} />
            <h3>Adding a New Card:</h3>
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontSize: "19px", marginBottom: "0.5em" }}
          >
            <p>
              To add a new card, navigate to the Cards page and click on the
              blue "Add Card" button. This will open a form where you can enter
              the details of the new card you are interested in creating. Once
              you have filled out the form, click "Submit" to add the card to
              your collection.
            </p>
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "22px",
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <EditIcon sx={{ fontSize: 40 }} />
            <h3>Editing a Card:</h3>
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontSize: "19px", marginBottom: "0.5em" }}
          >
            <p>
              To edit an existing card, go to the Cards page in the navigation
              bar and locate the card you want to edit. Remember, you may only
              edit cards that only you have craeted. Click on the "Edit" button
              associated with that card. This will open a form pre-filled with
              the card's current details. Make the necessary changes and click
              "Save" to update the card.
            </p>
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "22px",
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DeleteIcon sx={{ fontSize: 40 }} />
            <h3>Deleting a Card:</h3>
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontSize: "19px", marginBottom: "0.5em" }}
          >
            <p>
              If you need to delete a card, find the card on the Cards page and
              click the "Delete" button. You will be prompted to confirm the
              deletion. Once confirmed, that card will be permanently removed
              from your collection.
            </p>
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "22px",
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FavoriteIcon sx={{ fontSize: 40 }} />
            <h3>Favorites:</h3>
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontSize: "19px", marginBottom: "0.5em" }}
          >
            <p>
              You can mark cards as favorites for quick access. To do this,
              click on the "Favorite" icon on the card. Favorited cards can be
              easily accessed from the "Fav Cards" section in the navigation
              bar.
            </p>
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "22px",
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LoginIcon sx={{ fontSize: 40 }} />
            <h3>Logging In and Out:</h3>
            <LogoutIcon sx={{ fontSize: 40 }} />
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontSize: "19px", marginBottom: "0.5em" }}
          >
            <p>
              To access certain features like managing favorites or your cards,
              you need to be logged in. Use the login form to enter your
              credentials. Once logged in, you can log out at any time by
              clicking the "Logout" button on the Avatar icon.
            </p>
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "22px",
              paddingTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavigationIcon sx={{ fontSize: 40 }} />
            <h3>Navigation:</h3>
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontSize: "19px", marginBottom: "0.5em" }}
          >
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
          <img
            src="/public/images/card.png"
            alt="card"
            style={{
              width: "22vw",
              height: "70vh",
              "border-radius": "4px",
              "margin-left": "20px",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
