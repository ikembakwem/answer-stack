import styled from "@emotion/styled";
import { Button } from "../components/Buttons";
import { Page } from "./Page";
import { Input } from "../components/Input";
import {
  ActionFunctionArgs,
  Form,
  redirect,
} from "react-router-dom";

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  name: string;
};

export const RegistrationPage = () => {
  return (
    <Page title="Registration">
      <div>
        <Form method="post">
          <FieldStyle>
            <label htmlFor="firstName">
              First name
            </label>
            <Input
              name="firstName"
              type="text"
              id="firstName"
            />
          </FieldStyle>

          <FieldStyle>
            <label htmlFor="lastName">Last name</label>
            <Input
              name="lastName"
              type="text"
              id="lastName"
            />
          </FieldStyle>
          <FieldStyle>
            <label htmlFor="email">Email address</label>
            <Input
              name="email"
              type="email"
              id="email"
            />
          </FieldStyle>
          <FieldStyle>
            <label htmlFor="username">Username</label>
            <Input
              name="username"
              type="text"
              id="username"
            />
          </FieldStyle>
          <FieldStyle>
            <label htmlFor="name">Name</label>
            <Input name="name" type="text" id="name" />
          </FieldStyle>

          <Button type="submit">Register</Button>
        </Form>
      </div>
    </Page>
  );
};

const FieldStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export async function registerAction({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const contact = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    username: formData.get("username"),
    name: formData.get("name"),
  } as Data;

  console.log("Submitted details: ", contact);

  return redirect(`/welcome`);
}
