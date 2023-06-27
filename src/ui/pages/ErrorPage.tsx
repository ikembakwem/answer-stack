import { NavLink } from "react-router-dom";
import { Page } from "./Page";

export const ErrorPage = () => (
  <Page title="Sorry 😴, the page you requested for does not exist!">
    <p>
      Go back <NavLink to="/">home</NavLink>
    </p>
  </Page>
);
