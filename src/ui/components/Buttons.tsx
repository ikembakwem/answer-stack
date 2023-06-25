import { ComponentProps, FC, ReactNode } from "react";
import styled from "@emotion/styled";
import {
  fontSize,
  fontfamily,
  primary1,
  primary2,
} from "../../Styles";

interface ButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  disabled,
  loading,
  children,
  ...props
}) => (
  <ButtonStyles
    disabled={disabled || loading}
    {...props}
  >
    {children}
  </ButtonStyles>
);

const ButtonStyles = styled.button`
  background-color: ${primary2};
  border: 2px solid ${primary2};
  border-radius: 8px;
  font-family: ${fontfamily};
  font-size: ${fontSize};
  padding: 6px 12px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: ${primary1};
  }
  :focus {
    outline-color: ${primary2};
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
