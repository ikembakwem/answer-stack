import styled from "@emotion/styled";
import { ComponentProps, FC } from "react";

export const Input: FC<ComponentProps<"input">> = ({
  ...props
}) => <Styles {...props} />;

const Styles = styled.input`
  height: 40px;
  padding: 12px 10px;
`;
