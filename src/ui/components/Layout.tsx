import {
  fontSize,
  fontfamily,
  gray2,
} from "../../Styles";
import { Header } from "./Header";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <RootStyles>
    <Header />
    <Outlet />
  </RootStyles>
);

const RootStyles = styled.div`
  font-family: ${fontfamily};
  font-size: ${fontSize};
  color: ${gray2};
`;
