import { Link, Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import { Button, Container, Grid } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import useUsers from "../hooks/useUsers";

export default function LoginPage() {
  //this pulls the isLoading, error, and handleLogin from the useUsers hook
  // useUsers is called because it is a custom hook that is used to handle the login

  const { isLoading, error, handleLogin } = useUsers();

 // this pulls the data, errors, handleChange, handleReset, validateForm, and onSubmit from the useForm hook, and then useForm is called with the initialLoginForm, loginSchema, and handleLogin
  const { value, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialLoginForm, loginSchema, handleLogin);
    const { data, errors } = value;

  const { user } = useCurrentUser();

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <Container>
      <PageHeader
      //this is the title and subtitle for the page
        title="Welcome to Login page"
        subtitle="here you can log in"
      />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="login"
          styles={{ maxWidth: "450px" }}
          to={ROUTES.ROOT}
          //this is the onSubmit, onReset, and validateForm for the form
          onSubmit={onSubmit}
          onReset={handleReset}
          validateForm={validateForm}
        >
          <Input
            label="email"
            name="email"
            type="email"
            //this is the error, onChange, and data for the input
            error={errors.email}
            onChange={handleChange}
            data={data}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={errors.password}
            onChange={handleChange}
            data={data}
          />
          <Grid item xs={12}>
            <Button
              variant="outlined"
              component={Link}
              to={ROUTES.SIGNUP}
              startIcon={<AccountBoxIcon />}
              sx={{ width: "100%" }}
            >
              Sign Up
            </Button>
          </Grid>
        </Form>
      </Container>
    </Container>
  );
}
