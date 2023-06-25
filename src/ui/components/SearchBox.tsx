import styled from "@emotion/styled";
import {
  fontSize,
  fontfamily,
  gray2,
  gray5,
} from "../../Styles";
import { FC, ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export const SearchBox: FC<InputProps> = ({
  ...props
}) => <InputStyles {...props} />;

const InputStyles = styled.input`
  font-family: ${fontfamily};
  font-size: ${fontSize};
  padding: 8px 10px;
  border: 1px solid ${gray5};
  border-radius: 3px;
  color: ${gray2};
  background-color: #fff;
  width: 320px;
  height: 40px;
  :focus {
    outline-color: ${gray5};
  }
`;
