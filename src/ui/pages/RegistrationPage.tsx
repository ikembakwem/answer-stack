import styled from "@emotion/styled";
import { Button } from "../components/Buttons";
import { Page } from "./Page";
import { FormEvent } from "react";
import { Input } from "../components/Input";

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
};

const defaultData: Data = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
};

export const RegistrationPage = () => {
  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const contact = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      username: formData.get("username"),
    } as Data;

    console.log("Submitted details: ", contact);
  };

  return (
    <Page title="Registration">
      <div>
        <form onSubmit={handleSubmit}>
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
              required
            />
          </FieldStyle>

          <Button type="submit">Register</Button>
        </form>
      </div>
    </Page>
  );
};

const FieldStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;
