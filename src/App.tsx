import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./ui/pages/HomePage";
import { SearchPage } from "./ui/pages/SearchPage";
import { AskPage } from "./ui/pages/AskPage";
import { SignInPage } from "./ui/pages/SignInPage";
import { Layout } from "./ui/components/Layout";
import { ErrorPage } from "./ui/pages/ErrorPage";
import { QuestionPage } from "./ui/pages/QuestionPage";

const router = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/ask", element: <AskPage /> },
      { path: "/signin", element: <SignInPage /> },
      {
        path: "/questions/:questionId",
        element: <QuestionPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
