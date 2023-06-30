import {
  getUnansweredQuestions,
  QuestionData,
} from "../../QuestionsData";
import { QuestionList } from "../components/QuestionList";
import { Page } from "./Page";
import { PageTitle } from "../components/PageTitle";
import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button } from "../components/Buttons";
import { useNavigate } from "react-router";

export const HomePage: FC = () => {
  const [questions, setQuestions] = useState<
    QuestionData[]
  >([]);
  const [questionsLoading, setQuestionsLoading] =
    useState(true);

  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions =
        await getUnansweredQuestions();

      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };

    doGetUnansweredQuestions();
  }, []);

  const navigate = useNavigate();

  const handleAskQuestion = () => {
    navigate("ask");
  };

  return (
    <Page>
      <Container>
        <PageTitle>Unanswered Questions</PageTitle>
        <Button onClick={handleAskQuestion}>
          Ask a question
        </Button>
      </Container>
      {questionsLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
