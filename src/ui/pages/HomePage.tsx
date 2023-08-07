import { getUnansweredQuestions } from "../../QuestionsData";
import { QuestionList } from "../components/QuestionList";
import { Page } from "./Page";
import { PageTitle } from "../components/PageTitle";
import { FC, useEffect } from "react";
import styled from "@emotion/styled";
import { Button } from "../components/Buttons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  gettingUnansweredQuestionsAction,
  gotUnansweredQuestionsAction,
} from "../../store/questionSlice";

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: RootState) => state.questions.unanswered
  );
  const questionsLoading = useSelector(
    (state: RootState) => state.questions.loading
  );

  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      dispatch(gettingUnansweredQuestionsAction());

      const unansweredQuestions = await getUnansweredQuestions();
      dispatch(gotUnansweredQuestionsAction(unansweredQuestions));
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
        <Button onClick={handleAskQuestion}>Ask a question</Button>
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
