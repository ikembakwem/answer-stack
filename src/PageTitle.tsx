import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const PageTitle: FC<Props> = ({ children }) => (
  <h2>{children}</h2>
);
