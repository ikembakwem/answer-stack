import { Page } from "./Page";
import { useParams } from "react-router";
import {
  QuestionData,
  getQuestion,
} from "../../QuestionsData";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { gray3, gray6 } from "../../Styles";

export const QuestionPage = () => {
  const [question, setQuestion] =
    useState<QuestionData | null>(null);
  const { questionId } = useParams();

  useEffect(() => {
    const doGetQuestion = async (
      questionId: number
    ) => {
      const res = await getQuestion(questionId);
      setQuestion(res);
    };

    if (questionId) {
      doGetQuestion(Number(questionId));
    }
  }, [questionId]);

  return (
    <Page>
      <Container>
        <Title>
          {question === null ? "" : question.title}
        </Title>

        {question !== null && (
          <>
            <Content>{question.content}</Content>
            <AuthorAndTime>
              {`Asked by ${
                question.userName
              } on ${question.created.toLocaleDateString()} ${question.created.toLocaleTimeString()}`}
            </AuthorAndTime>
          </>
        )}
      </Container>
    </Page>
  );
};

const AuthorAndTime = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-style: italic;
  color: ${gray3};
`;

const Content = styled.p`
  margin-top: 0;
  background-color: #fff;
`;

const Container = styled.div`
  background-color: white;
  padding: 15px 20px 20px 20px;
  border-radius: 4px;
  border: 1px solid ${gray6};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin: 10px 0px 5px;
`;
