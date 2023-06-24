import styled from "@emotion/styled";
import { Header } from "./ui/components/Header";
import { HomePage } from "./ui/pages/HomePage";
import { fontSize, fontfamily, gray2 } from "./Styles";

function App() {
  return (
    <Wrapper>
      <Header />
      <HomePage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: ${fontfamily};
  font-size: ${fontSize};
  color: ${gray2};
  text-align: center;
`;

export default App;
