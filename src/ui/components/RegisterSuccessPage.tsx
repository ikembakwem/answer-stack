import { useParams } from "react-router-dom";
import { Page } from "../pages/Page";

export const RegisterSuccessPage = () => {
  const { firstName } = useParams<{
    firstName: string;
  }>();

  return (
    <Page title="Resgistration Successful">
      <p>
        {firstName}, your account was successfully
        created!
      </p>
    </Page>
  );
};
