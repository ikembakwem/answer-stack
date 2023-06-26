import { FC } from "react";
import { AnswerData } from "../../QuestionsData";
import { AuthorAndTime } from "../../Styles";
import styled from "@emotion/styled";

interface Props {
  data: AnswerData;
}

export const Answer: FC<Props> = ({ data }) => (
  <Wrapper>
    <Content>{data.content}</Content>
    <AuthorAndTime>
      {`Answered by ${
        data.userName
      } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </AuthorAndTime>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 10px 0;
`;
const Content = styled.div`
  padding: 10px 0;
  font-size: 13px;
`;
