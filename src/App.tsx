import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./ui/pages/HomePage";
import { SearchPage } from "./ui/pages/SearchPage";
import { SignInPage } from "./ui/pages/SignInPage";
import { Layout } from "./ui/components/Layout";
import { ErrorPage } from "./ui/pages/ErrorPage";
import { QuestionPage } from "./ui/pages/QuestionPage";
import { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { RegistrationPage } from "./ui/pages/RegistrationPage";
import { RegisterSuccessPage } from "./ui/pages/RegisterSuccessPage";
const AskPage = lazy(() => import("./ui/pages/AskPage"));

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
