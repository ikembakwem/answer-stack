import styled from "@emotion/styled";
import { ComponentProps, forwardRef } from "react";

const Styles = styled.input`
  height: 40px;
  padding: 12px 10px;
`;

export const Input = forwardRef<
  HTMLInputElement,
  ComponentProps<"input">
>(({ ...rest }, ref) => {
  return <Styles ref={ref} {...rest} />;
});
