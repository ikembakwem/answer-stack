import { FC } from "react";
import { AnswerData } from "../../QuestionsData";
import { Answer } from "./Answer";
import styled from "@emotion/styled";
import { gray5 } from "../../Styles";

interface Props {
  data: AnswerData[];
}

export const AnswerList: FC<Props> = ({ data }) => (
  <ul>
    {data.map((answer) => (
      <AnswerContent key={answer.answerId}>
        <Answer data={answer} />
      </AnswerContent>
    ))}
  </ul>
);

const Wrapper = styled.ul`
  margin: 10px 0;
`;

const AnswerContent = styled.li`
  border-top: 1px solid ${gray5};
`;
