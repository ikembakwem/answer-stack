import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "@pages/HomePage";
import { SearchPage } from "@pages/SearchPage";
import { SignInPage } from "@pages/SignInPage";
import { Layout } from "@components/Layout";
import { ErrorPage } from "@pages/ErrorPage";
import { QuestionPage } from "@pages/QuestionPage";
import { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import {
  registerAction,
  RegistrationPage,
} from "./ui/pages/RegistrationPage";
import { RegisterSuccessPage } from "@pages/RegisterSuccessPage";
const AskPage = lazy(
  () => import("./ui/pages/AskPage")
);

const Loading = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const router = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      {
        path: "/register",
        element: <RegistrationPage />,
        action: registerAction,
      },

      {
        path: "/ask",
        element: (
          <Suspense
            fallback={<Loading>Loading...</Loading>}
          >
            <AskPage />
          </Suspense>
        ),
      },
      { path: "/signin", element: <SignInPage /> },
      {
        path: "/questions/:questionId",
        element: <QuestionPage />,
      },
      {
        path: "/welcome",
        element: <RegisterSuccessPage />,
      },
    ],
  },
  { path: "/register", element: <RegistrationPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
