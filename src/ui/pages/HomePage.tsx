import { getUnansweredQuestions } from "../../QuestionsData";
import { QuestionList } from "../components/QuestionList";
import { Page } from "./Page";
import { PageTitle } from "../components/PageTitle";

export const HomePage = () => (
  <Page>
    <div>
      <PageTitle>Unanswered Questions</PageTitle>
      <button>Ask a question</button>
    </div>
    <QuestionList data={getUnansweredQuestions()} />
  </Page>
);
