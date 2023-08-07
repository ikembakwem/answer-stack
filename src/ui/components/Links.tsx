import { fontSize, fontfamily, gray1, gray2, gray5 } from "../../Styles";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { ComponentProps, FC, ReactNode } from "react";

interface NavLinkProps {
  children?: ReactNode;
  to: string;
}

interface LinkProps extends ComponentProps<"a"> {
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

const StyledLink = styled.a`
  text-decoration: none;
  color: #0b48cb;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const NavLink = ({ children, to }: NavLinkProps) => (
  <Styles to={to}>{children}</Styles>
);

const Styles = styled(RouterNavLink)`
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

export const LogoLink = styled(RouterLink)`
  font-size: 24px;
  font-weight: bold;
  color: ${gray1};
`;
