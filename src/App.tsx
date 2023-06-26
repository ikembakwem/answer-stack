import styled from "@emotion/styled";
import { Header } from "./ui/components/Header";
import { HomePage } from "./ui/pages/HomePage";
import { fontSize, fontfamily, gray2 } from "./Styles";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { SearchPage } from "./ui/pages/SearchPage";
import { AskPage } from "./ui/pages/AskPage";
import { SignInPage } from "./ui/pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route
            path="search"
            element={<SearchPage />}
          />
          <Route path="ask" element={<AskPage />} />
          <Route
            path="signin"
            element={<SignInPage />}
          />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  font-family: ${fontfamily};
  font-size: ${fontSize};
  color: ${gray2};
`;

export default App;
