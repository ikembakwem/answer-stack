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

const router = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: HomePage },
      { path: "/search", Component: SearchPage },
      { path: "/ask", Component: AskPage },
      { path: "/signin", Component: SignInPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
