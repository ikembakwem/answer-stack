import { useForm } from "react-hook-form";
import { Page } from "./Page";
import {
  FieldContainer,
  FieldInput,
  FieldLabel,
  FieldSet,
  FieldTextArea,
  FormButtonContainer,
} from "../../Styles";
import { Button } from "../components/Buttons";

type FormData = {
  title: string;
  content: string;
};

export const AskPage = () => {
  const { register } = useForm<FormData>();
  return (
    <Page title="Ask Page">
      <form>
        <FieldSet>
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              id="title"
              type="text"
              {...register("title")}
            />
          </FieldContainer>
          <FieldContainer>
            <FieldLabel htmlFor="content">
              Content
            </FieldLabel>
            <FieldTextArea
              id="content"
              {...register("content")}
            />
          </FieldContainer>
          <FormButtonContainer>
            <Button type="submit">
              Submit Your Question
            </Button>
          </FormButtonContainer>
        </FieldSet>
      </form>
    </Page>
  );
};

export default AskPage;
