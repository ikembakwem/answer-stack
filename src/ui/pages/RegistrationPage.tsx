import styled from "@emotion/styled";
import { Button } from "../components/Buttons";
import { Page } from "./Page";
import { useState, FormEvent } from "react";

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
  const [userData, setUserData] =
    useState<Data>(defaultData);

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log("Submitted data", userData);
  };

  return (
    <Page title="Registration">
      <div>
        <form onSubmit={handleSubmit}>
          <FieldStyle>
            <label htmlFor="firstName">
              First name
            </label>
            <input
              type="text"
              id="name"
              value={userData.firstName}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  firstName: e.target.value,
                })
              }
            />
          </FieldStyle>
          <FieldStyle>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              value={userData.lastName}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  lastName: e.target.value,
                })
              }
            />
          </FieldStyle>
          <FieldStyle>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
            />
          </FieldStyle>
          <FieldStyle>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userData.username}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  username: e.target.value,
                })
              }
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
