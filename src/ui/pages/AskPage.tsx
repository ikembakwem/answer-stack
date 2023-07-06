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
} from "../../Styles";
import { Button } from "../components/Buttons";

type FormData = {
  title: string;
  content: string;
};

export const AskPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });
  return (
    <Page title="Ask Page">
      <form>
        <Fieldset>
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
        </Fieldset>
      </form>
    </Page>
  );
};

export default AskPage;
