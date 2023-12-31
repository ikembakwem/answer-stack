import styled from "@emotion/styled";
import { QuestionData } from "../../QuestionsData";
import { FC } from "react";
import {
  AuthorAndTime,
  gray2,
  gray3,
} from "../../Styles";
import { Link } from "react-router-dom";

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question: FC<Props> = ({
  data,
  showContent = true,
}) => (
  <Wrapper>
    <Title>
      <QuestionLink
        to={`/questions/${data.questionId}`}
      >
        {data.title}
      </QuestionLink>
    </Title>
    {showContent && (
      <Content>
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </Content>
    )}
    <AuthorAndTime>
      {`Asked by ${
        data.userName
      } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </AuthorAndTime>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 10px 0;
`;

const Title = styled.div`
  padding: 10px 0;
  font-size: 19px;
`;

const Content = styled.div`
  padding-bottom: 10px;
  font-size: 15px;
  color: ${gray2};
`;

const QuestionLink = styled(Link)`
  color: ${gray2};
`;
