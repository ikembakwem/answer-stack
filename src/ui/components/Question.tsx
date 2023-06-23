import { QuestionData } from "../../QuestionsData";
import { FC } from "react";

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question: FC<Props> = ({
  data,
  showContent = true,
}) => (
  <div>
    <div>{data.title}</div>
    {showContent && (
      <div>
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </div>
    )}
    <div>
      {`Asked by ${
        data.userName
      } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
