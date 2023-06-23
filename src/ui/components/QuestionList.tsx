import { QuestionData } from "../../QuestionsData";
import { FC } from "react";
import { Question } from "./Question";

interface Props {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList: FC<Props> = ({
  data,
  renderItem,
}) => (
  <ul>
    {data.map((question) => (
      <li key={question.questionId}>
        {renderItem ? (
          renderItem(question)
        ) : (
          <Question data={question} />
        )}
      </li>
    ))}
  </ul>
);
