import {
  getUnansweredQuestions,
  QuestionData,
} from "../../QuestionsData";
import { QuestionList } from "../components/QuestionList";
import { Page } from "./Page";
import { PageTitle } from "../components/PageTitle";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { PrimaryButton } from "../../Styles";

export const HomePage = () => {
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

  const handleAskQuestion = () => {
    console.log("TODO - navigate to the AskPage");
  };

  return (
    <Page>
      <Container>
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestion}>
          Ask a question
        </PrimaryButton>
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
