import {
  getUnansweredQuestions,
  QuestionData,
} from "../../QuestionsData";
import { QuestionList } from "../components/QuestionList";
import { Page } from "./Page";
import { PageTitle } from "../components/PageTitle";
import { useEffect, useState } from "react";

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

  return (
    <Page>
      <div>
        <PageTitle>Unanswered Questions</PageTitle>
        <button>Ask a question</button>
      </div>
      {questionsLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};
