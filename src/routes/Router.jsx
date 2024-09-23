import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import EditCardPage from "../cards/pages/EditCardPage";
import FavoriteCards from "../cards/pages/FavoriteCards";
import MyCards from "../cards/pages/MyCardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";

import Countries from "../sandbox/effects/Countries";
import Effect from "../sandbox/effects/Effect";
import FirstEffect from "../sandbox/effects/FirstEffect";
import MyForm from "../sandbox/forms/MyForm";
import FormExample from "../sandbox/forms/FormExample";
import Get2Countries from "../sandbox/render/Get2Countries";
import SandBoxPage from "../sandbox/SandboxPage";
import Counter from "../sandbox/states/Counter";
import MyDetails from "../sandbox/states/MyDetails";
import Password from "../sandbox/states/Password";
import Todolist from "../sandbox/states/Todolist";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import ROUTES from "./routesModel";
import Profile from "../users/pages/Profile";
import MapPage from "../sandbox/map/MapPage";
import AddCardPage from "../cards/pages/AddCardPage";
import CardsPage from "../cards/pages/CardsPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavoriteCards />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
      <Route path={ROUTES.USER_PROFILE} element={<Profile />} />
      <Route path={ROUTES.EDIT_USER} element={<SignupPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBoxPage />}>
        <Route path="counter" element={<Counter />} />
        <Route path="mydetails" element={<MyDetails />} />
        <Route path="password" element={<Password />} />
        <Route path="todo" element={<Todolist />} />
        <Route path="firsteffect" element={<FirstEffect />} />
        <Route path="countries" element={<Countries />} />
        <Route path="effect" element={<Effect />} />
        <Route path="render" element={<Get2Countries />} />
      </Route>
      <Route path="test" element={<MyForm />} />
      <Route path="form" element={<FormExample />} />
      <Route path="map" element={<MapPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}