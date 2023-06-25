import styled from "@emotion/styled";
import {
  ComponentProps,
  FC,
  ReactNode,
  forwardRef,
} from "react";
import {
  fontSize,
  fontfamily,
  gray1,
  gray2,
  gray5,
} from "../../Styles";

interface LinkProps extends ComponentProps<"a"> {
  url: string;
  children?: ReactNode;
  label?: string;
}

export const NavLink: FC<LinkProps> = ({
  url,
  children,
  label,
  ...props
}) => (
  <LinkStyles href={url} {...props}>
    {children}
    <span>{label}</span>
  </LinkStyles>
);

const LinkStyles = styled.a`
  font-family: ${fontfamily};
  font-size: ${fontSize};
  background-color: transparent;
  font-weight: 500;
  color: ${gray2};
  cursor: pointer;
  line-height: 1.43;
  display: inline-flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  img {
    width: 16px;
    opacity: 0.6;
  }

  :focus {
    outline-color: ${gray5};
  }
`;

export const LogoLink = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: ${gray1};
`;
