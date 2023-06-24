/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Header } from "./ui/components/Header";
import { HomePage } from "./ui/pages/HomePage";
import { fontSize, fontfamily, gray2 } from "./Styles";

function App() {
  return (
    <div
      css={css`
        font-family: ${fontfamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
