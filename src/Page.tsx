import { FC } from "react";
import { PageTitle } from "./PageTitle";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Page: FC<Props> = ({
  title,
  children,
}) => (
  <div>
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </div>
);
