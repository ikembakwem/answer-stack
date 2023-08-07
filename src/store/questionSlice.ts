import { QuestionData } from "../QuestionsData";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface QuestionsState {
  readonly loading: boolean;
  readonly unanswered: QuestionData[];
  readonly viewing: QuestionData | null;
  readonly searched: QuestionData[];
}

const initialQuestionState: QuestionsState = {
  loading: false,
  unanswered: [],
  viewing: null,
  searched: [],
};

export const questionSlice = createSlice({
  name: "questions",
  initialState: initialQuestionState,
  reducers: {
    gettingUnansweredQuestionsAction: (state) => {
      state.loading = true;
    },
    gotUnansweredQuestionsAction: (
      state,
      action: PayloadAction<QuestionData[]>
    ) => {
      state.unanswered = action.payload;
      state.loading = false;
    },
    gettingQuestionAction: (state) => {
      state.viewing = null;
      state.loading = true;
    },
    gotQuestionAction: (state, action: PayloadAction<QuestionData | null>) => {
      state.viewing = action.payload;
      state.loading = false;
    },
    searchingQuestionsAction: (state) => {
      state.searched = [];
      state.loading = true;
    },
    searchedQuestionsAction: (state, action: PayloadAction<QuestionData[]>) => {
      state.searched = action.payload;
      state.loading = false;
    },
  },
});

export const {
  gettingQuestionAction,
  gotUnansweredQuestionsAction,
  gettingUnansweredQuestionsAction,
  gotQuestionAction,
  searchedQuestionsAction,
  searchingQuestionsAction,
} = questionSlice.actions;

export default questionSlice.reducer;
