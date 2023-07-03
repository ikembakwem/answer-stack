import styled from "@emotion/styled";
import {
  fontSize,
  fontfamily,
  gray2,
  gray5,
} from "../../Styles";
import { ComponentProps, forwardRef } from "react";

export const SearchBox = forwardRef<
  HTMLInputElement,
  ComponentProps<"input">
>(({ ...props }, ref) => {
  return <InputStyles ref={ref} {...props} />;
});

const InputStyles = styled.input`
  font-family: ${fontfamily};
  font-size: ${fontSize};
  padding: 8px 10px;
  border: 1px solid ${gray5};
  border-radius: 999px;
  color: ${gray2};
  background-color: #fff;
  width: 320px;
  height: 44px;
  :focus {
    outline-color: ${gray5};
  }
`;
