import { FC } from "react";
import { PageTitle } from "@components/PageTitle";
import styled from "@emotion/styled";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Page: FC<Props> = ({
  title,
  children,
}) => (
  <Wrapper>
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 50px auto 20px auto;
  padding: 30px 20px;
  max-width: 600px;
`;
