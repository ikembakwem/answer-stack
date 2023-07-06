import { useForm } from "react-hook-form";
import { Page } from "./Page";
import {
  FieldContainer,
  FieldError,
  FieldInput,
  FieldLabel,
  Fieldset,
  FieldTextArea,
  FormButtonContainer,
  SubmissionSuccess,
} from "../../Styles";
import { Button } from "../components/Buttons";
import { useState } from "react";
import { postQuestion } from "../../QuestionsData";

type FormData = {
  title: string;
  content: string;
};

export const AskPage = () => {
  const [successfullySubmitted, setSuccessfullySubmitted] =
    useState(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const submitForm = async (data: FormData) => {
    const result = await postQuestion({
      title: data.title,
      content: data.content,
      userName: "Bob",
      created: new Date(),
    });

    setSuccessfullySubmitted(result ? true : false);
  };

  return (
    <Page title="Ask Page">
      <form onSubmit={handleSubmit(submitForm)}>
        <Fieldset
          disabled={isSubmitting || successfullySubmitted}
        >
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              id="title"
              type="text"
              {...register("title", {
                required: true,
                minLength: 10,
              })}
            />
            {errors.title &&
              errors.title.type === "required" && (
                <FieldError>
                  You must enter a title for your question
                </FieldError>
              )}
            {errors.title &&
              errors.title.type === "minLength" && (
                <FieldError>
                  Question title must be at least 10
                  characters
                </FieldError>
              )}
          </FieldContainer>
          <FieldContainer>
            <FieldLabel htmlFor="content">
              Content
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
                  You must provide a question
                </FieldError>
              )}
            {errors.content &&
              errors.content.type === "minLength" && (
                <FieldError>
                  Question must contain at least 50
                  characters
                </FieldError>
              )}
          </FieldContainer>
          <FormButtonContainer>
            <Button type="submit">
              Submit Your Question
            </Button>
          </FormButtonContainer>
          {successfullySubmitted && (
            <SubmissionSuccess>
              Your question was successfully posted
            </SubmissionSuccess>
          )}
        </Fieldset>
      </form>
    </Page>
  );
};

export default AskPage;
