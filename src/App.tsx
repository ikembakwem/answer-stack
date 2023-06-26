import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./ui/pages/HomePage";
import { SearchPage } from "./ui/pages/SearchPage";
import { AskPage } from "./ui/pages/AskPage";
import { SignInPage } from "./ui/pages/SignInPage";
import { Layout } from "./ui/components/Layout";

const router = createBrowserRouter([
  {
    path: "",
    Component: Layout,
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
