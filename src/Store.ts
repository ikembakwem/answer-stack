import { QuestionData } from "./QuestionsData";

interface QuestionsState {
  readonly loading: boolean;
  readonly unanswered: QuestionData[];
  readonly viewing: QuestionData | null;
  readonly searched: QuestionData[];
}

export interface AppState {
  readonly questions: QuestionsState;
}

const initialQuestionState: QuestionsState = {
  loading: false,
  unanswered: [],
  viewing: null,
  searched: [],
};

// Actions
export const GETTINGUNANSWEREDQUESTIONS =
  "GettingUnansweredQuestions";
export const gettingUnansweredQuestionsAction = () =>
  ({
    type: GETTINGUNANSWEREDQUESTIONS,
  } as const);

export const GOTUNANSWEREDQUESTIONS =
  "GotUnansweredQuestions";
export const gotUnansweredQuestionsAction = (
  questions: QuestionData[]
) =>
  ({
    type: GOTUNANSWEREDQUESTIONS,
    questions,
  } as const);

export const GETTINGQUESTION = "GettingQuestion";
export const gettingQuestionAction = () => ({
  type: GETTINGQUESTION,
});

export const GOTQUESTION = "GotQuestion";
export const gotQuestionAction = (
  question: QuestionData | null
) =>
  ({
    type: GOTQUESTION,
    question,
  } as const);

export const SEARCHINGQUESTIONS = "SearchingQuestions";
export const searchingQuestionsAction = () => ({
  type: SEARCHINGQUESTIONS,
});

export const SEARCHEDQUESTIONS = "SearchedQuestions";
export const searchedQuestionsAction = (
  questions: QuestionData[]
) => ({
  type: SEARCHEDQUESTIONS,
  questions,
});
