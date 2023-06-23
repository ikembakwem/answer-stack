import { QuestionData } from "./QuestionsData";
import { FC } from "react";
import { Question } from "./Question";

interface Props {
  data: QuestionData[];
}

export const QuestionList: FC<Props> = ({ data }) => (
  <ul>
    {data.map((question) => (
      <li key={question.questionId}>
        <Question data={question} />
      </li>
    ))}
  </ul>
);
