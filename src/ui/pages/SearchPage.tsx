import { useSearchParams } from "react-router-dom";
import { Page } from "./Page";
import { useEffect, useState } from "react";
import {
  QuestionData,
  searchQuestion,
} from "../../QuestionsData";
import { QuestionList } from "@components/QuestionList";
import styled from "@emotion/styled";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [questions, setQuestions] = useState<
    QuestionData[]
  >([]);

  const search = searchParams.get("criteria") || "";

  useEffect(() => {
    const doSearch = async (criteria: string) => {
      const searchResults = await searchQuestion(
        criteria
      );
      setQuestions(searchResults);
    };

    doSearch(search);
  }, [search]);
  return (
    <Page title="Search Results">
      {search && (
        <SearchTerm>for "{search}"</SearchTerm>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};

const SearchTerm = styled.p`
  font-size: 16px;
  font-style: italic;
`;
