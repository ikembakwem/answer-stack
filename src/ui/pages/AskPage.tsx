import { useForm } from "react-hook-form";
import { Page } from "./Page";
import {
  FieldContainer,
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
  const { register } = useForm<FormData>();
  return (
    <Page title="Ask Page">
      <form>
        <Fieldset>
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
        </Fieldset>
      </form>
    </Page>
  );
};

export default AskPage;
