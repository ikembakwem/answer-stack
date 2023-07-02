import styled from "@emotion/styled";
import { Button } from "../components/Buttons";
import { Page } from "./Page";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
};

export const RegistrationPage = () => {
  const { register, handleSubmit } = useForm<Data>();
  const navigate = useNavigate();

  const onSubmit = (data: Data) => {
    console.log("Submitted data", data);
    navigate("/welcome");
  };

  return (
    <Page title="Registration">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldStyle>
            <label htmlFor="firstName">First name</label>
            <Input
              type="text"
              id="firstName"
              {...register("firstName")}
            />
          </FieldStyle>

          <FieldStyle>
            <label htmlFor="lastName">Last name</label>
            <Input
              type="text"
              id="lastName"
              {...register("lastName")}
            />
          </FieldStyle>
          <FieldStyle>
            <label htmlFor="email">Email address</label>
            <Input
              type="email"
              id="email"
              {...register("email")}
            />
          </FieldStyle>
          <FieldStyle>
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              id="username"
              {...register("username")}
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
