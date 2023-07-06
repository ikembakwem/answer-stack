import { Page } from "./Page";
import { useParams } from "react-router";
import {
  QuestionData,
  getQuestion,
} from "../../QuestionsData";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  AuthorAndTime,
  FieldContainer,
  FieldError,
  FieldLabel,
  FieldTextArea,
  Fieldset,
  FormButtonContainer,
  gray6,
} from "../../Styles";
import { AnswerList } from "../components/AnswerList";
import { useForm } from "react-hook-form";
import { Button } from "../components/Buttons";

type FormData = {
  content: string;
};

export const QuestionPage = () => {
  const [question, setQuestion] =
    useState<QuestionData | null>(null);
  const { questionId } = useParams();

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  useEffect(() => {
    const doGetQuestion = async (questionId: number) => {
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
            <PaddingX>
              <AuthorAndTime>
                {`Asked by ${
                  question.userName
                } on ${question.created.toLocaleDateString()} ${question.created.toLocaleTimeString()}`}
              </AuthorAndTime>
            </PaddingX>
            <AnswerList data={question.answers} />
            <AnswerForm>
              <Fieldset>
                <FieldContainer>
                  <FieldLabel htmlFor="content">
                    Your Answer
                  </FieldLabel>
                  <FieldTextArea
                    id="content"
                    {...register("content", {
                      required: true,
                      minLength: 50,
                    })}
                  />
                  {errors.content &&
                    errors.content.type === "required" && (
                      <FieldError>
                        You must provide an answer
                      </FieldError>
                    )}
                  {errors.content &&
                    errors.content.type === "minLength" && (
                      <FieldError>
                        Your answer must be 50 characters or
                        more
                      </FieldError>
                    )}
                </FieldContainer>
                <FormButtonContainer>
                  <Button type="submit">
                    Submit Your Answer
                  </Button>
                </FormButtonContainer>
              </Fieldset>
            </AnswerForm>
          </>
        )}
      </Container>
    </Page>
  );
};

const PaddingX = styled.div`
  padding: 10px 0;
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

const AnswerForm = styled.form`
  margin-top: 20px;
`;
