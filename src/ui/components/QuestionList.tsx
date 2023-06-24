import { QuestionData } from "../../QuestionsData";
import { FC } from "react";
import { Question } from "./Question";
import styled from "@emotion/styled";
import { accent2, gray5 } from "../../Styles";

interface Props {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList: FC<Props> = ({
  data,
  renderItem,
}) => (
  <UList>
    {data.map((question) => (
      <li key={question.questionId}>
        {renderItem ? (
          renderItem(question)
        ) : (
          <Question data={question} />
        )}
      </li>
    ))}
  </UList>
);

const UList = styled.ul`
  margin: 10px 0 0;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  border-top: 3px solid ${accent2};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  li {
    border-top: 1px solid ${gray5};
    :first-of-type {
      border-top: none;
    }
  }
`;
