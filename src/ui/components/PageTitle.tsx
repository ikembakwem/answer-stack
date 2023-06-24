import styled from "@emotion/styled";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const PageTitle: FC<Props> = ({ children }) => (
  <Title>{children}</Title>
);

const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0 5px;
  text-align: center;
  text-transform: uppercase;
`;
