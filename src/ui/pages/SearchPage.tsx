import { useSearchParams } from "react-router-dom";
import { Page } from "./Page";
import { useEffect } from "react";
import { searchQuestion } from "../../QuestionsData";
import { QuestionList } from "../components/QuestionList";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import {
  searchedQuestionsAction,
  searchingQuestionsAction,
} from "../../store/questionSlice";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.questions.searched);

  const search = searchParams.get("criteria") || "";

  useEffect(() => {
    const doSearch = async (criteria: string) => {
      dispatch(searchingQuestionsAction());

      const searchResults = await searchQuestion(criteria);
      dispatch(searchedQuestionsAction(searchResults));
    };

    doSearch(search);
  }, [search]);
  return (
    <Page title="Search Results">
      {search && <SearchTerm>for "{search}"</SearchTerm>}
      <QuestionList data={questions} />
    </Page>
  );
};

const SearchTerm = styled.p`
  font-size: 16px;
  font-style: italic;
`;
