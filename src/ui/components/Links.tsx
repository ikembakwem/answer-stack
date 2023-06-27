import styled from "@emotion/styled";
import { ReactNode } from "react";
import {
  fontSize,
  fontfamily,
  gray1,
  gray2,
  gray5,
} from "../../Styles";
import {
  Link,
  NavLink as RouterLink,
} from "react-router-dom";

interface NavLink3Props {
  children?: ReactNode;
  to: string;
}

export const NavLink = ({
  children,
  to,
}: NavLink3Props) => (
  <Styles to={to}>{children}</Styles>
);

const Styles = styled(RouterLink)`
  font-family: ${fontfamily};
  font-size: ${fontSize};
  background-color: transparent;
  font-weight: 500;
  color: ${gray2};
  cursor: pointer;
  line-height: 1.15;
  display: inline-flex;
  padding: 8px;
  align-items: flex-end;
  justify-content: center;
  gap: 6px;
  margin-left: 8px;
  img {
    width: 16px;
    opacity: 0.6;
  }

  :focus {
    outline-color: ${gray5};
  }
`;

export const LogoLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: ${gray1};
`;
